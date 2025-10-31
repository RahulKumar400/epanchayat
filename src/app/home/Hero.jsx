'use client'
import React from 'react';
import { FaLeaf, FaWifi } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import heroimage from '../../../public/heroimage.png';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white min-h-[95vh]  flex items-center overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 rounded-full opacity-20 blur-3xl animate-ping"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight">
            Welcome to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 drop-shadow-lg">
              e-Panchayat Digital Library Services
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium max-w-xl mx-auto md:mx-0 text-gray-100 leading-relaxed">
            Digital Services for e-Panchayat <br />
            <span className="font-semibold text-yellow-200">
              ई-पंचायत के लिए डिजिटल सेवाएँ
            </span>
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-6 py-3 rounded-2xl shadow-lg shadow-yellow-300/40 flex items-center gap-2 transition-all"
            >
              <FaLeaf className="text-green-800" /> Explore Services
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white hover:bg-gray-200 text-green-800 font-bold px-6 py-3 rounded-2xl shadow-lg shadow-white/30 flex items-center gap-2 transition-all"
            >
              <FaWifi className="text-green-600" /> Connect Now
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side Illustration */}
        <motion.div
          className="flex-1 flex justify-center"
          style={{ perspective: 1000 }}
          whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <Image
            src={heroimage}
            alt="Village Panchayat"
            className="w-[280px] h-[200px] md:w-[450px] md:h-[300px] lg:w-[800px] lg:h-[350px] rounded-2xl  border-4 border-white/20 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
