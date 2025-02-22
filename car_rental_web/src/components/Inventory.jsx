import React from 'react';
import { assets } from '../assets/assets';

const Inventory = () => {
  return (
    <div className="flex justify-center items-center w-full py-14 bg-white">
      <div className="flex flex-wrap justify-center gap-12 max-w-[1200px] w-full">
        
        {/* First Card */}
        <div className="relative w-[550px] h-[280px] bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between overflow-hidden">
          <p className="text-gray-500 font-semibold text-lg">CAR INVENTORY</p>
          <h2 className="text-3xl font-bold leading-snug">
            Search Over <span className="text-black">18000+</span> Used Vehicles
          </h2>
          <button className="text-black font-semibold flex items-center gap-2 text-lg">
            View Inventory →
          </button>
          <img src={assets.land1} alt="Car" className="w-48 absolute bottom-4 right-6 top-6" />
        </div>

        {/* Second Card */}
        <div className="relative w-[550px] h-[280px] bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between overflow-hidden">
          <p className="text-gray-500 font-semibold text-lg">CAR INVENTORY</p>
          <h2 className="text-3xl font-bold leading-snug">
            Looking to sell your Used brand car?
          </h2>
          <button className="text-black font-semibold flex items-center gap-2 text-lg">
            View Inventory →
          </button>
          <img src={assets.land2} alt="Cars" className="w-48 absolute bottom-4 right-6" />
        </div>

      </div>
    </div>
  );
};

export default Inventory;
