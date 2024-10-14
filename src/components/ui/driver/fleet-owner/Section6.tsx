import React from "react";
import FAQ from "./helpers/section6/faq";
import Image from "next/image";
import i1 from "@/../public/ride/individual/section7.png";

function Section6() {
  return (
    <div className=" bg-graish">
      <div className="lg:p-20 p-6 flex">
        <Image
          src={i1}
          alt={""}
          width={400}
          height={400}
          className="lg:block hidden"
        />
        <div className="flex-1 lg:px-28">
          <FAQ />
          {/* <button className="mt-4 bg-customYellow text-black py-2 px-4 rounded hover:bg-customYellow">
            Book Now
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Section6;
