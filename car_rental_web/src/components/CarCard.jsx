import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump, faTachometerAlt, faCogs } from "@fortawesome/free-solid-svg-icons";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 
        w-full max-w-[400px] sm:max-w-[500px] p-6 transition duration-300 hover:shadow-xl mx-auto sm:mx-4 my-4">
      
      {/* Car Image & Featured Tag */}
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        {car.featured && (
          <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-md">
            Featured
          </span>
        )}
      </div>

      {/* Car Details */}
      <div className="p-6">
        <p className="text-sm text-red-500 font-semibold text-center">{car.brand}</p>
        <h2 className="text-lg font-bold">{car.name}</h2>
        <p className="text-red-600 font-bold text-xl mt-1">₹ {car.price_per_day}</p>

        <div className="flex justify-between text-gray-600 text-sm mt-3">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faGasPump} className="text-black w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-gray-500 text-xs mt-1">Fuel type</p>
            <span className="text-red-600 font-semibold">{car.fuel_type}</span>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faTachometerAlt} className="text-black w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-gray-500 text-xs mt-1">Mileage</p>
            <span className="text-red-600 font-semibold">{car.mileage}</span>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faCogs} className="text-black w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-gray-500 text-xs mt-1">Transmission</p>
            <span className="text-red-600 font-semibold">{car.transmission}</span>
          </div>
        </div>

        <hr className="mt-3 border-gray-300" />

        <div className="mt-4 flex justify-between items-center">
          <Link to='/carDetails/:id' className="text-black font-semibold flex items-center hover:underline">
            View details →
          </Link>
          <Heart className="w-5 h-5 text-gray-500 cursor-pointer hover:text-red-500 transition" />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
