"use client";
import React, { useState, useEffect } from "react";

const titles = ["Beach Day", "City Tour", "Mountain Hike", "Night Out"];

const Section4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center  px-4 lg:px-0 bg-zify text-white h-[140px]">
      <h1 className="lg:text-[48px] text-4xl font-bold">
        Book Oz Ove <br className="lg:hidden inline-block" /> For{" "}
        <span className="text-customYellow animate-fade">
          {titles[currentIndex]}
        </span>
      </h1>
    </div>
  );
};

export default Section4;
