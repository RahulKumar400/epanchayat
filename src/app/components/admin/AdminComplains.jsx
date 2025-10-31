'use client';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaExclamationTriangle } from 'react-icons/fa';

export default function ComplaintsPage() {
  const complaints = [
    {
      name: "Mr. Mahipal Singh",
      mobile: "9756658024",
      email: "mahipalsingh@gmail.com",
      subject: "Water Supply Problem",
      description: "There has been irregular water supply in Ravidas Nagar area for the past 3 days. Residents are facing severe difficulties. Kindly resolve this at the earliest.",
      zone: "Ravidas Nagar",
      address: "Ward No. 1, near Ravidas Nagar"
    },
    {
      name: "Mrs. Shayra",
      mobile: "9149355150",
      email: "shayra@gmail.com",
      subject: "Blocked Drainage",
      description: "The drains in Gandhi Nagar Colony are clogged and overflowing, leading to waterlogging and mosquito breeding. Request immediate cleaning of the drainage system.",
      zone: "Brahmapuri",
      address: "Ward No. 19, near Brahmapuri"
    },
    {
      name: "Mr. Imran",
      mobile: "9045869945",
      email: "imran@gmail.com",
      subject: "Streetlight Not Working",
      description: "The streetlight in front of the Government School on Station Road has been non-functional for over a week. It is causing inconvenience and safety issues during nighttime. Please repair it urgently.",
      zone: "Hazrat Nagar",
      address: "Ward No. 11, near Hazrat Nagar"
    },
    {
      name: "Mr. Dinesh Kumar",
      mobile: "9410433043",
      email: "dineshkumar@gmail.com",
      subject: "Garbage Collection Issue",
      description: "In Ward No. 5, near Shahid Nagar, garbage has not been collected for the past 4 days. It is causing foul smell and health hazards to the nearby residents. Kindly arrange immediate garbage pickup.",
      zone: "Shahid Nagar",
      address: "Ward No. 5, near Shahid Nagar"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Complaints List</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {complaints.map((complaint, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 border-l-4 border-red-500 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaExclamationTriangle className="text-red-500" /> {complaint.subject}
            </h2>
            <p className="text-gray-700 mb-2">{complaint.description}</p>
            <div className="mt-4 space-y-1 text-gray-600">
              <p><strong>Name:</strong> {complaint.name}</p>
              <p><strong>Mobile:</strong> <FaPhone className="inline mr-1" /> {complaint.mobile}</p>
              <p><strong>Email:</strong> <FaEnvelope className="inline mr-1" /> {complaint.email}</p>
              <p><strong>Zone:</strong> {complaint.zone}</p>
              <p><strong>Address:</strong> <FaMapMarkerAlt className="inline mr-1" /> {complaint.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
