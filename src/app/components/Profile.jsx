"use client";

import { FaUserCircle, FaUserShield, FaEnvelope, FaPhone, FaHome, FaCalendarAlt } from "react-icons/fa";

export default function ProfileCard({ profile }) {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-200 hover:shadow-3xl transition-all transform hover:scale-105">
      {/* Header / Avatar */}
      <div className="bg-gradient-to-r from-green-500 to-green-700 h-36 relative">
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-32 rounded-full border-6 border-white bg-gray-100 flex items-center justify-center shadow-lg">
            {profile.role === "Admin" ? (
              <FaUserShield className="text-green-600 text-6xl" />
            ) : (
              <FaUserCircle className="text-green-600 text-6xl" />
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 pb-8 px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">{profile.name}</h2>
        <p
          className={`mt-2 inline-block text-sm font-medium px-4 py-1 rounded-full ${
            profile.role === "Admin"
              ? "bg-green-100 text-green-700"
              : "bg-green-50 text-green-600"
          }`}
        >
          {profile.role}
        </p>

        {/* Info */}
        <div className="mt-8 space-y-4 text-gray-700 text-sm text-left">
          <p className="flex items-center gap-3 border-b border-gray-200 pb-2">
            <FaEnvelope className="text-green-600" /> <span className="font-semibold w-24">Email:</span>
            <span>{profile.email}</span>
          </p>
          <p className="flex items-center gap-3 border-b border-gray-200 pb-2">
            <FaPhone className="text-green-600" /> <span className="font-semibold w-24">Phone:</span>
            <span>{profile.phone}</span>
          </p>
          <p className="flex items-center gap-3 border-b border-gray-200 pb-2">
            <FaHome className="text-green-600" /> <span className="font-semibold w-24">Ward:</span>
            <span>{profile.ward}</span>
          </p>
          <p className="flex items-center gap-3">
            <FaCalendarAlt className="text-green-600" /> <span className="font-semibold w-24">Joined:</span>
            <span>{profile.joined}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition transform hover:scale-105">
            Edit Profile
          </button>
          {profile.role === "Admin" && (
            <button className="px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition transform hover:scale-105">
              Manage Users
            </button>
          )}
          {profile.role === "User" && (
            <button className="px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition transform hover:scale-105">
              View Complaints
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
