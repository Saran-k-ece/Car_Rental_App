import React from "react";
import { assets } from "../assets/assets";

const teamMembers = [
  {
    name: "Max Mitchell",
    role: "Founder",
    image: assets.team1, 
  },
  {
    name: "Sarah Johnson",
    role: "Chief Real Estate Officer",
    image: assets.team2,
  },
  {
    name: "David Brown",
    role: "Head of Property Management",
    image: assets.team3,
  },
  {
    name: "Michael Turner",
    role: "Legal Counsel",
    image: assets.team4,
  },
];

const Team = () => {
  return (
    <div className="w-full py-16 px-6 sm:px-10 md:px-16 lg:px-20">
      
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <span className="w-1 h-6 bg-red-600"></span> Meet Our Team
      </h2>
      <p className="text-gray-600 mt-2 max-w-3xl">
        At Homyfy, our success is driven by the dedication and expertise of our
        team. Get to know the people behind our mission to make your real
        estate dreams a reality.
      </p>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
