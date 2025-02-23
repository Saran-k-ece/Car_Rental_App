import React from 'react';
import Navbar from '../components/Navbar';
import { FaHeart, FaShareAlt, FaPrint } from 'react-icons/fa';
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import benz1 from '../assets/benz1.png';
import benz2 from '../assets/benz2.png';
import benz3 from '../assets/benz3.png';
import benz4 from '../assets/benz4.png';
import benz5 from '../assets/benz5.png';
import { assets } from '../assets/assets';
import Footer from '../components/Footer';

const CarDetails = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Header Section */}
      <div
        className="relative w-full h-[40vw] min-h-[200px] bg-cover bg-center sm:min-h-[300px] md:min-h-[400px]"
        style={{ backgroundImage: `url(${assets.about1})` }}
      >
        <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 text-white text-xs sm:text-sm md:text-base font-medium">
          <span className="text-gray-300 hover:text-white cursor-pointer">Home</span>
          <span className="mx-1 sm:mx-2">&gt;</span>
          <span className="text-gray-400 hover:text-white cursor-pointer">Certified Pre-Owned</span>
          <span className="mx-1 sm:mx-2">&gt;</span>
          <span className="text-gray-500 hover:text-white cursor-pointer">Mercedes - Benz - C class</span>
        </div>
      </div>

      <div className="max-w-9xl mx-auto p-4 sm:p-6">
        {/* Title Section */}
        <div className="flex items-center mb-4">
          <div className="border-l-4 border-red-500 h-6 mr-2"></div>
          <h1 className="text-2xl sm:text-4xl font-bold">Mercedes-Benz C class</h1>
        </div>

        {/* Tags & Price Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 flex-wrap">
            {['2023', 'Mercedes', 'C Class', 'Convertible', 'Used'].map((tag, index) => (
              <span key={index} className="bg-red-100 text-red-600 px-3 py-1 text-xs sm:text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-0">
            <div className="text-2xl sm:text-3xl font-semibold">
              ₹ 6,59,999 <span className="text-gray-500 line-through ml-2 text-lg sm:text-xl">₹ 8,59,999</span>
            </div>
            <div className="flex gap-4">
              <FaHeart className="text-gray-500 hover:text-red-500 cursor-pointer" size={20} />
              <FaShareAlt className="text-gray-500 hover:text-blue-500 cursor-pointer" size={20} />
              <FaPrint className="text-gray-500 hover:text-black cursor-pointer" size={20} />
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="mt-6">
          <img
            src={assets.certified1}
            alt="Mercedes-Benz C class"
            className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Thumbnail Images */}
        <div className="flex justify-center gap-2 sm:gap-4 mt-4 flex-wrap">
          {[benz1, benz2, benz3, benz4, benz5].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Car view ${index + 1}`}
              className="w-[80px] h-[60px] sm:w-[150px] sm:h-[100px] object-cover rounded-lg cursor-pointer hover:opacity-80 border border-gray-300"
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="max-w-8xl mx-auto p-9">
        <div className="flex items-center mb-4">
          <div className="border-l-4 border-red-500 h-6 mr-2"></div>
          <h2 className="text-3xl font-semibold">Description</h2>
        </div>
        <p className="text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam natus quia exercitationem, minus officiis aut voluptates facilis perferendis vitae magni tempore cumque saepe corporis id earum ea. Tenetur inventore repellat placeat labore ullam odit minus cum mollitia blanditiis voluptates, voluptatibus dolore nostrum sunt dolor deserunt eligendi rem rerum id voluptatum repudiandae ex quaerat. Maxime, necessitatibus nam vero saepe, nostrum adipisci accusamus soluta quod incidunt, ad eveniet nobis distinctio eius temporibus optio nisi explicabo tempora neque esse dignissimos facere. Iure ipsum est molestiae! Repudiandae vero, dolore itaque delectus laboriosam aliquid? Enim quo pariatur sint architecto aliquam laboriosam. Eum fugit itaque voluptatibus!
        </p>
      </div>
      
      <div className="max-w-9xl mx-auto p-4 sm:p-9 flex flex-col md:flex-row gap-10">
  {/* Car Overview Section */}
  <div className="flex-1">
    <div className="flex items-center mb-4">
      <div className="border-l-4 border-red-500 h-6 mr-2"></div>
      <h2 className="text-2xl sm:text-3xl font-semibold">Car Overview</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-gray-900 text-base sm:text-lg">
      {[
        ["Condition:", "New"],
        ["Cylinders:", "6"],
        ["Stock Number:", "N8990"],
        ["Fuel Type:", "Petrol"],
        ["VIN Number:", "84HKI92KJDC"],
        ["Doors:", "4"],
        ["Year:", "2023"],
        ["Colour:", "Black"],
        ["Mileage:", "28,000"],
        ["Seats:", "5"],
        ["Transmission:", "Automatic"],
        ["City MPG:", "18"],
        ["Engine Size:", "4.8 L"],
        ["Highway MPG:", "28"],
        ["Driver Type:", "2WD"]
      ].map(([label, value], index) => (
        <div key={index} className="flex justify-between font-semibold">
          <span>{label}</span> <span className="font-normal">{value}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Owner Contact Form */}
  <div className="w-full md:w-[35%] bg-gray-100 p-5 sm:p-[20px] rounded-lg shadow-lg">
    <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Owner of Car</h3>
    <input type="text" placeholder="Name" className="w-full p-2 mb-3 border rounded text-sm sm:text-base" />
    <input type="email" placeholder="Email Address" className="w-full p-2 mb-3 border rounded text-sm sm:text-base" />
    <input type="tel" placeholder="Phone Number" className="w-full p-2 mb-3 border rounded text-sm sm:text-base" />
    <textarea placeholder="Description" className="w-full p-2 mb-3 border rounded h-24 text-sm sm:text-base"></textarea>
    <button className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition">Send Message</button>
  </div>
</div>


      <div className="max-w-9xl mx-auto p-6">
        <div className="flex items-center mb-4">
          <div className="border-l-4 border-red-500 h-6 mr-2"></div>
          <h2 className="text-2xl font-semibold">Features</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
  {[
    'A/C: Front', 'Front fog light', 'Power steering',
    'Central locking', 'Rain sensing wiper', 'Vanity mirror',
    'Leather', 'Rear Spoilers', 'Trunk Light',
    'Sports package', 'Sun roof', 'Navigation system'
  ].map((feature, index) => (
    <div key={index} className="flex items-center space-x-2">
      <CheckCircleIcon className="w-5 h-5 text-blue-500" />
      <p>{feature}</p>
    </div>
  ))}
</div>  
     {/* Location Section */}
     <div className="max-w-10xl mx-auto p-6 mt-6 mr-2">
        <h2 className="text-3xl font-bold flex items-center">
          <span className="border-l-4 border-red-500 pl-2">Location</span>
        </h2>
        <p className="text-gray-600 mt-2">
          The Grand Royale Towers, 12th Avenue, Race Course, Coimbatore, Tamil Nadu - 641018
        </p>

        <div className="mt-4">
          <iframe
            title="Google Maps Location"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119121.65993784422!2d76.88483286798547!3d11.01395778797012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1740306788382!5m2!1sen!2sin" 
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white p-8 rounded-xl shadow-md border">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="border-l-4 border-red-500 pl-2">Loan Calculator</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {["Total Amount", "Down Payment", "Ammonization period", "Interest"].map((label, index) => (
              <div key={index}>
                <label className="block text-gray-700 mb-1">{label}</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
            ))}
          </div>

          <div className="flex mt-6 space-x-4">
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700">
              Calculate
            </button>
            <button className="text-red-600 font-semibold hover:underline">Reset</button>
          </div>
        </div>
      </div>


      </div>


      <Footer />
    </div>
  );
};

export default CarDetails;
