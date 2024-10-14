"use client";
import { useState } from "react";
import Map from "../home/helpers/section1/MapComp/Map";
import useStore from "@/lib/store";
import Page1 from "../home/helpers/section1/MapComp/Page1";
import Page2 from "../home/helpers/section1/MapComp/Page2";
import ReviewBooking from "../home/helpers/section1/MapComp/ReviewBooking";

export default function Section1() {
  const [component, setComponent] = useState(1);
  const state = useStore((state) => state);

  return (
    <div className="lg:relative lg:h-[500px] lg:mt-20 flex flex-col lg:flex-row">
      <div className="lg:w-full w-full h-[40vh] lg:h-[500px]">
        <Map />
      </div>
      <div className="lg:absolute lg:top-0 lg:left-0 lg:w-[400px] lg:h-[500px] w-full h-full bg-gray-50">
        <div className="scrollbar-yellow">
          {component === 1 && <Page1 setComponent={setComponent} />}
          {component === 2 && <Page2 setComponent={setComponent} />}
          {component === 3 && <ReviewBooking setComponent={setComponent} />}
        </div>
      </div>
    </div>
  );
}
