import React from 'react';
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';
import Journey from '../components/Journey';
import Footer from '../components/Footer';
import Team from '../components/Team';
import './About.css'

const About = () => {
  return (
    <div className="w-full">
    
      <div 
        className="w-full h-[40vw] bg-cover bg-center sm:bg-top bg-no-repeat relative flex items-center justify-center"
        style={{ backgroundImage: ` url(${assets.about1})` }}
      >
        <Navbar />
      </div>

      
      <div className="w-full bg-white">
        <Journey />
        <Team />
        <Footer />
      </div>

    </div>
  );
};

export default About;
