import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-600 text-white py-12 px-6 md:px-24">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Do you have Something <br /> to Sell through Us?
        </h2>
        <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm">
          Sell your car today
        </button>
      </div>

      {/* Footer Content */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-start border-t border-white pt-8">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <h3 className="text-lg font-semibold">Overview</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="cursor-pointer hover:text-red-400">About Us</li>
              <li className="cursor-pointer hover:text-red-400">Features</li>
              <li className="cursor-pointer hover:text-red-400">Cars</li>
              <li className="cursor-pointer hover:text-red-400">Testimonials</li>
              <li className="cursor-pointer hover:text-red-400">FAQ’s</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Explore</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="cursor-pointer hover:text-red-400">Blogs</li>
              <li className="cursor-pointer hover:text-red-400">Press mentions</li>
              <li className="cursor-pointer hover:text-red-400">Careers</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full md:w-1/3 mt-6 md:mt-0">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-red-600">📍</span>
            <p>7th B Main BTM 1st Stage Bangalore Karnataka 560029</p>
          </div>
          <div className="flex items-center gap-2 text-sm mt-3">
            <span className="text-red-600">📧</span>
            <p>hello@email.com</p>
          </div>
          <div className="flex items-center gap-2 text-sm mt-3">
            <span className="text-red-600">📞</span>
            <p>+91 8310955920</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-white pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <div className="flex gap-4 text-xl">
          <FaFacebookF className="cursor-pointer hover:text-gray-300" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
          <FaTwitter className="cursor-pointer hover:text-gray-300" />
          <FaYoutube className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
