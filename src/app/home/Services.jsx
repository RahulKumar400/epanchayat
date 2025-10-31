'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Digital Governance',
    description:
      'Village administration, online certificates, and citizen services.',
    img: '/Digital-Governance.png',
    link: 'https://negd.gov.in/',
  },
  {
    title: 'Healthcare Services',
    description: 'Access health records, telemedicine, and wellness programs.',
    img: '/Healthcare-Services.png',
    link: 'https://nhm.gov.in/',
  },
  {
    title: 'Education & Learning',
    description: 'E-learning resources, school info, and skill development.',
    img: '/Education & Learning.png',
    link: 'https://services.india.gov.in/service/listing?cat_id=1&ln=en',
  },
  {
    title: 'Connectivity & IT',
    description: 'Internet access, WiFi spots, and tech support for villages.',
    img: '/Connectivity & IT.png',
    link: 'https://www.nic.gov.in/',
  },
  {
    title: 'Ministry of Panchayati Raj (MoPR) Portals',
    description: 'Official portal for MoPR programs and schemes.',
    img: '/Ministry of Panchayati Raj.png',
    link: 'https://www.panchayat.gov.in/',
  },
  {
    title: 'India Panchayat Knowledge Portal (IPKP)',
    description:
      'Resources, best practices, and knowledge sharing for Panchayats.',
    img: '/e-panchayat-rajasthan.jpg',
    link: 'https://www.indiapanchayat.gov.in/',
  },
  {
    title: 'eGramSwaraj',
    description: 'Online platform for Panchayat planning and monitoring.',
    img: '/gram_panchayat_app.webp',
    link: 'https://egramswaraj.gov.in/',
  },
  {
    title: 'Panchayat Advancement Index (PAI)',
    description:
      'Performance and progress tracking of Panchayats across India.',
    img: '/OIP.jpg',
    link: 'https://www.panchayat.gov.in/pai',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-green-50 relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-green-900 mb-4">
          Quick Links
        </h2>
        <p className="text-green-800 mb-12 max-w-2xl mx-auto">
          Bringing digital solutions to villages, empowering citizens, and
          enhancing community life.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 100 }}
              onClick={() => {
                if (service.link) {
                  window.open(service.link, '_blank');
                }
              }}
            >
              <div className="w-full mb-4 h-48 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={500}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                {service.title}
              </h3>
              <p className="text-green-700 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
