"use client";
import Head from "next/head";
import Image from "next/image";
import mobileview from "@/../public/driver/captain/section5.png"; // Ensure the image is in the public folder

export default function Section4() {
  const steps = [
    "Register As A Fleet Owner",
    "Log In As A Fleet Owner",
    "Register Your Vehicles",
    "Get Your Vehicles Approved",
    "Register Your Drivers",
    "Get Your Drivers Approved",
    "Pair Your Drivers And Vehicles",
  ];

  return (
    <div className="bg-slate min-h-screen p-10">
      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">
          How To Set Up Your Fleet
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex justify-center">
            <Image
              src={mobileview}
              alt="Mobile View"
              width={300}
              height={600}
            />
          </div>
          <div className="flex flex-col justify-center space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-customYellow w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-black">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step}</h3>
              </div>
            ))}
            <button className="bg-customYellow hover:bg-customYellow text-white mt-10 flex items-center justify-center font-bold w-[200px] py-2 px-4 rounded-xl">
              Get Started
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
