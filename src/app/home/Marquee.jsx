'use client';
import React from 'react';

export default function Marquee() {
  const marqueeTexts = [
    'Welcome to E-Panchayat Portal',
    'Register your village services online',
    'Access government schemes easily',
    'Participate in local governance',
    'Digital Panchayat for a better tomorrow',
  ];

  return (
    <div className="w-full h-[70px] overflow-hidden relative bg-gray-800">
      <div className="absolute whitespace-nowrap animate-marquee text-white text-2xl py-8 flex space-x-16">
        {marqueeTexts.map((text, index) => (
          <span key={index} className="flex items-start space-x-1">
            <span className="bg-red-500 text-white font-bold px-2 py-[2px] rounded-full text-xs">
              New
            </span>
            <span>{text}</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
