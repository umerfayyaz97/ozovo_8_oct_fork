// components/LandingPage.js
import Image from "next/image";
import i1 from "@/../public/driver/captain/section6.jpeg";

import React from "react";

export default function Section5() {
  return (
    <div className="relative h-[240px]">
      <Image
        src={i1} // Place your image in the public/images directory
        layout="fill"
        objectFit="cover"
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-8">
          Ready To Drive With Us?
        </h1>
        <button className="bg-customYellow text-black py-2 px-4 rounded-lg font-bold hover:bg-yellow-600">
          Sign Up Now
        </button>
      </div>
    </div>
  );
}
