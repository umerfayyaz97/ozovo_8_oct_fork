"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation
import { CheckCircle } from "lucide-react"; // Import the CheckCircle icon from Lucide

const Confirmed = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    // Redirects to the homepage with a full page refresh
    window.location.href = "/";
  };

  return (
    <div className="lg:h-[460px]">
      <div className="flex flex-col items-center justify-center p-4 bg-gray-50">
        <h1 className="mt-24 mb-4 text-3xl font-bold text-yellow-500">
          Booking Confirmed
        </h1>
        <CheckCircle className="w-24 h-24 text-yellow-500" strokeWidth={1} />
        <p className="mt-4 text-lg text-center text-gray-700">
          Your booking has been submitted.
        </p>
        <button
          onClick={handleHomeClick}
          className="px-6 py-2 mt-6 text-black bg-yellow-500 rounded hover:bg-yellow-500/40"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Confirmed;
