"use client";
import React, { useState, useEffect, useRef } from "react";
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
  Calendar,
  Clock,
  ChevronDown,
  Briefcase,
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
    splitPaymentDetails,
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
    // setSplitPaymentDetails, // Function to update splitPaymentDetails in Zustand
    setPassengers,
    distanceStartToEnd,
  } = useStore();

  const formattedDistance = distanceStartToEnd
    ? distanceStartToEnd.toFixed(2)
    : "0.00";

  const [showAllOptions, setShowAllOptions] = useState(false);
  // const [formStep, setFormStep] = useState(1);
  const [error, setError] = useState("");
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(false);
  const [confirmedOptions, setConfirmedOptions] = useState([]);
  const [splitPaymentOpen, setSplitPaymentOpen] = useState(false);
  // const [splitPayment, setSplitPayment] = useState(false); // Added splitPayment state
  const [selectedPassengers, setSelectedPassengers] = useState(
    splitPaymentDetails.passengers || 1
  ); // Initial state from Zustand
  const splitPayment = useStore((state) => state.splitPayment);
  const setSplitPayment = useStore((state) => state.setSplitPayment);
  const setSplitPaymentDetails = useStore(
    (state) => state.setSplitPaymentDetails
  );

  const options = [
    { name: "Hourly Bookings" },
    { name: "Add More Vehicles", price: 15 },
    { name: "Luggage Trailer", price: 30 },
  ];

  const vehicles = {
    smallVan: {
      name: "Van",
      image: "/vehicles/van.png",
      passengerLimit: "7 Seater",
      averageCostPerPerson: "$10",
      minimumPassengers: 4,
      cardDetails: "Mercedes-Benz V-Class or Similar",
      baseFare: 40,
      hourlyRate: 60,
      luggageLimit: 6,
    },
    largeVan: {
      name: "Mini Bus",
      image: "/vehicles/2.png",
      passengerLimit: "9 Seater",
      averageCostPerPerson: "$22",
      minimumPassengers: 6,
      cardDetails: "Toyota Hi- Ace or Similar",
      baseFare: 60,
      hourlyRate: 100,
      luggageLimit: 8,
    },
    bus: {
      name: "Bus",
      image: "/vehicles/coaster.png",
      passengerLimit: "30 Seater",
      averageCostPerPerson: "$35",
      minimumPassengers: 10,
      cardDetails: "Toyota Coaster or Similar",
      baseFare: 90,
      hourlyRate: 150,
      luggageLimit: 30,
    },
  };

  const { formStep, setFormStep } = useStore();

  const additionalVehicleExtraAmount = useStore(
    (state) => state.additionalVehicleExtraAmount
  );

  const luggageTrailerExtraAmount = useStore(
    (state) => state.luggageTrailerExtraAmount
  );

  const handleConfirm = (optionName) => {
    setConfirmedOptions([...confirmedOptions, optionName]);
  };

  const handleToggle = (option) => {
    if (additionalOptions.includes(option.name)) {
      setConfirmedOptions(
        confirmedOptions.filter((name) => name !== option.name)
      );
    }
    handleOptionChange(option);
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
    if (option.name === "Hourly Bookings") {
      if (!additionalOptions.includes(option.name)) {
        setHourlyBookingCount(3); // Set the minimum value for hourly bookings to 3 when the option is first selected
      }
    }

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

  const handleSplitPaymentConfirm = () => {
    setSplitPaymentDetails({ passengers: selectedPassengers }); // Save passengers in Zustand
    setPassengers(selectedPassengers); // Set passengers globally
    setSplitPaymentOpen(false); // Close the split payment box
  };

  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);

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
                  "pk.eyJ1IjoicnZlcm1iaXQiLCJhIjoiY20xYm9seHQ4MHQ2NTJrc2JrY2JlNWN1YSJ9.d37-XPV0xMZoYPa-YlioqA",
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

  const handleBackClick = () => {
    setFormStep(1); // Set formStep back to 1 using Zustand
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

                <button
                  onClick={handleNextClick}
                  className="w-full bg-yellow-500 text-black rounded-md p-2 font-bold"
                >
                  Next
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

                <p className="text-2xl font-bold text-gray-700 mb-4">
                  Select Date & Time
                </p>

                <div className="mb-4 space-y-2">
                  <div className="relative">
                    {/* Date Input */}
                    <div className="relative w-full">
                      {/* Left Icon */}
                      <span
                        className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"
                        onClick={() => dateInputRef.current.showPicker()}
                      >
                        <Calendar className="text-black" />
                      </span>
                      {/* Input */}
                      <input
                        ref={dateInputRef}
                        type="date"
                        className={`w-full pl-10 py-2 text-gray-700 border border-gray-300 rounded appearance-none ${
                          isDateSelected ? "" : "text-transparent"
                        }`}
                        value={isDateSelected ? date : ""}
                        onChange={handleDateChange}
                        onClick={() => dateInputRef.current.showPicker()}
                        onFocus={() => setIsDateSelected(true)}
                      />
                      {/* Placeholder */}
                      {!isDateSelected && (
                        <span className="absolute left-10 ml-4 top-1/2 transform -translate-y-1/2 text-gray-700 font-bold pointer-events-none">
                          Select Date
                        </span>
                      )}
                      {/* Right Icon */}
                      {/* <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="text-black " />
                  </span> */}
                    </div>
                  </div>
                  <div className="relative">
                    {/* Left Icon */}
                    <span
                      className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"
                      onClick={() => timeInputRef.current.showPicker()}
                    >
                      <Clock className="text-black" />
                    </span>
                    {/* Input */}
                    <input
                      ref={timeInputRef}
                      type="time"
                      className={`w-full pl-10 py-2 text-gray-700 border border-gray-300 rounded appearance-none ${
                        isTimeSelected ? "" : "text-transparent"
                      }`}
                      value={isTimeSelected ? time : ""}
                      onChange={handleTimeChange}
                      onClick={() => timeInputRef.current.showPicker()}
                      onFocus={() => setIsTimeSelected(true)}
                    />
                    {/* Placeholder */}
                    {!isTimeSelected && (
                      <span className="absolute left-10 top-1/2 ml-4 transform -translate-y-1/2 text-gray-700 font-bold pointer-events-none">
                        Select Time
                      </span>
                    )}
                    {/* Right Icon */}
                    {/* <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="text-black" />
                  </span> */}
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
                        <span className="text-green-500">From</span> $
                        {vehicles[type].baseFare}
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
                        {/* Tag Icon */}
                        <Tags
                          className="mr-1 text-yellow-600"
                          style={{
                            width: "20px",
                            height: "20px",
                            transform: "scaleX(-1)",
                          }}
                        />
                        {/* Show total price and discounted price */}
                        <strong
                          className="mr-1 text-yellow-600 text-xl "
                          // style={{ fontWeight: "bold" }}
                        >
                          ${totalPrice.toFixed(2)}
                        </strong>
                        <span className="text-gray-500 text-xl line-through ml-6">
                          {/* Add 15% to the total price */}$
                          {(totalPrice * 1.15).toFixed(2)}
                        </span>
                      </p>
                      <p className="flex text-sm">
                        {/* Passenger Limit */}
                        <UserRound
                          className="mr-1"
                          style={{ width: "16px", height: "16px" }}
                        />
                        <span>{vehicleDetails.passengerLimit}</span>
                        {/* Vertical Divider */}
                        <span className="mx-2">|</span>
                        {/* Luggage Icon and Limit */}
                        <Briefcase className="w-4 h-4" />
                        <span className="ml-1 text-black">
                          x {vehicleDetails.luggageLimit}
                        </span>
                      </p>
                      <p className="flex items-center text-base">
                        Total Distance: {formattedDistance} km
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

                  {/* Split Payment Option (always on top) */}
                  <div
                    className={`p-2 mb-2 mt-4 border rounded-md shadow-sm transition-colors cursor-pointer ${
                      splitPayment
                        ? "border-yellow-500 bg-yellow-500/20"
                        : "border-gray-300 bg-gray-100"
                    }`}
                    onClick={(e) => {
                      if (e.target.tagName !== "BUTTON") {
                        setSplitPaymentOpen(!splitPaymentOpen);
                      }
                    }}
                  >
                    <div className="flex items-center justify-between p-2">
                      <span className="text-sm text-black">Split Payment</span>

                      {/* Toggle Button */}
                      <button
                        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
                          splitPayment ? "bg-yellow-500" : "bg-gray-300"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent box click from triggering
                          setSplitPayment(!splitPayment); // Toggle split payment state globally
                          if (!splitPayment) {
                            setSplitPaymentOpen(true); // Open if toggling on
                          } else {
                            setSplitPaymentOpen(false); // Close if toggling off
                          }
                        }}
                      >
                        <span
                          className={`${
                            splitPayment ? "translate-x-6" : "translate-x-1"
                          } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                        />
                      </button>
                    </div>

                    {/* Conditional content for when the box is open */}
                    {splitPaymentOpen && (
                      <div className="flex flex-col items-center mb-4">
                        <p className="text-sm">Select Passengers</p>
                        <div className="flex items-center mb-2 space-x-4">
                          {/* Decrement button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent box from closing
                              setSelectedPassengers(
                                Math.max(1, selectedPassengers - 1)
                              ); // Decrement passengers but ensure it doesn't go below 1
                            }}
                            className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-white rounded-full"
                          >
                            <Minus />
                          </button>
                          {/* Passenger input field with circle shape */}
                          <div className="flex items-center justify-center border-2 border-yellow-500 rounded-full">
                            <input
                              type="number"
                              value={selectedPassengers}
                              onChange={(e) => {
                                e.stopPropagation(); // Prevent closing the box
                                setSelectedPassengers(
                                  Math.max(1, parseInt(e.target.value) || 1)
                                ); // Ensure input is at least 1
                              }}
                              className="w-10 h-10 text-center rounded-full focus:outline-none" // Make input field a circle
                            />
                          </div>
                          {/* Increment button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent box from closing
                              setSelectedPassengers(selectedPassengers + 1); // Increment passengers count
                            }}
                            className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-yellow-500 rounded-full"
                          >
                            <Plus />
                          </button>
                        </div>

                        {/* Confirm button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent box from closing
                            handleSplitPaymentConfirm(); // Confirm and save the split payment selection
                          }}
                          className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-md w-full"
                        >
                          Confirm
                        </button>

                        {/* Split payment fee note */}
                        <p className="text-xs mt-2 text-gray-500">
                          Minimum 4 Passengers required.
                        </p>
                      </div>
                    )}

                    {/* Text when the box is closed but the option is not confirmed */}
                    {!splitPaymentOpen && !splitPayment && (
                      <p className="text-[10px] ml-2 -mt-2 text-gray-500">
                        (Split among friends)
                      </p>
                    )}

                    {/* Show confirmed message with number of passengers when the option is confirmed */}
                    {splitPayment && !splitPaymentOpen && (
                      <p className="text-[10px] ml-2 -mt-2 text-gray-500">
                        ({selectedPassengers}{" "}
                        {selectedPassengers === 1 ? "passenger" : "passengers"}{" "}
                        Selected)
                      </p>
                    )}

                    {/* Show per person cost below the selected passengers */}
                    {splitPayment &&
                      !splitPaymentOpen &&
                      selectedPassengers > 0 && (
                        <p className="text-[12px] ml-2  text-yellow-500">
                          Price Per Person: $
                          {splitPaymentDetails.passengers > 0
                            ? (
                                totalPrice / splitPaymentDetails.passengers
                              ).toFixed(2)
                            : "0.00"}
                        </p>
                      )}
                  </div>

                  {/* Additional Options (below Split Payment) */}
                  <div className=" ">
                    {options
                      .filter((option) => option.name !== "Split Payment")
                      .slice(0, showAllOptions ? options.length : 2)
                      .map((option) => (
                        <div
                          key={option.name}
                          className={`p-2 mb-2 border rounded-md shadow-sm transition-colors cursor-pointer ${
                            additionalOptions.includes(option.name)
                              ? "border-yellow-500 bg-yellow-500/20"
                              : "border-gray-300 bg-gray-100"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle option selection and allow editing after confirmation
                            if (option.name === "Hourly Bookings") {
                              // If confirmed, reset confirmation
                              if (
                                confirmedOptions.includes("Hourly Bookings")
                              ) {
                                setConfirmedOptions(
                                  confirmedOptions.filter(
                                    (name) => name !== "Hourly Bookings"
                                  )
                                );
                              }
                              handleOptionChange(option);
                            } else if (option.name === "Add More Vehicles") {
                              if (
                                confirmedOptions.includes("Add More Vehicles")
                              ) {
                                setConfirmedOptions(
                                  confirmedOptions.filter(
                                    (name) => name !== "Add More Vehicles"
                                  )
                                );
                              }
                              handleOptionChange(option);
                            } else {
                              handleOptionChange(option);
                            }
                          }}
                        >
                          <div className="flex items-center justify-between p-2">
                            <span className="text-sm text-black">
                              {option.name}
                            </span>

                            {/* Display Price */}

                            <span className="text-sm text-black font-bold">
                              {option.name === "Hourly Bookings" &&
                              vehicleDetails
                                ? confirmedOptions.includes("Hourly Bookings")
                                  ? `$${(
                                      hourlyBookingCount *
                                      (vehicleDetails.hourlyRate || 0)
                                    ).toFixed(2)}`
                                  : `$${vehicleDetails.hourlyRate || 0}.00`
                                : option.name === "Add More Vehicles"
                                ? confirmedOptions.includes("Add More Vehicles")
                                  ? additionalVehicleCount >= 1
                                    ? `$${(
                                        (totalPrice * additionalVehicleCount) /
                                        (additionalVehicleCount + 1)
                                      ).toFixed(2)}`
                                    : "$0.00"
                                  : "$0.00"
                                : option.name === "Luggage Trailer"
                                ? additionalOptions.includes("Luggage Trailer")
                                  ? `$${(
                                      luggageTrailerExtraAmount || 0
                                    ).toFixed(2)}`
                                  : "$0.00"
                                : option.price
                                ? `$${option.price.toFixed(2)}`
                                : "10.00$"}
                            </span>

                            {/* <span className="text-sm text-black font-bold">
                              {option.name === "Hourly Bookings" &&
                              vehicleDetails
                                ? confirmedOptions.includes("Hourly Bookings")
                                  ? `$${(
                                      hourlyBookingCount *
                                      (vehicleDetails.hourlyRate || 0)
                                    ).toFixed(2)}`
                                  : `$${vehicleDetails.hourlyRate || 0}.00`
                                : option.name === "Add More Vehicles"
                                ? confirmedOptions.includes("Add More Vehicles")
                                  ? `$${(
                                      additionalVehicleExtraAmount || 0
                                    ).toFixed(2)}`
                                  : "$0.00"
                                : option.name === "Luggage Trailer"
                                ? additionalOptions.includes("Luggage Trailer") // Check if Luggage Trailer is selected
                                  ? `$${(
                                      luggageTrailerExtraAmount || 0
                                    ).toFixed(2)}` // Display luggage trailer amount
                                  : "$0.00"
                                : option.price
                                ? `$${option.price.toFixed(2)}`
                                : "10.00$"}
                            </span> */}
                          </div>

                          {/* Subheading for Hourly Bookings */}
                          {option.name === "Hourly Bookings" &&
                            !additionalOptions.includes("Hourly Bookings") && (
                              <p className="text-[10px] ml-2 -mt-2 text-gray-500">
                                Minimum 3 hours
                              </p>
                            )}

                          {/* Subheading for Add More Vehicles */}
                          {option.name === "Add More Vehicles" &&
                            !additionalOptions.includes(
                              "Add More Vehicles"
                            ) && (
                              <p className="text-[10px] ml-2 -mt-2 text-gray-500">
                                Book Upto 3 Vehicles
                              </p>
                            )}

                          {/* Conditional Render for Hourly Bookings */}
                          {option.name === "Hourly Bookings" &&
                            additionalOptions.includes("Hourly Bookings") && (
                              <div className="flex flex-col items-center mb-4">
                                {!confirmedOptions.includes(
                                  "Hourly Bookings"
                                ) ? (
                                  <>
                                    <p className="text-sm">Book for</p>
                                    <div className="flex items-center mb-2 space-x-4">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleDecrement(
                                            hourlyBookingCount,
                                            setHourlyBookingCount
                                          );
                                        }}
                                        disabled={hourlyBookingCount <= 3}
                                        className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-white rounded-full"
                                      >
                                        <Minus />
                                      </button>
                                      <div className="flex items-center justify-center border-yellow-500 border-2 rounded-full">
                                        <input
                                          type="number"
                                          value={hourlyBookingCount}
                                          min={3} // Set the minimum value to 3
                                          onChange={
                                            (e) =>
                                              setHourlyBookingCount(
                                                Math.max(
                                                  3,
                                                  parseInt(e.target.value) || 3
                                                )
                                              ) // Ensure the value doesn't go below 3
                                          }
                                          className="w-10 h-10 text-center rounded-full focus:outline-none" // Make input field round
                                        />
                                      </div>

                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleIncrement(
                                            hourlyBookingCount,
                                            setHourlyBookingCount
                                          );
                                        }}
                                        className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-yellow-500 rounded-full"
                                      >
                                        <Plus />
                                      </button>
                                    </div>
                                    <p className="text-sm">Hours</p>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleConfirm("Hourly Bookings");
                                      }}
                                      className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-md w-full"
                                    >
                                      Confirm
                                    </button>
                                  </>
                                ) : (
                                  <p className="text-[10px] -ml-56 -mt-2 text-gray-500">
                                    Booked for {hourlyBookingCount} hours!
                                  </p>
                                )}
                              </div>
                            )}

                          {/* Conditional Render for Add More Vehicles */}
                          {option.name === "Add More Vehicles" &&
                            additionalOptions.includes("Add More Vehicles") && (
                              <div className="flex flex-col items-center mb-4">
                                {!confirmedOptions.includes(
                                  "Add More Vehicles"
                                ) ? (
                                  <>
                                    <p className="text-sm">Add an Additional</p>
                                    <div className="flex items-center mb-2 space-x-4">
                                      {/* Decrement Button */}
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation(); // Prevent box click when decrementing
                                          handleDecrement(
                                            additionalVehicleCount,
                                            setAdditionalVehicleCount
                                          );
                                        }}
                                        disabled={additionalVehicleCount <= 1} // Disable when count <= 1
                                        className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-white rounded-full"
                                      >
                                        <Minus />
                                      </button>
                                      {/* Input Field */}
                                      <div className="flex items-center justify-center border-2 border-yellow-500 rounded-full">
                                        <input
                                          type="number"
                                          value={additionalVehicleCount}
                                          min={1}
                                          max={3} // Set maximum value to 3
                                          onChange={(e) =>
                                            setAdditionalVehicleCount(
                                              Math.max(
                                                1,
                                                Math.min(
                                                  3,
                                                  parseInt(e.target.value) || 1
                                                )
                                              )
                                            )
                                          }
                                          className="w-10 h-10 text-center rounded-full focus:outline-none" // Make input field round
                                        />
                                      </div>

                                      {/* Increment Button */}
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation(); // Prevent box click when incrementing
                                          if (additionalVehicleCount < 3) {
                                            handleIncrement(
                                              additionalVehicleCount,
                                              setAdditionalVehicleCount
                                            );
                                          }
                                        }}
                                        disabled={additionalVehicleCount >= 3} // Disable when count >= 3
                                        className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-yellow-500 rounded-full"
                                      >
                                        <Plus />
                                      </button>
                                    </div>
                                    <p className="text-sm">Vehicles</p>
                                    {/* Confirm Button */}
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation(); // Prevent box click on Confirm
                                        handleConfirm("Add More Vehicles");
                                      }}
                                      className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-md w-full"
                                    >
                                      Confirm
                                    </button>
                                  </>
                                ) : (
                                  // Display selected number of vehicles after confirmation
                                  <p className="text-[10px] -ml-56 -mt-2 text-gray-500">
                                    {additionalVehicleCount} Vehicles Selected
                                  </p>
                                )}
                              </div>
                            )}
                        </div>
                      ))}

                    {!showAllOptions ? (
                      <button
                        onClick={toggleOptions}
                        className="w-full py-1 text-center text-black text-xs"
                      >
                        <span>
                          See all
                          <ChevronDown className="text-black ml-[210px] w-4 h-4 -mt-4 " />
                        </span>
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
              {/* <button className=" mt-4 w-full bg-yellow-500/20 text-black p-2 rounded-md font-bold">
                Total Price: ${totalPrice.toFixed(2)}
              </button> */}
              <button
                onClick={handleNextComponent}
                className="w-full mt-4 bg-yellow-500 text-black p-2 rounded-md font-bold"
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
            {/* <div className="mb-4">
              <p className="text-sm text-gray-700">
                {formattedDate || "No date selected"}
              </p>
              <p className="text-sm text-gray-700">{time}</p>
            </div> */}
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

            <div className="mb-4 mt-3">
              <div className="flex items-center space-x-4">
                {/* Date Input */}
                <div className="relative w-full">
                  {/* Left Icon */}
                  <span
                    className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"
                    onClick={() => dateInputRef.current.showPicker()}
                  >
                    <Calendar className="text-black" />
                  </span>
                  {/* Input */}
                  <input
                    ref={dateInputRef}
                    type="date"
                    className={`w-full pl-10 py-2 text-gray-700 border border-gray-300 rounded appearance-none ${
                      isDateSelected ? "" : "text-transparent"
                    }`}
                    value={isDateSelected ? date : ""}
                    onChange={handleDateChange}
                    onClick={() => dateInputRef.current.showPicker()}
                    onFocus={() => setIsDateSelected(true)}
                  />
                  {/* Placeholder */}
                  {!isDateSelected && (
                    <span className="absolute left-10 ml-4 top-1/2 transform -translate-y-1/2 text-gray-700 font-bold pointer-events-none">
                      Select Date
                    </span>
                  )}
                  {/* Right Icon */}
                  {/* <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="text-black " />
                  </span> */}
                </div>

                {/* Time Input */}
                <div className="relative w-full">
                  {/* Left Icon */}
                  <span
                    className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"
                    onClick={() => timeInputRef.current.showPicker()}
                  >
                    <Clock className="text-black" />
                  </span>
                  {/* Input */}
                  <input
                    ref={timeInputRef}
                    type="time"
                    className={`w-full pl-10 py-2 text-gray-700 border border-gray-300 rounded appearance-none ${
                      isTimeSelected ? "" : "text-transparent"
                    }`}
                    value={isTimeSelected ? time : ""}
                    onChange={handleTimeChange}
                    onClick={() => timeInputRef.current.showPicker()}
                    onFocus={() => setIsTimeSelected(true)}
                  />
                  {/* Placeholder */}
                  {!isTimeSelected && (
                    <span className="absolute left-10 top-1/2 ml-4 transform -translate-y-1/2 text-gray-700 font-bold pointer-events-none">
                      Select Time
                    </span>
                  )}
                  {/* Right Icon */}
                  {/* <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="text-black" />
                  </span> */}
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
                  className={`flex  flex-col justify-center w-1/3 p-2 h-30 rounded-lg ${
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
                    <span className="text-green-500">From</span> $
                    {vehicles[type].baseFare}
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
                    {/* Tag Icon */}
                    <Tags
                      className="mr-1 text-yellow-600"
                      style={{
                        width: "20px",
                        height: "20px",
                        transform: "scaleX(-1)",
                      }}
                    />
                    {/* Show total price and discounted price */}
                    <strong className="mr-1 text-yellow-600 font-bold text-xl">
                      ${totalPrice.toFixed(2)}
                    </strong>
                    <span className="text-gray-500 text-xl line-through ml-6">
                      {/* Add 15% to the total price */}$
                      {(totalPrice * 1.15).toFixed(2)}
                    </span>
                  </p>
                  <p className="flex text-sm">
                    {/* Passenger Limit */}
                    <UserRound
                      className="mr-1"
                      style={{ width: "16px", height: "16px" }}
                    />
                    <span>{vehicleDetails.passengerLimit}</span>
                    {/* Vertical Divider */}
                    <span className="mx-2">|</span>
                    {/* Luggage Icon and Limit */}
                    <Briefcase className="w-4 h-4" />
                    <span className="ml-1 text-black">
                      x {vehicleDetails.luggageLimit}
                    </span>
                  </p>
                  <p className="flex items-center text-base">
                    Total Distance: {formattedDistance} km
                    <Info
                      className="ml-1 text-sm text-yellow-600"
                      style={{ width: "0.8em", height: "0.8em" }}
                    />
                  </p>
                </div>
              </div>
            )}

            {/* Additional Services Laptop */}

            <div className="mt-4 mb-4">
              <p className="text-2xl font-bold text-gray-700">
                Additional Services
              </p>

              {/* Split Payment Option (always on top) */}
              <div
                className={`p-2 mb-2 mt-4 border rounded-md shadow-sm transition-colors cursor-pointer ${
                  splitPayment
                    ? "border-yellow-500 bg-yellow-500/20"
                    : "border-gray-300 bg-gray-100"
                }`}
                onClick={(e) => {
                  if (e.target.tagName !== "BUTTON") {
                    setSplitPaymentOpen(!splitPaymentOpen);
                  }
                }}
              >
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-black">Split Payment</span>

                  {/* Toggle Button */}
                  <button
                    className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
                      splitPayment ? "bg-yellow-500" : "bg-gray-300"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent box click from triggering
                      setSplitPayment(!splitPayment); // Toggle split payment state globally
                      if (!splitPayment) {
                        setSplitPaymentOpen(true); // Open if toggling on
                      } else {
                        setSplitPaymentOpen(false); // Close if toggling off
                      }
                    }}
                  >
                    <span
                      className={`${
                        splitPayment ? "translate-x-6" : "translate-x-1"
                      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                  </button>
                </div>

                {/* Conditional content for when the box is open */}
                {splitPaymentOpen && (
                  <div className="flex flex-col items-center mb-4">
                    <p className="text-sm">Select Passengers</p>
                    <div className="flex items-center mb-2 space-x-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent box from closing
                          handleDecrement(
                            selectedPassengers,
                            setSelectedPassengers
                          );
                        }}
                        className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-white rounded-full"
                      >
                        <Minus />
                      </button>
                      {/* Input field with yellow border, rounded and arrows disabled */}
                      <div className="flex items-center justify-center border-2 border-yellow-500 rounded-full">
                        <input
                          type="number"
                          value={selectedPassengers}
                          onChange={(e) => {
                            e.stopPropagation(); // Prevent closing the box
                            setSelectedPassengers(
                              Math.max(1, parseInt(e.target.value) || 1)
                            );
                          }}
                          className="w-10 h-10 text-center bg-white rounded-full focus:outline-none appearance-none" // Disable arrows with appearance-none
                          disabled // For Firefox
                        />
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent box from closing
                          handleIncrement(
                            selectedPassengers,
                            setSelectedPassengers
                          );
                        }}
                        className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-yellow-500 rounded-full"
                      >
                        <Plus />
                      </button>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent box from closing
                        handleSplitPaymentConfirm(); // Save and confirm split payment
                      }}
                      className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-md w-full"
                    >
                      Confirm
                    </button>
                    <p className="text-xs mt-2 text-gray-500">
                      Minimum 4 Passengers.
                    </p>
                  </div>
                )}

                {/* Text when the box is closed but the option is not confirmed */}
                {!splitPaymentOpen && !splitPayment && (
                  <p className="text-[10px] ml-2 -mt-2 text-gray-500">
                    (Split among friends)
                  </p>
                )}

                {/* Show confirmed message with number of passengers when the option is confirmed */}
                {splitPayment && !splitPaymentOpen && (
                  <p className="text-[10px] ml-2 -mt-2 text-gray-500">
                    ({selectedPassengers}{" "}
                    {selectedPassengers === 1 ? "passenger" : "passengers"}{" "}
                    Selected)
                  </p>
                )}
                {/* Show per person cost below the selected passengers */}
                {splitPayment &&
                  !splitPaymentOpen &&
                  selectedPassengers > 0 && (
                    <p className="text-[12px] ml-2  text-yellow-500">
                      Price Per Person: $
                      {splitPaymentDetails.passengers > 0
                        ? (totalPrice / splitPaymentDetails.passengers).toFixed(
                            2
                          )
                        : "0.00"}
                    </p>
                  )}
              </div>

              {/* Additional Options (below Split Payment) */}
              <div className=" ">
                {options
                  .filter((option) => option.name !== "Split Payment")
                  .slice(0, showAllOptions ? options.length : 2)
                  .map((option) => (
                    <div
                      key={option.name}
                      className={`p-2 mb-2 border rounded-md shadow-sm transition-colors cursor-pointer ${
                        additionalOptions.includes(option.name)
                          ? "border-yellow-500 bg-yellow-500/20"
                          : "border-gray-300 bg-gray-100"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle option selection and allow editing after confirmation
                        if (option.name === "Hourly Bookings") {
                          // If confirmed, reset confirmation
                          if (confirmedOptions.includes("Hourly Bookings")) {
                            setConfirmedOptions(
                              confirmedOptions.filter(
                                (name) => name !== "Hourly Bookings"
                              )
                            );
                          }
                          handleOptionChange(option);
                        } else if (option.name === "Add More Vehicles") {
                          if (confirmedOptions.includes("Add More Vehicles")) {
                            setConfirmedOptions(
                              confirmedOptions.filter(
                                (name) => name !== "Add More Vehicles"
                              )
                            );
                          }
                          handleOptionChange(option);
                        } else {
                          handleOptionChange(option);
                        }
                      }}
                    >
                      <div className="flex items-center justify-between p-2">
                        <span className="text-sm text-black">
                          {option.name}
                        </span>

                        {/* Display Price */}

                        <span className="text-sm text-black font-bold">
                          {option.name === "Hourly Bookings" && vehicleDetails
                            ? confirmedOptions.includes("Hourly Bookings")
                              ? `$${(
                                  hourlyBookingCount *
                                  (vehicleDetails.hourlyRate || 0)
                                ).toFixed(2)}`
                              : `$${vehicleDetails.hourlyRate || 0}.00`
                            : option.name === "Add More Vehicles"
                            ? confirmedOptions.includes("Add More Vehicles")
                              ? additionalVehicleCount >= 1
                                ? `$${(
                                    (totalPrice * additionalVehicleCount) /
                                    (additionalVehicleCount + 1)
                                  ).toFixed(2)}`
                                : "$0.00"
                              : "$0.00"
                            : option.name === "Luggage Trailer"
                            ? additionalOptions.includes("Luggage Trailer")
                              ? `$${(luggageTrailerExtraAmount || 0).toFixed(
                                  2
                                )}`
                              : "$0.00"
                            : option.price
                            ? `$${option.price.toFixed(2)}`
                            : "10.00$"}
                        </span>
                      </div>

                      {/* Subheading for Hourly Bookings */}
                      {option.name === "Hourly Bookings" &&
                        !additionalOptions.includes("Hourly Bookings") && (
                          <p className="text-[10px] ml-2 -mt-2 text-gray-500">
                            Minimum 3 hours
                          </p>
                        )}

                      {/* Subheading for Add More Vehicles */}
                      {option.name === "Add More Vehicles" &&
                        !additionalOptions.includes("Add More Vehicles") && (
                          <p className="text-[10px] ml-2 -mt-2 text-gray-500">
                            Book Upto 3 Vehicles
                          </p>
                        )}

                      {/* Conditional Render for Hourly Bookings */}

                      {option.name === "Hourly Bookings" &&
                        additionalOptions.includes("Hourly Bookings") && (
                          <div className="flex flex-col items-center mb-4">
                            {!confirmedOptions.includes("Hourly Bookings") ? (
                              <>
                                <p className="text-sm">Book for</p>
                                <div className="flex items-center mb-2 space-x-4">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDecrement(
                                        hourlyBookingCount,
                                        setHourlyBookingCount
                                      );
                                    }}
                                    disabled={hourlyBookingCount <= 3} // Ensure it doesn’t go below 3
                                    className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-white rounded-full"
                                  >
                                    <Minus />
                                  </button>
                                  <div className="flex items-center justify-center border-2 border-yellow-500 rounded-full">
                                    <input
                                      type="number"
                                      value={hourlyBookingCount}
                                      min={3} // Set the minimum value to 3
                                      onChange={
                                        (e) =>
                                          setHourlyBookingCount(
                                            Math.max(
                                              3,
                                              parseInt(e.target.value) || 3
                                            )
                                          ) // Ensure the value doesn't go below 3
                                      }
                                      className="w-10 h-10 text-center bg-white rounded-full focus:outline-none appearance-none" // Make it round and disable arrows
                                      disabled // For Firefox
                                    />
                                  </div>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleIncrement(
                                        hourlyBookingCount,
                                        setHourlyBookingCount
                                      );
                                    }}
                                    className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-yellow-500 rounded-full"
                                  >
                                    <Plus />
                                  </button>
                                </div>
                                <p className="text-sm">Hours</p>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleConfirm("Hourly Bookings");
                                  }}
                                  className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-md w-full"
                                >
                                  Confirm
                                </button>
                              </>
                            ) : (
                              <p className="text-[10px] -ml-56 -mt-2 text-gray-500">
                                Booked for {hourlyBookingCount} hours!
                              </p>
                            )}
                          </div>
                        )}

                      {/* Conditional Render for Add More Vehicles */}
                      {option.name === "Add More Vehicles" &&
                        additionalOptions.includes("Add More Vehicles") && (
                          <div className="flex flex-col items-center mb-4">
                            {!confirmedOptions.includes("Add More Vehicles") ? (
                              <>
                                <p className="text-sm">Add an Additional</p>
                                <div className="flex items-center mb-2 space-x-4">
                                  {/* Decrement Button */}
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation(); // Prevent box click when decrementing
                                      handleDecrement(
                                        additionalVehicleCount,
                                        setAdditionalVehicleCount
                                      );
                                    }}
                                    disabled={additionalVehicleCount <= 1} // Disable when count <= 1
                                    className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-white rounded-full"
                                  >
                                    <Minus />
                                  </button>
                                  {/* Input Field */}
                                  <div className="flex items-center justify-center border-2 border-yellow-500 rounded-full">
                                    <input
                                      type="number"
                                      value={additionalVehicleCount}
                                      min={1}
                                      max={3} // Set maximum value to 3
                                      onChange={(e) =>
                                        setAdditionalVehicleCount(
                                          Math.max(
                                            1,
                                            Math.min(
                                              3,
                                              parseInt(e.target.value) || 1
                                            )
                                          )
                                        )
                                      }
                                      className="w-10 h-10 text-center bg-white rounded-full focus:outline-none appearance-none" // Use rounded-full for round input and appearance-none to disable arrows
                                      disabled // Disable input
                                    />
                                  </div>
                                  {/* Increment Button */}
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation(); // Prevent box click when incrementing
                                      if (additionalVehicleCount < 3) {
                                        handleIncrement(
                                          additionalVehicleCount,
                                          setAdditionalVehicleCount
                                        );
                                      }
                                    }}
                                    disabled={additionalVehicleCount >= 3} // Disable when count >= 3
                                    className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-yellow-500 rounded-full"
                                  >
                                    <Plus />
                                  </button>
                                </div>
                                <p className="text-sm">Vehicles</p>
                                {/* Confirm Button */}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation(); // Prevent box click on Confirm
                                    handleConfirm("Add More Vehicles");
                                  }}
                                  className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-md w-full"
                                >
                                  Confirm
                                </button>
                              </>
                            ) : (
                              // Display selected number of vehicles after confirmation
                              <p className="text-[10px] -ml-56 -mt-2 text-gray-500">
                                {additionalVehicleCount} Vehicles Selected
                              </p>
                            )}
                          </div>
                        )}
                    </div>
                  ))}

                {/* Show/Hide options toggle button */}
                {!showAllOptions ? (
                  <button
                    onClick={() => setShowAllOptions(true)}
                    className="w-full py-1 text-center text-black text-xs"
                  >
                    <span>
                      See all
                      <ChevronDown className="text-black ml-[200px] w-4 h-4 -mt-4 " />
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => setShowAllOptions(false)}
                    className="w-full py-1 text-center text-black text-xs"
                  >
                    Show Less
                  </button>
                )}
              </div>
              {/* ----- */}
            </div>
          </div>
          {error && <div className=" text-red-500 text-sm">{error}</div>}

          {/* <button className="w-full bg-yellow-500/20 text-black p-2 rounded-md font-bold">
            Total Price: ${totalPrice.toFixed(2)}
          </button> */}

          <button
            onClick={handleNextComponent}
            className="w-full bg-yellow-500  text-black p-2 rounded-md font-bold"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
