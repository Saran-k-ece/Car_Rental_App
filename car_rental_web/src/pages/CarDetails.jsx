import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaHeart, FaShareAlt, FaPrint } from "react-icons/fa";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import { assets } from "../assets/assets";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const defaultFeatures = [
  "A/C: Front", "Front fog light", "Power steering",
  "Central locking", "Rain sensing wiper", "Vanity mirror",
  "Leather", "Rear Spoilers", "Trunk Light",
  "Sports package", "Sun roof", "Navigation system"
];


const CarDetails = () => {
  const location = useLocation();
  const car = location.state?.car;

  if (!car) {
    return <h2 className="text-center text-xl font-bold mt-10">No Car Selected</h2>;
  }
 
  const handleBuyNow = () => {
    toast.success("Request sent to admin successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [totalAmount, setTotalAmount] = useState();
  const [downPayment, setDownPayment] = useState();
  const [amortization, setAmortization] = useState(1);
  const [interestRate, setInterestRate] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateLoan = () => {
    const loanAmount = totalAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = amortization * 12;
    
    if (monthlyRate === 0) {
      setMonthlyPayment(loanAmount / numberOfPayments);
    } else {
      const payment = 
        (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
      setMonthlyPayment(payment);
    }
  };

  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <ToastContainer />

      {/* Header Section */}
      <div
        className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.about1})` }}
      />

      <div className="max-w-9xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Car Name with Left Border */}
        <div className="flex items-center gap-2">
          <div className="w-1 h-8 bg-red-600"></div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            {car.brand} - {car.model}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
          {/* Car Tags */}
          <div className="flex gap-2 flex-wrap">
            {[car.year, car.brand, car.model, car.type, car.condition]
              .filter(Boolean)
              .map((tag, index) => (
                <span key={index} className="bg-red-100 text-red-600 px-3 py-1 text-xs md:text-sm rounded-full">
                  {tag}
                </span>
            ))}
          </div>

          {/* Price & Icons */}
          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <div className="text-xl md:text-2xl font-semibold">
              ₹ {car.price_per_day}
              <span className="text-gray-500 line-through ml-2 text-sm md:text-lg">
                ₹ {car.original_price}
              </span>
            </div>
            <div className="flex gap-3 text-gray-500 text-lg">
              <FaHeart className="hover:text-red-500 cursor-pointer" />
              <FaShareAlt className="hover:text-blue-500 cursor-pointer" />
              <FaPrint className="hover:text-gray-700 cursor-pointer" />
            </div>
          </div>
        </div>

        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-auto max-h-[630px] object-cover rounded-xl shadow-lg mt-6"
          loading="lazy"
        />
      </div>

      <div className="max-w-9xl mx-auto p-6">
        <h2 className="text-3xl font-semibold">Description</h2>
        <p className="text-gray-700 mt-2 text-lg md:text-base">{car.description || "No description available."}</p>
      </div>

      {/* Car Overview Section */}
<div className="flex flex-col md:flex-row md:justify-between gap-6 p-6">
  {/* Car Details */}
  <div className="w-full md:w-[60%] bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">Car Overview</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-900 text-sm md:text-lg">
      {["Fuel Type", "Mileage", "Transmission", "Engine Size","Cylinders","Seats","doors","drive_type","colour"].map((label, index) => (
        <div key={index} className="flex justify-between font-semibold">
          <span>{label}:</span> 
          <span className="font-normal">{car[label.toLowerCase().replace(/ /g, "_")] || "N/A"}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Owner Form */}
  <div className="w-full md:w-[35%] bg-gray-100 p-5 sm:p-[20px] rounded-lg shadow-lg">
    <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Owner of Car</h3>
    <input type="text" placeholder="Name" className="w-full p-3 mb-3 border rounded text-sm sm:text-base" />
    <input type="email" placeholder="Email Address" className="w-full p-3 mb-3 border rounded text-sm sm:text-base" />
    <input type="tel" placeholder="Phone Number" className="w-full p-3 mb-3 border rounded text-sm sm:text-base" />
    <textarea placeholder="Description" className="w-full p-3 mb-3 border rounded h-24 text-sm sm:text-base"></textarea>
    <button className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700 transition">
      Send Message
    </button>
  </div>
</div>

      


      {/* Features Section */}
      <div className="max-w-9xl mx-auto p-6">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 mt-4">
          {(car.features && car.features.length > 0 ? car.features : defaultFeatures).map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircleIcon className="w-5 h-5 text-blue-500" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>

        {/* Buy Now Button */}
         <div className="flex justify-center mt-6">
           <button onClick={handleBuyNow} className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300"  >
             Buy Now
           </button>
         </div>


      {/* Location Section */}
      <div className="max-w-9xl mx-auto p-6">
        <h2 className="text-2xl font-semibold">Location</h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          The Grand Royale Towers, 12th Avenue, Race Course, Coimbatore, Tamil Nadu - 641018
        </p>
        <div className="mt-4">
          <iframe
            title="Google Maps Location"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119121.65993784422!2d76.88483286798547!3d11.01395778797012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1740306788382!5m2!1sen!2sin"
            width="100%"
            height="350"
            className="rounded-lg shadow-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      
      {/* Loan Calculator */}
      <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white p-8 rounded-xl shadow-md border">
        <h2 className="text-2xl font-bold flex items-center">
          <span className="border-l-4 border-red-500 pl-2">Loan Calculator</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {["Total Amount", "Down Payment", "Amortization Period (Years)", "Interest Rate (%)"].map((label, index) => (
            <div key={index}>
              <label className="block text-gray-700 mb-1">{label}</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                value={
                  index === 0 ? totalAmount :
                  index === 1 ? downPayment :
                  index === 2 ? amortization :
                  interestRate
                }
                onChange={(e) => {
                  const value = parseFloat(e.target.value) || 0;
                  if (index === 0) setTotalAmount(value);
                  if (index === 1) setDownPayment(value);
                  if (index === 2) setAmortization(value);
                  if (index === 3) setInterestRate(value);
                }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={calculateLoan}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Calculate
        </button>

        <div className="mt-4 text-xl font-semibold text-gray-800">
          Monthly Payment: ₹{monthlyPayment.toFixed(2)}
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default CarDetails;
