"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation
import { XCircle } from "lucide-react"; // Import the XCircle icon from Lucide

const Cancelled = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    // Redirects to the homepage with a full page refresh
    window.location.href = "/";
  };

  return (
    <div className="lg:h-[460px]">
      <div className="flex flex-col items-center justify-center p-4 bg-gray-50">
        <h1 className="mt-24 mb-4 text-3xl font-bold text-red-500">
          Booking Cancelled
        </h1>
        <XCircle className="w-24 h-24 text-red-500" strokeWidth={1} />
        <p className="mt-4 text-lg text-center text-gray-700">
          Your booking has been cancelled.
        </p>
        <button
          onClick={handleHomeClick}
          className="px-6 py-2 mt-6 text-black bg-red-500 rounded hover:bg-red-500/40"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Cancelled;
