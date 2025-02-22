import React from "react";
import { assets } from "../assets/assets";

const ExploreCars = () => {
  const cars = [
    { img: assets.exp1, name: "Sedan" },
    { img: assets.exp2, name: "Campers" },
    { img: assets.exp3, name: "Cabriolet" },
    { img: assets.exp4, name: "Pickup" },
    { img: assets.exp5, name: "Supercar" },
    { img: assets.exp6, name: "Minivan" },
  ];

  return (
    <div className="w-full px-8 py-6">
      {/* Title and View More */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold flex items-center">
          <span className="w-2 h-6 bg-red-500 mr-2"></span> Explore Our Cars
        </h1>
        <p className="text-gray-500 cursor-pointer hover:underline underline-offset-4">View more</p>
      </div>

      {/* Car List  */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide px-10 whitespace-nowrap snap-x snap-mandatory scroll-smooth touch-pan-x">
        {cars.map((car, index) => (
          <div
            key={index}
            className="min-w-[150px] sm:w-60 p-4 border rounded-lg shadow-sm flex flex-col items-center snap-start bg-white"
          >
            <img src={car.img} alt={car.name} className="w-24 h-16 object-contain" />
            <p className="mt-2 text-sm">{car.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCars;
