"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import useStore from "@/lib/store";
import SearchBox from "./SearchBox";
import {
  Info,
  ArrowLeftIcon,
  Tags,
  UserRound,
  MapPin,
  Minus,
  Plus,
} from "lucide-react";

const Page1 = ({ setComponent }) => {
  const {
    pickup,
    destination,
    stop,
    date,
    time,
    additionalOptions,
    vehicleType,
    vehicleDetails,
    totalPrice,
    hourlyBookingCount,
    additionalVehicleCount,
    setPickup,
    setDestination,
    setStop,
    setDate,
    setTime,
    setVehicleType,
    setVehicleDetails,
    setDistances,
    setAdditionalOptions,
    setHourlyBookingCount,
    setAdditionalVehicleCount,
    calculateTotalPrice,
  } = useStore();

  const [showAllOptions, setShowAllOptions] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [error, setError] = useState("");
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(false);

  const options = [
    { name: "Hourly Bookings" },
    { name: "Add More Vehicles", price: "$15" },
    { name: "Return Trip", price: "$20" },
    { name: "Party Van", price: "$25" },
    { name: "Luggage Trailer", price: "$30" },
    { name: "Child Seat", price: "$35" },
    { name: "Disability Seat Driver", price: "$35" },
  ];

  const vehicles = {
    smallVan: {
      name: "Small Van",
      image: "/vehicles/Vito1.png",
      passengerLimit: "8 Seater",
      averageCostPerPerson: "$15",
      minimumPassengers: 4,
      cardDetails: "Mercedes-Benz V-Class or Similar",
      baseFare: 40,
      hourlyRate: 60,
    },
    largeVan: {
      name: "Large Van",
      image: "/vehicles/2.png",
      passengerLimit: "10 Seater",
      averageCostPerPerson: "$20",
      minimumPassengers: 2,
      cardDetails: "Toyota Hi- Ace or Similar",
      baseFare: 50,
      hourlyRate: 100,
    },
    bus: {
      name: "Bus",
      image: "/vehicles/coaster.png",
      passengerLimit: "30 Seater",
      averageCostPerPerson: "$10",
      minimumPassengers: 3,
      cardDetails: "Toyota Coaster or Similar",
      baseFare: 150,
      hourlyRate: 150,
    },
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setIsDateSelected(true);
    calculateTotalPrice();
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    setIsTimeSelected(true);
    calculateTotalPrice();
  };

  const handleOptionChange = (option) => {
    if (additionalOptions.includes(option.name)) {
      setAdditionalOptions(
        additionalOptions.filter((opt) => opt !== option.name)
      );
    } else {
      setAdditionalOptions([...additionalOptions, option.name]);
    }
    calculateTotalPrice();
  };

  const handleIncrement = (count, setCount) => {
    setCount(count + 1);
    calculateTotalPrice();
  };

  const handleDecrement = (count, setCount) => {
    setCount(count > 1 ? count - 1 : 1);
    calculateTotalPrice();
  };

  const toggleOptions = () => {
    setShowAllOptions(!showAllOptions);
  };

  useEffect(() => {
    const calculateRoute = async () => {
      if (pickup && destination) {
        try {
          const response = await axios.get(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${
              pickup.lon
            },${pickup.lat};${destination.lon},${destination.lat}${
              stop ? `;${stop.lon},${stop.lat}` : ""
            }`,
            {
              params: {
                access_token:
                  "pk.eyJ1IjoidGFydW4yNTA2IiwiYSI6ImNsaDdwbzlvZTAwdWkzcW8xM3Bib3k4bzIifQ.KY0XQwjRpgkn7KYvdaXDbQ",
                geometries: "geojson",
              },
            }
          );

          const data = response.data;
          const route = data.routes[0];
          const distances = {
            distanceStartToEnd: route.distance / 1000,
            distanceStartToStop: stop ? route.legs[0].distance / 1000 : 0,
            distanceStopToEnd: stop ? route.legs[1].distance / 1000 : 0,
          };
          setDistances(distances);
          calculateTotalPrice();
        } catch (error) {
          console.error(
            "Error calculating route:",
            error.response?.data || error.message
          );
        }
      }
    };

    calculateRoute();
  }, [pickup, destination, stop, setDistances, calculateTotalPrice]);

  useEffect(() => {
    if (!date) {
      const today = new Date().toISOString().split("T")[0];
      setDate(today);
    }
    if (!time) {
      const now = new Date();
      const formattedTime = now.toTimeString().slice(0, 5);
      setTime(formattedTime);
    }
    calculateTotalPrice();
  }, [date, time, setDate, setTime, calculateTotalPrice]);

  const handleVehicleSelection = (type) => {
    setVehicleType(type);
    setVehicleDetails(vehicles[type]);
    calculateTotalPrice();
  };

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  const handleNextClick = () => {
    if (!pickup || !destination) {
      setError("Please fill in all required fields.");
      setTimeout(() => setError(""), 3000);
    } else {
      setError("");
      setFormStep(2);
    }
  };

  const handleNextComponent = () => {
    if (!pickup || !destination || !date || !time || !vehicleType) {
      setError("Please fill in all required fields.");
      setTimeout(() => setError(""), 3000);
    } else {
      setError("");
      setComponent(2);
    }
  };

  return (
    <div>
      <div className="relative flex flex-col lg:flex-row lg:h-full lg:p-0 p-3">
        <div className="lg:hidden block">
          <div className="max-w-md mx-auto bg-white border rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Ready to Book a Ride?
            </h2>

            {formStep === 1 && (
              <>
                <div className="mb-4">
                  <SearchBox
                    label="Pickup Location"
                    onSelect={setPickup}
                    initialValue={pickup?.name}
                  />
                </div>
                <div className="mb-4">
                  <SearchBox
                    label="Destination"
                    onSelect={setDestination}
                    initialValue={destination?.name}
                  />
                </div>
                <div className="mb-4">
                  <button
                    onClick={() => setStop(stop ? null : { lat: 0, lon: 0 })}
                    className="flex items-center mb-4 text-sm font-bold text-yellow-600"
                  >
                    <svg
                      className="w-4 h-4 mr-1 fill-current"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        fill="currentColor"
                        d="M13 9H11V7A1 1 0 0 0 9 7V9H7A1 1 0 0 0 7 11H9V13A1 1 0 0 0 11 13V11H13A1 1 0 0 0 13 9Z"
                      />
                    </svg>
                    {stop ? "Remove Stop" : "Add Stop"}
                  </button>
                  {stop && (
                    <SearchBox
                      label="Stop Location"
                      onSelect={setStop}
                      initialValue={stop?.name}
                    />
                  )}
                </div>
                {error && (
                  <div className="mb-4 text-red-500 text-sm">{error}</div>
                )}

                {/* uncomment this when final launch */}
                {/* 
                <button className="w-full bg-yellow-500/20 text-black p-2 rounded-md font-bold">
                  Total Price: ${totalPrice.toFixed(2)}
                </button> */}

                <button
                  // onClick={handleNextClick}
                  className="w-full bg-yellow-500 text-black p-2 font-bold"
                >
                  {/* Next */} Launching Soon
                </button>
              </>
            )}

            {formStep === 2 && (
              <>
                <button
                  onClick={() => setFormStep(1)}
                  className="mb-4 text-gray-700"
                >
                  <ArrowLeftIcon className="w-6 h-6" />
                </button>
                <div className="flex items-center mb-4">
                  <MapPin className="mr-4" />
                  <span>{pickup?.name || "N/A"}</span>
                </div>
                <div className="flex items-center mb-4">
                  <MapPin className="mr-4" />
                  <span>{destination?.name || "N/A"}</span>
                </div>
                {stop && (
                  <>
                    <h2 className="font-bold mb-2">Stop Point</h2>
                    <div className="flex items-center mb-4">
                      <MapPin className="mr-4" />
                      <span>{stop?.name || "N/A"}</span>
                    </div>
                  </>
                )}

                <div className="mb-4">
                  <p className="text-sm text-gray-700">
                    {formattedDate || "No date selected"}
                  </p>
                  <p className="text-sm text-gray-700">{time}</p>
                </div>
                <p className="text-2xl font-bold text-gray-700 mb-4">
                  Select Date & Time
                </p>
                <p className="mb-2 text-xs text-gray-700">
                  Trip must be selected two days in advance
                </p>
                <div className="mb-4 space-y-2">
                  <div className="relative">
                    <input
                      type="date"
                      className={`w-full p-2 text-black border border-gray-300 rounded ${
                        isDateSelected ? "" : "text-transparent"
                      }`}
                      value={isDateSelected ? date : ""}
                      onChange={handleDateChange}
                      onFocus={() => setIsDateSelected(true)}
                    />
                    {!isDateSelected && (
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 font-bold">
                        Today
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="time"
                      className={`w-full p-2 text-black border border-gray-300 rounded ${
                        isTimeSelected ? "" : "text-transparent"
                      }`}
                      value={isTimeSelected ? time : ""}
                      onChange={handleTimeChange}
                      onFocus={() => setIsTimeSelected(true)}
                    />
                    {!isTimeSelected && (
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 font-bold">
                        Now
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-2xl font-bold text-gray-700 mb-4">
                  Select Vehicle Type
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  {Object.keys(vehicles).map((type) => (
                    <button
                      key={type}
                      className={`flex flex-col justify-center w-1/3 p-2 h-30 rounded-lg ${
                        vehicleType === type
                          ? "bg-white border border-yellow-500"
                          : "bg-gray-200 border border-gray-300"
                      }`}
                      onClick={() => handleVehicleSelection(type)}
                    >
                      <Image
                        src={vehicles[type].image}
                        alt={vehicles[type].name}
                        height={70}
                        width={70}
                        layout="fixed"
                        className="mt-3"
                      />
                      <p className="mt-2 text-sm text-black">
                        {vehicles[type].name}
                      </p>
                      <p className="text-gray-600 text-xs">
                        {vehicles[type].passengerLimit}
                      </p>
                      <p className="text-sm font-bold text-black">
                        {vehicles[type].averageCostPerPerson}
                      </p>
                    </button>
                  ))}
                </div>
                {vehicleType && (
                  <div className="w-full p-1 mt-2 text-black border border-yellow-500 rounded-md bg-yellow-500/20">
                    <p className="flex items-center justify-between font-bold text-md">
                      {vehicleDetails.cardDetails}
                      <Image
                        src={vehicleDetails.image}
                        alt={vehicleDetails.name}
                        width={110}
                        height={110}
                      />
                    </p>
                    <div className="text-black">
                      <p className="flex items-center text-sm">
                        <Tags
                          className="mr-1 text-yellow-600"
                          style={{
                            width: "20px",
                            height: "20px",
                            transform: "scaleX(-1)",
                          }}
                        />
                        <strong className="mr-1">
                          {vehicleDetails.averageCostPerPerson}
                        </strong>
                        <span className="text-xxxs">Per Person</span>
                      </p>
                      <p className="flex text-sm">
                        <UserRound
                          className="mr-1"
                          style={{ width: "16px", height: "16px" }}
                        />
                        <span>{vehicleDetails.passengerLimit}</span>
                      </p>
                      <p className="flex items-center text-xs">
                        Minimum {vehicleDetails.minimumPassengers} Passengers
                        <Info
                          className="ml-1 text-sm text-yellow-600"
                          style={{ width: "0.8em", height: "0.8em" }}
                        />
                      </p>
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <p className="text-2xl font-bold text-gray-700">
                    Additional Services
                  </p>
                  <div className="p-2 mt-4 bg-gray-100 border border-gray-500 rounded-md">
                    {options
                      .slice(0, showAllOptions ? options.length : 3)
                      .map((option, index) => (
                        <div key={option.name}>
                          <div className="flex items-center justify-between p-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={additionalOptions.includes(
                                  option.name
                                )}
                                onChange={() => handleOptionChange(option)}
                                className="w-4 h-4 text-yellow-200 border-gray-300 rounded-full"
                              />
                              <span className="text-sm text-black">
                                {option.name}
                              </span>
                            </label>
                            <span className="text-sm text-gray-600">
                              {option.name === "Hourly Bookings"
                                ? `$${vehicleDetails.hourlyRate || 0}`
                                : option.price}
                            </span>
                          </div>
                          {option.name === "Hourly Bookings" &&
                            additionalOptions.includes("Hourly Bookings") && (
                              <div className="flex flex-col items-center mb-4">
                                <p className="text-sm">Book for</p>
                                <div className="flex items-center mb-2 space-x-4">
                                  <button
                                    onClick={() =>
                                      handleDecrement(
                                        hourlyBookingCount,
                                        setHourlyBookingCount
                                      )
                                    }
                                    className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-white rounded-full"
                                  >
                                    <Minus />
                                  </button>
                                  <input
                                    type="number"
                                    value={hourlyBookingCount}
                                    onChange={(e) =>
                                      setHourlyBookingCount(
                                        Math.max(
                                          1,
                                          parseInt(e.target.value) || 1
                                        )
                                      )
                                    }
                                    className="w-20 p-2 text-center rounded"
                                  />
                                  <button
                                    onClick={() =>
                                      handleIncrement(
                                        hourlyBookingCount,
                                        setHourlyBookingCount
                                      )
                                    }
                                    className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-yellow-500 rounded-full"
                                  >
                                    <Plus />
                                  </button>
                                </div>
                                <p className="text-sm">Hours</p>
                              </div>
                            )}
                          {option.name === "Add More Vehicles" &&
                            additionalOptions.includes("Add More Vehicles") && (
                              <div className="flex flex-col items-center mb-4">
                                <p className="text-sm">Add an Additional</p>
                                <div className="flex items-center mb-2 space-x-4">
                                  <button
                                    onClick={() =>
                                      handleDecrement(
                                        additionalVehicleCount,
                                        setAdditionalVehicleCount
                                      )
                                    }
                                    className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-white rounded-full"
                                  >
                                    <Minus />
                                  </button>
                                  <input
                                    type="number"
                                    value={additionalVehicleCount}
                                    onChange={(e) =>
                                      setAdditionalVehicleCount(
                                        Math.max(
                                          1,
                                          parseInt(e.target.value) || 1
                                        )
                                      )
                                    }
                                    className="w-20 p-2 text-center rounded"
                                  />
                                  <button
                                    onClick={() =>
                                      handleIncrement(
                                        additionalVehicleCount,
                                        setAdditionalVehicleCount
                                      )
                                    }
                                    className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-yellow-500 rounded-full"
                                  >
                                    <Plus />
                                  </button>
                                </div>
                                <p className="text-sm">Vans</p>
                              </div>
                            )}
                          {index < options.length - 1 && (
                            <hr className="border-gray-400" />
                          )}
                        </div>
                      ))}
                    {!showAllOptions ? (
                      <button
                        onClick={toggleOptions}
                        className="w-full py-1 text-center text-black text-xs"
                      >
                        See all
                      </button>
                    ) : (
                      <button
                        onClick={toggleOptions}
                        className="w-full py-1 text-center text-black text-xs"
                      >
                        Show Less
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
          {formStep === 2 && (
            <>
              {error && <div className=" text-red-500 text-sm">{error}</div>}
              <button className=" mt-4 w-full bg-yellow-500/20 text-black p-2 rounded-md font-bold">
                Total Price: ${totalPrice.toFixed(2)}
              </button>
              <button
                onClick={handleNextComponent}
                className="w-full bg-yellow-500 text-black p-2 rounded-md font-bold"
              >
                Next
              </button>
            </>
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block  flex-1 ">
          <div className=" p-4 overflow-auto h-[460px] bg-white border lg:border-none ">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Ready to Book a Ride?
            </h2>
            <div className="mb-4">
              <p className="text-sm text-gray-700">
                {formattedDate || "No date selected"}
              </p>
              <p className="text-sm text-gray-700">{time}</p>
            </div>
            <div className="mb-1">
              <SearchBox
                label="Pickup Location"
                onSelect={setPickup}
                initialValue={pickup?.name}
              />
            </div>
            <div className="mb-4">
              <SearchBox
                label="Destination"
                onSelect={setDestination}
                initialValue={destination?.name}
              />
            </div>
            <div className="mb-4">
              <button
                onClick={() => setStop(stop ? null : { lat: 0, lon: 0 })}
                className="flex items-center mb-4 text-sm font-bold text-yellow-600"
              >
                <svg
                  className="w-4 h-4 mr-1 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    fill="currentColor"
                    d="M13 9H11V7A1 1 0 0 0 9 7V9H7A1 1 0 0 0 7 11H9V13A1 1 0 0 0 11 13V11H13A1 1 0 0 0 13 9Z"
                  />
                </svg>
                {stop ? "Remove Stop" : "Add Stop"}
              </button>
              {stop && (
                <SearchBox
                  label="Stop Location"
                  onSelect={setStop}
                  initialValue={stop?.name}
                />
              )}
            </div>
            <p className="text-2xl font-bold text-gray-700">
              Select Date & Time
            </p>
            <p className="mb-2 text-xs text-gray-700">
              Trip must be selected two days in advance
            </p>
            <div className="mb-4">
              <div className="flex  items-center space-x-4">
                <div className="relative">
                  <input
                    type="date"
                    className={`w-full p-2 text-gray-700 border border-gray-300 rounded ${
                      isDateSelected ? "" : "text-transparent"
                    }`}
                    value={isDateSelected ? date : ""}
                    onChange={handleDateChange}
                    onFocus={() => setIsDateSelected(true)}
                  />
                  {!isDateSelected && (
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 font-bold">
                      Today
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="time"
                    className={`w-full p-2 text-gray-700 border border-gray-300 rounded ${
                      isTimeSelected ? "" : "text-transparent"
                    }`}
                    value={isTimeSelected ? time : ""}
                    onChange={handleTimeChange}
                    onFocus={() => setIsTimeSelected(true)}
                  />
                  {!isTimeSelected && (
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 font-bold">
                      Now
                    </span>
                  )}
                </div>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-700 mb-4">
              Select Vehicle Type
            </p>
            <div className="flex items-center space-x-2 mb-4">
              {Object.keys(vehicles).map((type) => (
                <button
                  key={type}
                  className={`flex flex-col justify-center w-1/3 p-2 h-30 rounded-lg ${
                    vehicleType === type
                      ? "bg-white border border-yellow-500"
                      : "bg-gray-200 border border-gray-300"
                  }`}
                  onClick={() => handleVehicleSelection(type)}
                >
                  <Image
                    src={vehicles[type].image}
                    alt={vehicles[type].name}
                    height={70}
                    width={70}
                    layout="fixed"
                    className="mt-3"
                  />
                  <p className="mt-2 text-sm text-black">
                    {vehicles[type].name}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {vehicles[type].passengerLimit}
                  </p>
                  <p className="text-sm font-bold text-black">
                    {vehicles[type].averageCostPerPerson}
                  </p>
                </button>
              ))}
            </div>

            {vehicleType && (
              <div className="w-full p-1 mt-2 text-black border border-yellow-500 rounded-md bg-yellow-500/20">
                <p className="flex items-center justify-between font-bold text-md">
                  {vehicleDetails.cardDetails}
                  <Image
                    src={vehicleDetails.image}
                    alt={vehicleDetails.name}
                    width={110}
                    height={110}
                  />
                </p>
                <div className="text-black">
                  <p className="flex items-center text-sm">
                    <Tags
                      className="mr-1 text-yellow-600"
                      style={{
                        width: "20px",
                        height: "20px",
                        transform: "scaleX(-1)",
                      }}
                    />
                    <strong className="mr-1">
                      {vehicleDetails.averageCostPerPerson}
                    </strong>
                    <span className="text-xxxs">Per Person</span>
                  </p>
                  <p className="flex text-sm">
                    <UserRound
                      className="mr-1"
                      style={{ width: "16px", height: "16px" }}
                    />
                    <span>{vehicleDetails.passengerLimit}</span>
                  </p>
                  <p className="flex items-center text-xs">
                    Minimum {vehicleDetails.minimumPassengers} Passengers
                    <Info
                      className="ml-1 text-sm text-yellow-600"
                      style={{ width: "0.8em", height: "0.8em" }}
                    />
                  </p>
                </div>
              </div>
            )}

            <div className="mt-4 mb-4">
              <p className="text-2xl font-bold text-gray-700">
                Additional Services
              </p>
              <div className="p-2 mt-4 bg-gray-100 border border-gray-500 rounded-md">
                {options
                  .slice(0, showAllOptions ? options.length : 3)
                  .map((option, index) => (
                    <div key={option.name}>
                      <div className="flex items-center justify-between p-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={additionalOptions.includes(option.name)}
                            onChange={() => handleOptionChange(option)}
                            className="w-4 h-4 text-yellow-200 border-gray-300 rounded-full"
                          />
                          <span className="text-sm text-black">
                            {option.name}
                          </span>
                        </label>
                        <span className="text-sm text-gray-600">
                          {option.name === "Hourly Bookings"
                            ? `$${vehicleDetails.hourlyRate || 0}`
                            : option.price}
                        </span>
                      </div>
                      {option.name === "Hourly Bookings" &&
                        additionalOptions.includes("Hourly Bookings") && (
                          <div className="flex flex-col items-center mb-4">
                            <p className="text-sm">Book for</p>
                            <div className="flex items-center mb-2 space-x-4">
                              <button
                                onClick={() =>
                                  handleDecrement(
                                    hourlyBookingCount,
                                    setHourlyBookingCount
                                  )
                                }
                                className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-white rounded-full"
                              >
                                <Minus />
                              </button>
                              <input
                                type="number"
                                value={hourlyBookingCount}
                                onChange={(e) =>
                                  setHourlyBookingCount(
                                    Math.max(1, parseInt(e.target.value) || 1)
                                  )
                                }
                                className="w-20 p-2 text-center rounded"
                              />
                              <button
                                onClick={() =>
                                  handleIncrement(
                                    hourlyBookingCount,
                                    setHourlyBookingCount
                                  )
                                }
                                className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-yellow-500 rounded-full"
                              >
                                <Plus />
                              </button>
                            </div>
                            <p className="text-sm">Hours</p>
                          </div>
                        )}
                      {option.name === "Add More Vehicles" &&
                        additionalOptions.includes("Add More Vehicles") && (
                          <div className="flex flex-col items-center mb-4">
                            <p className="text-sm">Add an Additional</p>
                            <div className="flex items-center mb-2 space-x-4">
                              <button
                                onClick={() =>
                                  handleDecrement(
                                    additionalVehicleCount,
                                    setAdditionalVehicleCount
                                  )
                                }
                                className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-white rounded-full"
                              >
                                <Minus />
                              </button>
                              <input
                                type="number"
                                value={additionalVehicleCount}
                                onChange={(e) =>
                                  setAdditionalVehicleCount(
                                    Math.max(1, parseInt(e.target.value) || 1)
                                  )
                                }
                                className="w-20 p-2 text-center rounded"
                              />
                              <button
                                onClick={() =>
                                  handleIncrement(
                                    additionalVehicleCount,
                                    setAdditionalVehicleCount
                                  )
                                }
                                className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-yellow-500 rounded-full"
                              >
                                <Plus />
                              </button>
                            </div>
                            <p className="text-sm">Vans</p>
                          </div>
                        )}
                      {index < options.length - 1 && (
                        <hr className="border-gray-400" />
                      )}
                    </div>
                  ))}
                {!showAllOptions ? (
                  <button
                    onClick={toggleOptions}
                    className="w-full py-1 text-center text-black text-xs"
                  >
                    See all
                  </button>
                ) : (
                  <button
                    onClick={toggleOptions}
                    className="w-full py-1 text-center text-black text-xs"
                  >
                    Show Less
                  </button>
                )}
              </div>
            </div>
          </div>
          {error && <div className=" text-red-500 text-sm">{error}</div>}
          {/* uncomment this when final launch */}
          {/* <button className="w-full bg-yellow-500/20 text-black p-2 rounded-md font-bold">
            Total Price: ${totalPrice.toFixed(2)} ...
          </button> */}

          <button
            // onClick={handleNextComponent}
            className="w-full bg-yellow-500 text-black p-2 font-bold"
          >
            {/* Next */} Launching Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
