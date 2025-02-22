import React, { useState } from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  const [selected, setSelected] = useState("new");

  return (
    <>
     <div 
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-cover bg-center px-4 sm:px-8 lg:px-20 py-10 sm:py-16 pt-28 sm:pt-36"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${assets.bgImg1})` }}
    >

      {/* Left Content */}
      <div className="max-w-lg text-white text-center lg:text-left">
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-bold tracking-normal leading-snug">
          Find Quality-Assured Cars <br className="hidden sm:block" /> Tailored to Your Budget and Preferences
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
          Browse a wide range of certified used cars from trusted dealers and private sellers.
        </p>

        {/* CTA Button */}
        <button className="mt-5 sm:mt-7 bg-gradient-to-r from-red-500 to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-lg font-bold uppercase tracking-wider shadow-md hover:shadow-xl transition transform hover:scale-105">
          Book My Car
        </button>

        {/* Ratings Section */}
        <div className="mt-5 flex items-center justify-center lg:justify-start gap-2">
          <div className="flex text-yellow-400 text-lg sm:text-xl">★★★★★</div>
          <p className="text-xs sm:text-sm text-gray-300 opacity-90">Trusted by 50+ Happy Customers</p>
        </div>
      </div>

      {/* Right-Side Form */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-[90%] sm:w-[80%] md:w-[60%] lg:max-w-sm mt-12 lg:mt-0">
        {/* Toggle Buttons */}
        <div className="flex justify-between bg-gray-100 p-1 rounded-lg">
          <button
            className={`w-1/2 py-2 text-sm sm:text-lg font-semibold transition rounded-md ${
              selected === "new" ? "bg-red-500 text-white" : " "
            }`}
            onClick={() => setSelected("new")}
          >
            New Cars
          </button>

          <button
            className={`w-1/2 py-2 text-sm sm:text-lg font-semibold transition rounded-md ${
              selected === "used" ? "bg-red-500 text-white" : " "
            }`}
            onClick={() => setSelected("used")}
          >
            Used Cars
          </button>
        </div>

        <input type="text" placeholder="Make" className="w-full p-3 mt-5 border border-gray-300 rounded-md text-sm sm:text-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
        <input type="text" placeholder="Models" className="w-full p-3 mt-5 border border-gray-300 rounded-md text-sm sm:text-lg focus:outline-none focus:ring-2 focus:ring-red-400" />

        {/* Price Range Slider */}
        <div className="mt-5">
          <input type="range" min="1000" max="5000" className="w-full cursor-pointer" />
          <div className="flex justify-between text-xs sm:text-sm text-gray-500">
            <span>1,000</span>
            <span>5,000</span>
          </div>
        </div>

        <input type="text" placeholder="Body" className="w-full p-3 mt-5 border border-gray-300 rounded-md text-sm sm:text-lg focus:outline-none focus:ring-2 focus:ring-red-400" />

        <button className="w-full mt-5 bg-gradient-to-r from-red-500 to-red-700 text-white py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-lg uppercase tracking-wider shadow-md hover:shadow-xl transition transform hover:scale-105">
          2334 Cars Available
        </button>
      </div>
    
    </div>

   
    </>
   
  );
};

export default Hero;
