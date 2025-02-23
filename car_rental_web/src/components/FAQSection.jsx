import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How flexible are Carspace's membership plans?",
    answer:
      "Carspace offers a range of flexible membership plans, including daily, weekly, and monthly options. Members can upgrade, downgrade, or cancel their plans anytime based on their needs, ensuring a hassle-free experience.",
  },
  {
    question: "What kind of events and networking opportunities does Carspace provide?",
    answer:
      "Carspace hosts a variety of events, including industry meetups, skill-building workshops, guest speaker sessions, and networking mixers. These events are designed to foster collaboration and help members connect with like-minded professionals.",
  },
  {
    question: "Can I tour the Carspace before committing to a membership?",
    answer:
      "Yes! Carspace encourages potential members to schedule a tour before making a decision. You can explore the workspace, check out the amenities, and see if it aligns with your workstyle before signing up.",
  },
  {
    question: "Is Carspace suitable for remote teams and distributed workforces?",
    answer:
      "Absolutely! Carspace provides high-speed internet, private meeting rooms, and virtual office solutions, making it an ideal environment for remote teams and distributed workforces to collaborate efficiently.",
  },
  {
    question: "What measures does Carspace take for environmental sustainability?",
    answer:
      "Carspace is committed to sustainability by incorporating energy-efficient lighting, eco-friendly furniture, recycling programs, and green initiatives. We strive to create a workspace that minimizes environmental impact while promoting a healthy work environment.",
  },
  {
    question: "Still have questions?",
    answer:
      "Feel free to reach out to our support team! You can contact us via email, phone, or visit our nearest Carspace location for more details.",
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
