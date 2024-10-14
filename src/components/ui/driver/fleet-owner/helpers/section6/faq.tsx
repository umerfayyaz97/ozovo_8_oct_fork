"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is the Oz Ove Fleet Management service ?",
    answer:
      "Our Fleet Management service is a comprehensive solution designed to streamline operations for Mobility Service Providers. It includes features like scheduling, route planning, driver and vehicle management, and real-time tracking, making it easier to manage your fleet efficiently.",
  },
  {
    question: "What can Oz Ove Fleet Management service benefit my business?",
    answer:
      "Our service allows you to optimize your operations by assigning drivers and vehicles efficiently, planning the best routes, and monitoring delivery in real-time. This helps reduce operational costs, improves productivity, and ultimately boosts your bottom line.",
  },
  {
    question:
      "I'm a fleet owner. Can i still use OZ Ove Fleet Management service ?",
    answer:
      "Absolutely! OZ Ove's Fleet Management service is scalable and designed to accommodate fleets of all sizes. Whether you have 3 vehicles or 300, we can help streamline your operations and increase efficiency.",
  },
  {
    question:
      "How does the Oz Ove platform ensure the safety of my fleet and my drivers?",

    answer:
      "Safety is a   top priority at OZ Ove. Our platform includes features like real-time tracking and emergency response, which help ensure the safety of your drivers on the road. Additionally, we offer insurance plans for added protection.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-customYellow">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="lg:border lg:rounded-lg p-4 lg:bg-white bg-faq lg:text-black text-white"
          >
            <button
              className="w-full text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold ">
                {item.question}
                <span className="float-right">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </h3>
            </button>
            {activeIndex === index && (
              <p className="mt-2 lg:text-gray-700 border-t-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
