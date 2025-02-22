import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Testimonial.css'

const testimonials = [
  {
    name: "Arjan S. Patil",
    review:
      "I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn’t be happier with our new place!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya K. Sharma",
    review:
      "Amazing experience! The team made everything so smooth and easy. I found my dream home faster than I imagined.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Rahul V. Iyer",
    review:
      "Exceptional service! The professionalism and expertise of this team made my buying process stress-free.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Sonia D. Patel",
    review:
      "The best experience ever! Highly recommended for anyone looking to buy or sell their home quickly and efficiently.",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-10 items-center justify-center px-4 sm:px-12 md:px-20 py-12">
      {/* Section Title */}
      <div className="text-center sm:text-left max-w-lg w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-snug">
          <span className="border-l-4 border-red-500 pl-3">Hear From Our</span> <br />
          Community
        </h2>
        <p className="text-gray-500 mt-4 text-base">
          What our clients say about their experiences.
        </p>
      </div>

      {/* Testimonial Carousel */}
      <div className="w-full sm:max-w-3xl mt-6 sm:mt-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="bg-white shadow-lg rounded-xl p-6 sm:p-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="p-4 flex flex-col items-center text-center">
              <FaQuoteLeft className="text-red-500 text-4xl" />
              <p className="text-gray-800 mt-4 text-lg sm:text-xl font-medium leading-relaxed">
                "{testimonial.review}"
              </p>
              <div className="flex flex-col items-center mt-6 border-t pt-4 w-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-red-400"
                />
                <p className="font-semibold text-lg mt-3">{testimonial.name}</p>
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
