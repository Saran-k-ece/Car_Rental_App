import React, { useContext, useState, useEffect } from "react";
import { CarContext } from "../context/CarContext";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";

const Certified = () => {
  const { cars } = useContext(CarContext);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [name, setName] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [carType, setCarType] = useState("all");

  useEffect(() => {
    setFilteredCars(cars.slice(0, 6));
  }, [cars]);

  const uniqueMakes = [...new Set(cars.map((car) => car.brand))];
  const uniqueModels = [...new Set(cars.map((car) => car.model))];

  const handleSearch = () => {
    const results = cars.filter(
      (car) =>
        (make ? car.brand === make : true) &&
        (model ? car.model === model : true) &&
        (name ? car.name.toLowerCase().includes(name.toLowerCase()) : true) &&
        (carType === "all" || car.type === carType)
    );
    setFilteredCars(results.slice(0, 6));
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <div
        className="w-full h-[40vw] bg-cover bg-center sm:bg-top bg-no-repeat relative flex items-center justify-center"
        style={{ backgroundImage: `url(${assets.about1})` }}
      >
        <Navbar />
      </div>

      <div className="px-4 sm:px-6 md:px-10 py-6 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold flex items-center">
          <span className="w-2 h-6 bg-red-500 mr-2"></span> Used Cars Worldwide
        </h1>
        <button className="mt-4 sm:mt-0 border border-gray-400 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition">
          Save Search
        </button>
      </div>

      <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 gap-6">
        {/* Sidebar Filters */}
        <div className="md:w-1/4 bg-white p-4 sm:p-6 shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Filter Your Search</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Search by Name</label>
            <input
              type="text"
              placeholder="Enter car name..."
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-600">Select Make</label>
            <select
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            >
              <option value="">All Makes</option>
              {uniqueMakes.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>

            <label className="block text-sm font-medium text-gray-600">Select Model</label>
            <select
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              <option value="">All Models</option>
              {uniqueModels.map((mod) => (
                <option key={mod} value={mod}>{mod}</option>
              ))}
            </select>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition mt-5"
            onClick={handleSearch}
          >
            Search Cars
          </button>
        </div>

        {/* Car Listings */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div key={car.id} className="flex justify-center">
                <CarCard car={car} />
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">No cars found.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Certified;
