import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How flexible are Carspace's membership plans?",
    answer:
      "Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.",
  },
  {
    question: "What kind of events and networking opportunities does Carspace provide?",
    answer: "",
  },
  {
    question: "Can I tour the Carspace before committing to a membership?",
    answer: "",
  },
  {
    question: "Is Carspace suitable for remote teams and distributed workforces?",
    answer: "",
  },
  {
    question: "What measures does Carspace take for environmental sustainability?",
    answer: "",
  },
  {
    question: "Still has questions?",
    answer: "",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between px-6 bg-white sm:px-12 md:px-24 py-16 gap-12">
      {/* Left Section */}
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          <span className="border-l-4 border-red-500 pl-3">Your Roadmap to</span> <br /> Carspace Clarity
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call
          to action, they may still have questions (doubts) that can be answered.
        </p>
      </div>

      {/* Right Section (FAQ) */}
      <div className="w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <button
              className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
            </button>
            {openIndex === index && faq.answer && (
              <p className="text-gray-500 mt-2 text-base">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
