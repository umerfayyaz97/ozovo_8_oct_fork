"use client";
import React, { useState, useEffect } from "react";
import useStore from "@/lib/store";
import Image from "next/image";
import { ArrowLeftIcon, Phone, Mail, MapPin } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { loadStripe } from "@stripe/stripe-js";
import { sendEmail, createCheckoutSession } from "@/lib/api";

const stripePromise = loadStripe(
  "pk_live_51Pq6lbP8Zlv0bEA7J4e3frprmo86W0ONlhv3H3HrtIZ5MnwGerQxr3T03zmnEZ7WtjLo0M2SY05tYONQ52GxD4cn00YMXJwFo9"
  // "pk_test_51NiALlAwhifC9JLZo0ZryBt9cuqyGi3WLrcmiftGCpuMygvpjarhLccCFoDpPQwic8G8LAwqRPURSCR8s1izRysB00ssfpjxcC"
);

const ReviewBooking = ({ setComponent }) => {
  const {
    date,
    pickup,
    time,
    stop,
    destination,
    vehicleDetails,
    occasion,
    passengers,
    contact,
    distanceStartToEnd,
    distanceStartToStop,
    distanceStopToEnd,
    additionalOptions,
    hourlyBookingCount,
    additionalVehicleCount,
    totalPrice,
    calculateTotalPrice,
    orderNumber,
    setOrderNumber,
    driverNote,
    splitPaymentDetails,
    distanceFare,
    additionalVehicleExtraAmount, // Fetch additional vehicle cost from Zustand
    luggageTrailerExtraAmount,
  } = useStore((state) => ({
    date: state.date,
    pickup: state.pickup,
    time: state.time,
    stop: state.stop,
    driverNote: state.driverNote,
    destination: state.destination,
    vehicleDetails: state.vehicleDetails,
    occasion: state.occasion,
    passengers: state.passengers,
    contact: state.contact,
    distanceFare: state.distanceFare,
    distanceStartToEnd: state.distanceStartToEnd,
    distanceStartToStop: state.distanceStartToStop,
    distanceStopToEnd: state.distanceStopToEnd,
    additionalOptions: state.additionalOptions,
    hourlyBookingCount: state.hourlyBookingCount,
    additionalVehicleCount: state.additionalVehicleCount,
    totalPrice: state.totalPrice,
    calculateTotalPrice: state.calculateTotalPrice,
    orderNumber: state.orderNumber,
    setOrderNumber: state.setOrderNumber,
    splitPaymentDetails: state.splitPaymentDetails,
    additionalVehicleExtraAmount: state.additionalVehicleExtraAmount, // Added fetch
    luggageTrailerExtraAmount: state.luggageTrailerExtraAmount,
  }));

  useEffect(() => {
    calculateTotalPrice();

    if (!orderNumber) {
      const generateOrderNumber = () => {
        const uuid = uuidv4();
        const chars = uuid
          .replace(/[^a-zA-Z0-9]/g, "")
          .slice(0, 4)
          .toUpperCase();
        return `${chars[0]}${chars[1]}${chars[2]}${chars[3]}`;
      };

      const orderNum = generateOrderNumber();
      setOrderNumber(orderNum);
    }
  }, [
    vehicleDetails,
    distanceStartToEnd,
    distanceStartToStop,
    distanceStopToEnd,
    additionalOptions,
    hourlyBookingCount,
    additionalVehicleCount,
    calculateTotalPrice,
    orderNumber,
    setOrderNumber,
  ]);

  // Define the missing state variable for cancellation details
  const [showCancellationDetails, setShowCancellationDetails] = useState(false);

  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  // Hide phone and email when clicked outside
  const handleOutsideClick = (event) => {
    if (!event.target.closest(".contact-button")) {
      setShowPhone(false);
      setShowEmail(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleTogglePhone = () => {
    setShowPhone(!showPhone);
    setShowEmail(false); // Hide email if phone is clicked
  };

  const handleToggleEmail = () => {
    setShowEmail(!showEmail);
    setShowPhone(false); // Hide phone if email is clicked
  };

  const toggleCancellationDetails = () => {
    setShowCancellationDetails(!showCancellationDetails); // Toggles the cancellation details
  };

  const handleBookRide = async () => {
    try {
      // Prepare booking data
      const bookingData = {
        orderNumber,
        date,
        time,
        pickup: pickup?.name || "N/A",
        destination: destination?.name || "N/A",
        vehicleName: vehicleDetails?.name || "N/A",
        passengers: passengers || 1,
        totalPrice,
        contact: {
          name: contact?.name || "N/A",
          email: contact?.email || "N/A",
          phone: contact?.phone || "N/A",
        },
        additionalOptions: additionalOptions?.length ? additionalOptions : [],
        occasion: occasion || "N/A", // Add occasion here
        splitPaymentDetails: splitPaymentDetails || "N/A",
        driverNote: driverNote || "N/A",
        hourlyBookingCount: hourlyBookingCount || 0,
        additionalVehicleCount: additionalVehicleCount || 0,
        distanceStartToEnd: distanceStartToEnd || "N/A",
        distanceStartToStop: distanceStartToStop || "N/A",
        distanceStopToEnd: distanceStopToEnd || "N/A",
      };

      // Call your backend to send email and create a Stripe checkout session
      const [emailResponse, stripeResponse] = await Promise.all([
        sendEmail(bookingData),
        createCheckoutSession(bookingData),
      ]);

      // console.log("Email Response:", emailResponse);
      // console.log("Stripe Session:", stripeResponse);

      // Use Stripe's redirectToCheckout to redirect the user to the payment page
      const stripe = await stripePromise;
      const { sessionId } = stripeResponse;
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An unexpected error occurred. Please try again.");
      // alert(`An unexpected error occurred: ${error.message || error}`);
    }
  };

  // Calculate additional vehicle cost locally based on the provided logic
  const additionalVehicleCost =
    additionalVehicleCount >= 1
      ? (totalPrice * additionalVehicleCount) / (additionalVehicleCount + 1)
      : 0;

  // Calculate price per person if split payment details are provided
  const pricePerPerson =
    splitPaymentDetails?.passengers && splitPaymentDetails.passengers > 0
      ? (totalPrice / splitPaymentDetails.passengers).toFixed(2)
      : null;

  // Hourly Booking Price Calculation
  const hourlyBookingPrice =
    vehicleDetails?.hourlyRate && hourlyBookingCount > 0
      ? vehicleDetails.hourlyRate * hourlyBookingCount
      : 0;

  return (
    <div className="lg:p-0 p-3">
      <div className="w-full p-4 lg:overflow-auto lg:h-[460px] text-black bg-white shadow-lg rounded-lg border border-gray-300 lg:border-none">
        <button onClick={() => setComponent(2)} className="mb-4 text-gray-700">
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="mb-4 text-2xl font-bold text-gray-700">
          Review Booking
        </h1>

        <div className="mb-2">
          <span className="font-semibold text-gray-700">Date:</span> {date}
          <p className="text-sm">Order #: {orderNumber}</p>
        </div>
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

        <hr className="mb-4" />

        <div className="mb-4">
          <div className="flex flex-col items-center justify-center w-24 p-2 bg-white border border-yellow-600 rounded-lg h-28">
            <Image
              src={vehicleDetails?.image}
              alt={vehicleDetails?.name || "N/A"}
              height={70}
              width={70}
              layout="fixed"
              className="mb-2 rounded-lg"
            />
            <p className="mt-2 text-sm text-center text-black">
              {vehicleDetails?.name || "N/A"}
            </p>
          </div>
        </div>
        {/* Cancellation Policy Section */}
        <div className="p-2 mb-4 rounded bg-yellow-500/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mb-1 text-sm font-semibold text-gray-700">
                Cancellation Policy
              </h2>
              <p className="mb-2 text-xs">
                Cancellations made seven days or less before a trip are not
                eligible for a refund
              </p>
            </div>
            <button
              className="flex items-center justify-center h-6 px-2 text-xs text-black bg-yellow-500 rounded-full"
              onClick={toggleCancellationDetails}
            >
              Details
            </button>
          </div>
          {showCancellationDetails && (
            <div className="p-2 mt-2 rounded">
              <p className="text-xs">
                -<strong>80%</strong> refund: Cancellation is after the arrival
                of driver.
              </p>
            </div>
          )}
        </div>
        <hr className="mb-4" />
        <div className="mb-4">
          <h2 className="font-semibold text-gray-700">Occasion</h2>
          <p>{occasion || "None"}</p>
        </div>
        <hr className="mb-4" />
        <div className="mb-4">
          <h2 className="font-semibold text-gray-700">Total Passengers</h2>
          <p>{passengers}</p>
          {/* Price Breakdown */}
          <div className="mb-4">
            <h2 className="font-semibold text-gray-700">Price Breakdown</h2>
            <div className="grid mt-2 gap-y-2">
              {/* Base Fare */}
              {vehicleDetails?.baseFare > 0 && (
                <div className="flex justify-between">
                  <p className="text-xs">Base Fare</p>
                  <p className="text-xs">${vehicleDetails?.baseFare}</p>
                </div>
              )}

              {/* Distance Charge */}
              {distanceFare > 0 && (
                <div className="flex justify-between">
                  <p className="text-xs">Distance Charge</p>
                  <p className="text-xs">${distanceFare.toFixed(2)}</p>
                </div>
              )}

              {/* Additional Vehicles */}
              {additionalVehicleCost > 0 && (
                <div className="flex justify-between">
                  <p className="text-xs">Additional Vehicles</p>
                  <p className="text-xs">${additionalVehicleCost.toFixed(2)}</p>
                </div>
              )}

              {/* Luggage Trailer */}
              {luggageTrailerExtraAmount > 0 && (
                <div className="flex justify-between">
                  <p className="text-xs">Luggage Trailer</p>
                  <p className="text-xs">
                    ${luggageTrailerExtraAmount.toFixed(2)}
                  </p>
                </div>
              )}

              {/* Hourly Booking */}
              {hourlyBookingPrice > 0 && (
                <div className="flex justify-between">
                  <p className="text-xs">Hourly Booking</p>
                  <p className="text-xs">${hourlyBookingPrice.toFixed(2)}</p>
                </div>
              )}

              {/* Conditional Price Per Person */}
              {pricePerPerson && pricePerPerson > 0 && (
                <div className="flex justify-between">
                  <p className="text-sm font-semibold text-yellow-600">
                    Price Per Person
                  </p>
                  <p className="text-sm font-semibold text-yellow-600">
                    ${pricePerPerson}
                  </p>
                </div>
              )}

              {/* Total Amount */}
              <div className="flex justify-between">
                <p className="text-sm font-semibold text-yellow-600">
                  Total Amount
                </p>
                <p className="text-sm font-semibold text-yellow-600">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          {/* Contact Us Section */}

          <div className="p-2 mb-4 border border-yellow-500 rounded">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="mb-1 text-sm font-semibold text-gray-700">
                  Have a Question?
                </h2>
                <p className="mb-2 text-xs">Feel free to contact us</p>
              </div>

              <div className="flex space-x-2">
                {/* Phone Button */}
                <a
                  href="tel:+61481722473"
                  className="contact-button flex items-center justify-center h-8 px-3 text-sm text-black bg-yellow-500 rounded-full"
                  onClick={handleTogglePhone}
                >
                  <Phone style={{ width: "16px", height: "16px" }} />
                  {showPhone && (
                    <span className="ml-2 text-xs text-gray-800">
                      +61481722473
                    </span>
                  )}
                </a>
                {/* Email Button */}
                <a
                  href="mailto:admin@ozove.com.au"
                  className="contact-button flex items-center justify-center h-8 px-3 text-sm text-black bg-yellow-500 rounded-full"
                  onClick={handleToggleEmail}
                >
                  <Mail style={{ width: "16px", height: "16px" }} />
                  {showEmail && (
                    <span className="ml-2 text-xs text-gray-800">
                      admin@ozove.com.au
                    </span>
                  )}
                </a>
              </div>
            </div>
          </div>
          <p className="mb-4 text-xs">
            By selecting Book Ride, you agree to our Cancellation policy and
            Ozove terms and conditions
          </p>
        </div>
      </div>

      <button
        onClick={handleBookRide}
        className="mt-4 lg:mt-0 w-full p-2 font-bold text-black bg-yellow-500 rounded-lg"
      >
        Book Ride
      </button>
    </div>
  );
};

export default ReviewBooking;
