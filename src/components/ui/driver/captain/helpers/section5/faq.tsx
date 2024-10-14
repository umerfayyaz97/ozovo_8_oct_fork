"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do i sign up to be a Driver Partner with OZ Ove?",
    answer:
      "Simply download the OZ Ove Driver Partner app and follow the step-by-step guide to sign up. You'll need to provide your personal details, a valid driver's license, proof of insurance, and your bank account details for payouts.",
  },
  {
    question: "What are th benefits of the Oz Ove Sticker Program ?",
    answer:
      "With the OZ Ove Sticker Program, your vehicle is prioritized for orders over other vehicles. This increases your chance of getting more orders, thus maximizing your income. Plus, showcasing the OZ Ove brand on your vehicle also earns you passive income!",
  },
  {
    question: "How does the payment system works?",
    answer:
      "With the OZ Ove Sticker Program, your vehicle is prioritized for orders over other vehicles. This increases your chance of getting more orders, thus maximizing your income. Plus, showcasing the OZ Ove brand on your vehicle also earns you passive income!",
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
