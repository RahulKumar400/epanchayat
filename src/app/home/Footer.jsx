import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-green-900 to-green-700 text-white pt-24 pb-12 overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-16 w-52 h-52 bg-green-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-400 rounded-full opacity-10 blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* About */}
        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <h3 className="text-xl font-bold mb-4">About ePanchayat</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            Empowering villages through digital governance, education, healthcare, and connectivity solutions.
          </p>
        </div>

        {/* Services */}
        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="text-gray-200 text-sm space-y-2">
            {["Digital Governance","Healthcare","Education","Connectivity"].map(service => (
              <li key={service} className="hover:text-yellow-300 cursor-pointer transition-transform transform hover:scale-105">{service}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-200 text-sm space-y-2">
            {["Home","About","Services","Contact"].map(link => (
              <li key={link} className="hover:text-yellow-300 cursor-pointer transition-transform transform hover:scale-105">{link}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-200 text-sm mb-4">Email: support@epanchayat.in</p>
          <p className="text-gray-200 text-sm mb-4">Phone: +91 12345 67890</p>
          <div className="flex gap-4 mt-2">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <a key={idx} href="#" className="text-white p-3 bg-green-600 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-300 text-sm mt-12 relative z-10">
        © 2025 ePanchayat. All Rights Reserved.
      </div>

      {/* Wave at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0.00,49.98 C150.00,150.00 349.42,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "#166534" }}></path>
        </svg>
      </div>
    </footer>
  );
}
