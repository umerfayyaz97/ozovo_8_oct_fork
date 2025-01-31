import Image from "next/image";
import backgroundImage from "@/../public/home/section7.png"; // Ensure the image is in the public folder
import React from "react";

export default function Section7() {
  return (
    <div className="relative lg:h-[420px] h-[440px]  ">
      <Image
        src={backgroundImage}
        alt="Warehouse"
        layout="fill"
        objectFit="cover"
        className="opacity-80"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Black cover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          UNLEASH YOUR <span className="text-customYellow">CORPORATE</span>{" "}
          POTENTIAL
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Discover the Zify Business Account advantage and transform your
          company&apos;s transportation into a seamless, cost-effective
          experience. Enjoy the flexibility of tailored commuting solutions that
          adapt to your business needs, ensuring a convenient and hassle-free
          journey!
        </p>
        <button className="bg-white text-black text-lg font-semibold py-2 px-6 rounded-lg hover:bg-customYellow transition duration-300 ease-in-out">
          Book Now
        </button>
      </div>
    </div>
  );
}
