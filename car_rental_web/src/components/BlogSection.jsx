import React from "react";
import blg1 from "../assets/blg1.png";
import blg2 from "../assets/blg2.png";
import blg3 from "../assets/blg3.png";

const blogPosts = [
  {
    title: "How the Maruti Invicto is a lesson in brand building...",
    name: "John Doe",
    date: "Feb 22, 2025",
    image: blg1,
  },
  {
    title: "The Future of Car Buying: Trends to Watch",
    name: "Jane Smith",
    date: "Feb 20, 2025",
    image: blg2,
  },
  {
    title: "Why SUVs Dominate the Market in 2025",
    name: "Mark Wilson",
    date: "Feb 18, 2025",
    image: blg3,
  },
];

const BlogSection = () => {
  return (
    <div className="px-6 sm:px-12 md:px-24 py-16 text-center">
      {/* Header */}
      <h2 className="text-4xl font-bold text-gray-900">
        Latest News & Articles from the Blog
      </h2>
      <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
        Frequently asked questions ordered by popularity. Remember that if the
        visitor has not committed to the call to action, they may still have
        questions (doubts) that can be answered.
      </p>

      {/* Blog Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group"
          >
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay Card */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white w-4/5 shadow-md rounded-md p-3 border  border-gray-300">
              <div className="flex justify-between text-gray-500 text-xs">
                <span>{post.name}</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-gray-800 font-semibold mt-1 text-xs">
                {post.title}
              </h3>
              <a
                href="#"
                className="text-black font-semibold mt-2 block text-xs hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
