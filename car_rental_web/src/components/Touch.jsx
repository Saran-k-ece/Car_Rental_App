import React from "react";
import { assets } from "../assets/assets";

const Touch = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-xl shadow-lg">
      {/* Left Section */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-4xl font-bold text-black">
          <span className="border-l-4 border-red-500 pl-3">Get in Touch</span>
        </h2>
        <p className="text-gray-600 mt-4">
          We're here to help! Whether you're interested in booking a tour, learning
          more about our memberships, or have general inquiries, feel free to reach
          out. We'll get back to you as soon as possible.
        </p>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Name"
            className="w-[48%] p-3 border rounded-md mr-2"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="w-[48%] p-3 border rounded-md"
          />
          <textarea
            placeholder="Description"
            className="w-full p-3 border rounded-md mt-4 h-32"
          ></textarea>
          <button className="mt-4 bg-red-600 text-white px-6 py-3 rounded-md">
            Send My Inquiry
          </button>
        </div>
      </div>
      
      {/* Right Section - Image */}
      <div className="md:w-1/2 p-6">
        <img
          src={assets.lap1}
          alt="Contact Office"
          className="w-full rounded-xl shadow-md"
        />
      </div>
    </div>
  );
};

export default Touch;
