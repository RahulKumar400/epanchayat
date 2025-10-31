"use client";
import { FaHandHoldingHeart, FaSeedling, FaWater, FaSchool, FaFemale, FaTools } from "react-icons/fa";

export default function SchemesSection() {
  const schemes = [
    {
      icon: <FaSeedling className="text-green-700 text-4xl mb-3" />,
      title: "Pradhan Mantri Krishi Sinchayee Yojana",
      desc: "Aims to provide water for every farm and promote water conservation for better irrigation.",
    },
    {
      icon: <FaWater className="text-blue-700 text-4xl mb-3" />,
      title: "Swachh Bharat Mission (Rural)",
      desc: "An initiative to improve sanitation, cleanliness, and toilet construction in rural areas.",
    },
    {
      icon: <FaSchool className="text-yellow-600 text-4xl mb-3" />,
      title: "Sarva Shiksha Abhiyan",
      desc: "A national program to provide quality education for every child in the village.",
    },
    {
      icon: <FaFemale className="text-pink-600 text-4xl mb-3" />,
      title: "Women Empowerment Scheme",
      desc: "Focused on empowering village women through skill development and employment opportunities.",
    },
    {
      icon: <FaHandHoldingHeart className="text-red-600 text-4xl mb-3" />,
      title: "Village Development Assistance Scheme",
      desc: "Supports the development of village infrastructure, healthcare, and education facilities.",
    },
    {
      icon: <FaTools className="text-orange-600 text-4xl mb-3" />,
      title: "MNREGA Scheme",
      desc: "Provides employment opportunities to rural families and promotes local development work.",
    },
  ];

  return (
    <section className="bg-green-50 py-16 px-6 md:px-16" id="schemes">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800 mb-3 border-l-4 border-green-600 inline-block pl-3">
          🌿 Government Schemes
        </h2>
        <p className="text-gray-600 text-lg mt-2">
          Major government schemes and welfare programs running in your village panchayat.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {schemes.map((scheme, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition transform duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {scheme.icon}
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {scheme.title}
              </h3>
              <p className="text-gray-600">{scheme.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
