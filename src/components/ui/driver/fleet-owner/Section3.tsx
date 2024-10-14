// components/FleetBenefits.js

import React from "react";
import Image from "next/image";
import p1 from "@/../public/driver/fleet-owner/section3/p1.png"; // replace with your actual path
import p2 from "@/../public/driver/fleet-owner/section3/p2.png"; // replace with your actual path
import p3 from "@/../public/driver/fleet-owner/section3/p3.png"; // replace with your actual path
import p4 from "@/../public/driver/fleet-owner/section3/p4.png"; // replace with your actual path

const benefits = [
  {
    img: p1,
    alt: "Affordable & Transparent",
    text: "Boost revenue opportunities for your fleet leveraging advanced options tailored to your fleet’s schedule, reducing downtime and maximizing productivity.",
  },
  {
    img: p2,
    alt: "Optimize Productivity",
    text: "Optimize Productivity by Efficiently Assigning Drivers to Vehicles. Maximize vehicle utilization and minimize operational disruptions by promptly responding to driver emergencies and reducing unexpected issues.",
  },
  {
    img: p3,
    alt: "Enhance Transparency",
    text: "Enhance Transparency in Your Fleet Management Operations. Maintain complete oversight from beginning to end, ensuring no detail in the fleet.",
  },
  {
    img: p4,
    alt: "Expand Your Fleet",
    text: "Expand Your Fleet by Adding More Vehicles. Broaden your fleet by adding more vehicles to the roster, allowing drivers to pool resources and be ready for any unforeseen circumstances.",
  },
];

export default function FleetBenefits() {
  return (
    <div className="bg-graish p-10">
      <h2 className="text-3xl font-bold text-white mb-6 text-start">
        Exclusive <span className="text-yellow-400">Fleet Benefits</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 rounded-lg text-white"
          >
            <div className="text-4xl mb-4">
              <Image
                src={benefit.img}
                alt={benefit.alt}
                className="mt-4"
                width={40}
                height={40}
              />
            </div>
            <p>{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
