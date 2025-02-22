import React from "react";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ExploreCars from "../components/ExploreCars";
import FeatureList from "../components/FeatureList";
import Inventory from "../components/Inventory";
import Testimonials from "../components/Testimonials";
import Touch from "../components/Touch";
import FAQSection from "../components/FAQSection";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center sm:bg-top bg-no-repeat relative"
      style={{ backgroundImage: `url(${assets.bgImg1})` }}
    >
      <div className="hidden sm:block absolute sm:mt-[42vw] px-20">
        <h2 className="text-white font-medium tracking-extra">Welcome</h2>
      </div>
      
       <Navbar />
      <Hero />
      <ExploreCars />
      <FeatureList />
      <Inventory />
      <Testimonials />
      <Touch />
      <FAQSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Home;
