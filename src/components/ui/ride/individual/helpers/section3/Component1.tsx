// components/Component1.tsx
import Image from "next/image";
import { useState } from "react";
import i1 from "@/../public/ride/individual/section3/i1.png";
import i2 from "@/../public/ride/individual/section3/i2.png";
import i3 from "@/../public/ride/individual/section3/i3.png";
import i4 from "@/../public/ride/individual/section3/i4.png";
import i5 from "@/../public/ride/individual/section3/i5.png";
import i6 from "@/../public/ride/individual/section3/i6.png";
import i7 from "@/../public/ride/individual/section3/i7.png";
import i8 from "@/../public/ride/individual/section3/i8.png";

import { CircleCheckBig } from "lucide-react";
const Component1 = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { title: "Standard Van", content: <StandardVan /> },
    { title: "Party Van", content: <PartyVan /> },
    { title: "Premium Van", content: <PremiumVan /> },
  ];

  return (
    <div className="lg:flex ">
      <div className="lg:w-1/4">
        <ul className="list-none flex lg:flex-col">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`p-5 cursor-pointer  ${
                activeTab === index
                  ? "text-customYellow font-bold border-l-4 border-customYellow bg-slate "
                  : "bg-gray-100 shadow-md border-b-0"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-3/4 p-4 bg-slate">{tabs[activeTab].content}</div>
    </div>
  );
};

const StandardVan = () => (
  <div>
    <div className="flex lg:flex-row flex-col-reverse ">
      <div>
        <h1 className="text-3xl font-bold px-4">Oz Standard Van</h1>
        <p className="p-4">
          Roomy and comfortable, our standard vans offer seating for up to 10
          passengers.
        </p>
        <ul className="p-4">
          <li className="flex gap-2 p-2">
            <CircleCheckBig />
            Comfortable
          </li>
          <li className="flex gap-2 p-2">
            {" "}
            <CircleCheckBig />
            Spacious
          </li>
          <li className="flex gap-2 p-2">
            {" "}
            <CircleCheckBig />
            Up to 10 passengers
          </li>
        </ul>
      </div>
      <div>
        <Image src={i1} alt={""} />
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg lg:w-[640px]">
      <h2 className="mt-4 text-xl font-bold p-2 ">WHO IS IT FOR?</h2>
      <div className="flex space-x-4 justify-center">
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i2} alt={""} width={100} height={100} />
          <p className=" p-2">Group Outings</p>
        </div>
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i3} alt={""} width={100} height={100} />
          <p className=" p-2">Team Meetings</p>
        </div>
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i4} alt={""} width={100} height={100} />
          <p className=" p-2">Family Getaways</p>
        </div>
      </div>
    </div>
  </div>
);

const PartyVan = () => (
  <div className="">
    <div className="flex lg:flex-row flex-col-reverse ">
      <div>
        <h1 className="text-3xl font-bold px-4">Oz Party Van</h1>
        <p className="p-4">
          Add a touch of fun to your ride! Our party vans come equipped with a
          premium sound system and vibrant lighting, perfect for starting the
          celebration on the road
        </p>
        <ul className="p-4">
          <li className="flex gap-2 p-2">
            <CircleCheckBig />
            Premium Sound System
          </li>
          <li className="flex gap-2 p-2">
            {" "}
            <CircleCheckBig />
            Vibrant Lighting
          </li>
          <li className="flex gap-2 p-2">
            {" "}
            <CircleCheckBig />
            Fun Rides
          </li>
        </ul>
      </div>
      <div>
        <Image src={i1} alt={""} />
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg lg:w-[640px]">
      <h2 className="mt-4 text-xl font-bold p-2 ">WHO IS IT FOR?</h2>
      <div className="flex space-x-4 justify-center">
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i2} alt={""} width={100} height={100} />
          <p className=" p-2">Group Outings</p>
        </div>
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i3} alt={""} width={100} height={100} />
          <p className=" p-2">Team Meetings</p>
        </div>
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i4} alt={""} width={100} height={100} />
          <p className=" p-2">Family Getaways</p>
        </div>
      </div>
    </div>
  </div>
);

const PremiumVan = () => (
  <div>
    <div className="flex lg:flex-row flex-col-reverse ">
      <div>
        <h1 className="text-3xl font-bold px-4">Oz Elite Van</h1>
        <p className="p-4">
          Experience a touch of luxury with our Elite Vans. With spacious
          interiors, comfortable seating, and top-notch amenities, your journey
          is bound to be memorable
        </p>
        <ul className="p-4">
          <li className="flex gap-2 p-2">
            <CircleCheckBig />
            Spacious Interiors
          </li>
          <li className="flex gap-2 p-2">
            {" "}
            <CircleCheckBig />
            Comfortable Seating
          </li>
          <li className="flex gap-2 p-2">
            {" "}
            <CircleCheckBig />
            Top-Notch Amenities
          </li>
        </ul>
      </div>
      <div>
        <Image src={i5} alt={""} />
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg lg:w-[640px]">
      <h2 className="mt-4 text-xl font-bold p-2 ">WHO IS IT FOR?</h2>
      <div className="flex space-x-4 justify-center">
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i6} alt={""} width={100} height={100} />
          <p className=" p-2">Group Outings</p>
        </div>
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i7} alt={""} width={100} height={100} />
          <p className=" p-2">Team Meetings</p>
        </div>
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i8} alt={""} width={100} height={100} />
          <p className=" p-2">Family Getaways</p>
        </div>
      </div>
    </div>
  </div>
);

export default Component1;
