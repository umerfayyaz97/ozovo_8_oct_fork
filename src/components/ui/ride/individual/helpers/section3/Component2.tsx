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
import i9 from "@/../public/ride/individual/section3/i9.png";
import i10 from "@/../public/ride/individual/section3/i10.png";
import i11 from "@/../public/ride/individual/section3/i11.png";
import i12 from "@/../public/ride/individual/section3/i12.png";

import { CircleCheckBig } from "lucide-react";
const Component2 = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { title: "Small Bus", content: <SmallBus /> },
    { title: "Medium Bus", content: <MediumBus /> },
    { title: "Large Bus", content: <LargeBus /> },
    { title: "Party Bus", content: <PartyBus /> },
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

const SmallBus = () => (
  <div>
    <div className="flex lg:flex-row flex-col-reverse ">
      <div>
        <h1 className="text-3xl font-bold px-4">Oz Mini Bus</h1>
        <p className="p-4">
          Compact yet comfortable, our Mini Buses are perfect for smaller
          groups. Enjoy a relaxed journey with us, no matter your destination.
        </p>
        <ul className="p-4">
          <li className="flex gap-2 p-2">
            <CircleCheckBig />
            Comfortable
          </li>
          <li className="flex gap-2 p-2">
            {" "}
            <CircleCheckBig />
            Relaxed Journey
          </li>
          <li className="flex gap-2 p-2">
            {" "}
            <CircleCheckBig />
            Best for Small Groups
          </li>
        </ul>
      </div>
      <div>
        <Image src={i9} alt={""} />
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg lg:w-[640px]">
      <h2 className="mt-4 text-xl font-bold p-2 ">WHO IS IT FOR?</h2>
      <div className="flex space-x-4 justify-center">
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i10} alt={""} width={100} height={100} />
          <p className=" p-2">Group Outings</p>
        </div>
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i11} alt={""} width={100} height={100} />
          <p className=" p-2">Team Meetings</p>
        </div>
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i12} alt={""} width={100} height={100} />
          <p className=" p-2">Family Getaways</p>
        </div>
      </div>
    </div>
  </div>
);

const MediumBus = () => (
  <div className="">
    <div className="flex lg:flex-row flex-col-reverse ">
      <div>
        <h1 className="text-3xl font-bold px-4">Medium Bus</h1>
        <p className="p-4">
          VOz Midi Bus - Striking a perfect balance between capacity and
          comfort, our Midi Buses cater to larger groups, ensuring everyone
          arrives together and on time.
        </p>
        <ul className="p-4">
          <li className="flex gap-2 p-2">
            <CircleCheckBig />
            High Storage
          </li>
          <li className="flex gap-2 p-2">
            {" "}
            <CircleCheckBig />
            Smooth Ride
          </li>
          <li className="flex gap-2 p-2">
            {" "}
            <CircleCheckBig />
            Best for Large Group
          </li>
        </ul>
      </div>
      <div>
        <Image src={i9} alt={""} />
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg lg:w-[640px]">
      <h2 className="mt-4 text-xl font-bold p-2 ">WHO IS IT FOR?</h2>
      <div className="flex space-x-4 justify-center">
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i2} alt={""} width={100} height={100} />
          <p className=" p-2">Tour Groups</p>
        </div>
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i3} alt={""} width={100} height={100} />
          <p className=" p-2">Educational Groups</p>
        </div>
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i4} alt={""} width={100} height={100} />
          <p className=" p-2">Event Attendees</p>
        </div>
      </div>
    </div>
  </div>
);

const LargeBus = () => (
  <div>
    <div className="flex lg:flex-row flex-col-reverse ">
      <div>
        <h1 className="text-3xl font-bold px-4">Oz Maxi Bus</h1>
        <p className="p-4">
          {` Designed for big groups, our Maxi Buses offer ample space, ensuring
          everyone's comfort on the go. Ideal for corporate events, large
          gatherings, or group tours.`}
        </p>
        <ul className="p-4">
          <li className="flex gap-2 p-2">
            <CircleCheckBig />
            Versatility
          </li>
          <li className="flex gap-2 p-2">
            {" "}
            <CircleCheckBig />
            Group Cohesion
          </li>
          <li className="flex gap-2 p-2">
            {" "}
            <CircleCheckBig />
            Cost-effective
          </li>
        </ul>
      </div>
      <div>
        <Image src={i9} alt={""} />
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg lg:w-[640px]">
      <h2 className="mt-4 text-xl font-bold p-2 ">WHO IS IT FOR?</h2>
      <div className="flex space-x-4 justify-center">
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i2} alt={""} width={100} height={100} />
          <p className=" p-2">Tour Groups</p>
        </div>
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i3} alt={""} width={100} height={100} />
          <p className=" p-2">Educational Groups</p>
        </div>
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i4} alt={""} width={100} height={100} />
          <p className=" p-2">Event Attendees</p>
        </div>
      </div>
    </div>
  </div>
);

const PartyBus = () => (
  <div>
    <div className="flex lg:flex-row flex-col-reverse ">
      <div>
        <h1 className="text-3xl font-bold px-4">Party Bus</h1>
        <p className="p-4">
          {`Oz Fiesta Bus - Turn up the fun with our Fiesta Buses. Decked out with
          a sound system and party lights, these buses bring the party to you,
          no matter where you're headed.`}
        </p>
        <ul className="p-4">
          <li className="flex gap-2 p-2">
            <CircleCheckBig />
            Safe Transportation
          </li>
          <li className="flex gap-2 p-2">
            {" "}
            <CircleCheckBig />
            Convenient And Flexible Party Venue
          </li>
          <li className="flex gap-2 p-2">
            {" "}
            <CircleCheckBig />
            Mobile Party Atmosphere
          </li>
        </ul>
      </div>
      <div>
        <Image src={i9} alt={""} />
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg lg:w-[640px]">
      <h2 className="mt-4 text-xl font-bold p-2 ">WHO IS IT FOR?</h2>
      <div className="flex space-x-4 justify-center">
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i2} alt={""} width={100} height={100} />
          <p className=" p-2">Tour Groups</p>
        </div>
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i3} alt={""} width={100} height={100} />
          <p className=" p-2">Educational Groups</p>
        </div>
        <div className="w-1/3 p-2 justify-center flex flex-col">
          <Image src={i4} alt={""} width={100} height={100} />
          <p className=" p-2">Event Attendees</p>
        </div>
      </div>
    </div>
  </div>
);
export default Component2;
