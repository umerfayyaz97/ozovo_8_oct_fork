import Image from "next/image";
import qrcode from "@/../public/home/section9.png"; // Ensure the image is in the public folder
import React from "react";

const Section8 = () => {
  return (
    <div className="lg:h-40 lg:-mb-32 lg:bg-zify lg:w-full">
      <div className="flex justify-center items-center ">
        <div className="lg:absolute bg-gradient-to-bl lg:mt-28 from-qrs to-qrb lg:w-[800px] p-6 lg:rounded-md shadow-md flex justify-between items-center">
          <div>
            <h2 className="text-base lg:text-xl font-bold text-black mb-2">
              Unlock Exclusive Features and Enhance Your Experience
            </h2>
            <p className="text-xs lg:text-lg text-black">
              Download Our App Now!
            </p>
            <p className="text-base lg:text-xl font-bold text-black pt-2">
              Sign up for pilot launch
            </p>
            <button className="mt-4 font-bold px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-white hover:text-gray-700 transition-colors duration-300 ease-in-out">
              SIGN UP
            </button>
          </div>
          <div>
            <Image
              src={qrcode}
              alt="QR Code"
              className="h-20 w-24 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
