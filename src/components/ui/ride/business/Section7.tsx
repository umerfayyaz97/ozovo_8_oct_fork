import React from "react";
import FAQ from "./helpers/section7/faq";
import Image from "next/image";
import i1 from "@/../public/ride/individual/section7.png";

function Section7() {
  return (
    <div className="bg-zify lg:pb-10">
      <div className="lg:p-20 p-10 flex flex-col lg:flex-row ">
        <div className="lg:w-1/3 flex-shrink-0">
          <Image
            src={i1}
            alt={""}
            width={400}
            height={400}
            className="lg:block hidden"
          />
        </div>
        <div className="flex-1 lg:px-20">
          <FAQ />
          {/* <button className="lg:mt-4 mt-8 bg-customYellow text-black py-2 px-4 rounded hover:bg-customYellow">
            Book Now
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Section7;
