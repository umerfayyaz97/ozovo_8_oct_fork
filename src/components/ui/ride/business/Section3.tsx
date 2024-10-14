import Image from "next/image";
import logo1 from "@/../public/ride/business/section3.png";
import React from "react";

export default function Section3() {
  return (
    <div className=" h-[200px]">
      <div className="flex p-4 justify-center items-center">
        <Image src={logo1} alt={""} width={260} height={260} />
      </div>
    </div>
  );
}
