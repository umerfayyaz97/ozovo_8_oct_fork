"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: " How do I create an on-demand shuttle route for my business?",
    answer:
      "Creating a custom shuttle route is simple with Zify. Navigate to the 'Create Route' section in your business account dashboard. From there, you can input your desired start point, end point, and all stops in between. You can also set the frequency and duration of the route to match your specific needs.",
  },
  {
    question: `${"Can I modify a shuttle route once it's been created?"}`,
    answer:
      "Yes, you can. We understand that businesses evolve and needs change, so we've made it easy for you to update your routes whenever you need to. Simply go to your route settings in the business account dashboard and make the necessary adjustments.",
  },
  {
    question: "How are fares determined for on-demand shuttle routes?",
    answer:
      "The fare for each shuttle ride is calculated based on factors such as distance, duration, type of vehicle chosen, and any additional services requested. Rest assured, we strive to offer competitive and transparent pricing for all our services.",
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
      <div className="lg:space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="lg:border lg:rounded-lg p-4 lg:bg-white bg-zify lg:text-black text-white"
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
