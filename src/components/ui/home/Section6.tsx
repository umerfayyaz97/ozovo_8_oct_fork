"use client";
import Head from "next/head";
import Image from "next/image";
import mobileview from "@/../public/home/section6.png"; // Ensure the image is in the public folder

import { useState } from "react";

export default function Section6() {
  return (
    <div className="bg-slate ">
      <main className="flex flex-col pt-20 py-10  ">
        <div className="flex items-center justify-center ">
          <h1 className="lg:text-4xl text-2xl 2xl:text-[40px] font-extrabold text-gray-900 text-center">
            As Comfortable As A Couch &<br />
            As Always, Safe & Sound
          </h1>
        </div>

        <div
          className="flex flex-col lg:flex-row gap-4 mt-10 mx-4 lg:mx-36 lg:pl-32
          "
        >
          <div className="lg:w-1/3 flex justify-center ">
            <div className="flex flex-col px-4 py-6">
              <Image
                src="/home/zify_section6.png"
                alt="Ride image"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="lg:w-2/3 flex flex-col justify-center space-y-8 px-4">
            <div className="flex items-center space-x-4">
              <div className="bg-customYellow w-12 h-12 rounded-full flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">1</h2>
              </div>
              <h3 className="lg:text-xl 2xl:text-[32px] font-bold text-gray-900">
                Where Would You Like To Go
              </h3>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-customYellow w-12 h-12 rounded-full flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">2</h2>
              </div>
              <h3 className="lg:text-xl 2xl:text-[32px] font-bold text-gray-900">
                Choose Your Ride, Time & Date
              </h3>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-customYellow w-12 h-12 rounded-full flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">3</h2>
              </div>
              <h3 className="lg:text-xl 2xl:text-[32px] font-bold text-gray-900">
                Book Your Ride.
              </h3>
            </div>
            <button className="bg-customYellow hover:bg-black text-black hover:text-white font-bold w-full md:w-[200px] py-2 px-4 rounded-lg self-center md:self-start transition-colors duration-300 ease-in-out">
              Book Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
