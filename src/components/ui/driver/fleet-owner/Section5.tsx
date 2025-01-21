// components/LandingPage.js
import Image from "next/image";
import i1 from "@/../public/driver/captain/section6.jpeg";

import React from "react";

export default function Section5() {
  return (
    <div className="relative h-[240px]">
      <Image
        src="/driver/fleet-owner/fleet.png"
        layout="fill"
        objectFit="cover"
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-8">
          Ready To Manage Your Fleet?
        </h1>
        <button className="bg-customYellow text-black py-2 px-4 rounded-lg font-bold hover:bg-black hover:text-white transition duration-300 ease-in-out">
          Sign Up Now
        </button>
      </div>
    </div>
  );
}
