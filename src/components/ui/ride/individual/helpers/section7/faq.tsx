"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does UPC Split Payment works?",
    answer:
      "UPC Split Payment is simple and user-friendly. Once you've booked the vehicle, you just need to scan the QR code available in the OZ Ove app to complete your payment. This feature allows you to split the cost of the ride among passengers easily.",
  },
  {
    question: "How can I create Shuttle Routes?",
    answer:
      "With OZ Ove, you can create on-demand shuttle routes with up to 10 stops. You can flexibly share route status, and also track your shuttles and monitor performance in real-time. This service is particularly useful for local events, Wine tours, Universities and Schools, Corporate, and other institutions requiring regular shuttle services.",
  },
  {
    question: "Can I book multiple vehicle?",
    answer:
      "Yes, you certainly can! When making your booking on the OZ Ove platform, simply select the quantity of vehicles you require in the add-on section.",
  },
  {
    question: "How can I book by the hour?",
    answer:
      "Booking by the hour is an easy process. During your booking, you will find an add-on option for hourly booking. Just select it, and you're all set for your ride!",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full ">
      <h2 className="text-2xl font-bold  mb-4 text-customYellow">
        Frequently Asked Questions
      </h2>
      <div className="lg:space-y-4">
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
