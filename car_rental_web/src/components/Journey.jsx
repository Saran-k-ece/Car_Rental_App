import React from 'react';
import { assets } from '../assets/assets';

const Journey = () => {
  return (
    <div className="px-6 md:px-20 py-12">
      {/* Our Journey Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
      
        <div>
        
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            <span className="text-red-600">Our</span> Journey
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
          </p>

          
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { number: '200+', text: 'Happy Customers' },
              { number: '10k+', text: 'Properties For Clients' },
              { number: '16+', text: 'Years of Experience' },
            ].map((item, index) => (
              <div key={index} className="border border-gray-300 p-4 rounded-md text-center">
                <p className="text-2xl font-bold text-black">{item.number}</p>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        
        <div>
          <img 
            src={assets.about2}
            alt="Speedometer" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          <span className="text-red-600">Our</span> Values
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {[
            { title: 'Trust', desc: 'Trust is the cornerstone of every successful real estate transaction.' },
            { title: 'Excellence', desc: 'We set the bar high for ourselves. From properties to service, we provide the best.' },
            { title: 'Client-Centric', desc: 'Your dreams and needs are at the center of our universe. We listen, understand.' },
            { title: 'Our Commitment', desc: 'We are dedicated to providing the highest level of service, professionalism.' },
          ].map((item, index) => (
            <div key={index} className="border border-gray-300 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mb-3">
                ⭐
              </div>
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
