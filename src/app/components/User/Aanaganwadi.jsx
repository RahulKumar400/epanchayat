"use client";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import UserLayout from "./UserLayout";

// Service data
const aanganwadiServices = [
  {
    id: 2,
    title: "Early Childhood Education",
    description: "Learning programs for children aged 3-6 years.",
    image: "/education.png",
    // link: "#",
  },
  {
    id: 3,
    title: "Health Checkup",
    description: "Regular health checkups and vaccination for children.",
    image: "/helth.png",
    // link: "#",
  },
];

export default function AanganwadiSection() {
  return (
   <UserLayout>
      <h2 className="text-2xl font-bold text-green-800 mb-6">Aanganwadi Seva</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {aanganwadiServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-green-700">{service.title}</h3>
                <FaInfoCircle
                  className="text-green-500 cursor-pointer"
                  title={service.description}
                />
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {/* <a
                href={service.link}
                className="text-green-700 font-medium hover:underline"
              >
                Learn More
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </UserLayout>
  );
}
