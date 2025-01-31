import Image from "next/image";
import driverImage from "@/../public/home/section8.png"; // Ensure the image is in the public folder
import React from "react";

export default function Section8() {
  return (
    <div className="flex flex-col items-center lg:space-x-20 mb-8 lg:flex-row lg:px-40 px-6 lg:justify-evenly lg:h-[500px] bg-white py-8 ">
      {/* Left Section - Image */}
      <div className="lg:flex lg:w-1/2 ">
        <div className=" overflow-hidden  lg:p-0  rounded-lg ">
          <Image
            src={driverImage}
            alt="Driver"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
      </div>

      {/* Right Section - Text and Button */}
      <div className=" mt-8 md:mt-0 flex flex-col lg:w-1/2 ">
        <p className="text-[36px] font-bold text-gray-900 mb-4 ">
          <span className="text-customYellow"> Drive </span> Your <br /> Success{" "}
          <span className="text-customYellow"> with Us</span>
        </p>
        <p className="text-[18px] text-gray-700 mb-6">
          Embark on a rewarding journey as an Zify driver, and become a part of
          our mission to revolutionize transportation across Australia.{" "}
        </p>
        <button className="bg-blue-800 text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors duration-300 w-[200px]">
          Become A Driver
        </button>
      </div>
    </div>
  );
}
