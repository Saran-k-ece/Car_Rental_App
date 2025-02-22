import React, { useContext, useEffect, useState } from "react";
import { CarContext } from "../context/CarContext";
import CarCard from "./CarCard";

const FeatureList = () => {
  const { cars } = useContext(CarContext);
  const [selected, setSelected] = useState("All");
  const [listCar, setListCar] = useState([]);

  useEffect(() => {
    setListCar(cars.slice(0, 9));
  }, [cars]);

  return (
    <div className="w-full px-6 sm:px-8 py-6 mx-auto ">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold flex items-center px-0">
          <span className="w-2 h-6 bg-red-500 mr-2"></span> Feature Listing
        </h1>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-2 border rounded-md w-full sm:w-auto">
          {["All", "New", "Used"].map((type) => (
            <button
              key={type}
              className={`w-full sm:w-auto px-6 py-3 text-sm sm:text-lg font-semibold rounded-md transition duration-300 
                ${selected === type ? "bg-red-500 text-white border-red-500 shadow-md" : "bg-white text-gray-500 hover:bg-gray-100"}`}
              onClick={() => setSelected(type)}
            >
              {type} Cars
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {listCar.map((car, index) => (
          <CarCard key={car.id || index} car={car} />
        ))}
      </div>

      <div className="flex flex-col items-center mt-8 sm:mt-[5vw]">
          <button className="bg-red-500 text-white text-sm sm:text-md py-2 px-6 rounded-lg w-full max-w-[180px] transition duration-300 hover:bg-red-600">
              Load more
        </button>
      </div>

    </div>
  );
};

export default FeatureList;
