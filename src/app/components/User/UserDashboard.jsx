"use client";

import UserSidebar from "./UserSidebar";
import UserNavbar from "./UserNavbar";
import { FaBook, FaHandsHelping, FaBell, FaRegFileAlt, FaSeedling } from "react-icons/fa";
import Link from "next/link";

// Sample data for demonstration
const seasonalContentCount = 3; 
const myRequestsCount = 5;      
const schemesCount = 2;         
const noticesCount = 4;         
const favoriteBooksCount = 7;   

export default function UserDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Navbar */}
        <UserNavbar/>

        {/* Dashboard Cards */}
        <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* My Requests */}
          <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 flex items-center gap-5 transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1">
            <FaRegFileAlt className="text-green-600 text-4xl" />
            <div>
              <Link href = "myrequests">
              <h2 className="text-lg font-bold text-green-800 mb-1">My Requests</h2>
              <p className="text-gray-600 text-sm">Track the status of all your service requests.</p>
              <span className="text-sm font-semibold text-green-600 mt-1">{myRequestsCount} Requests</span>
              </Link>
            </div>
          </div>

          {/* Schemes & Benefits */}
          <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 flex items-center gap-5 transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1">
            <FaHandsHelping className="text-green-600 text-4xl" />
            <div>
              <Link href = "schemes">
              <h2 className="text-lg font-bold text-green-800 mb-1">Schemes & Benefits</h2>
              <p className="text-gray-600 text-sm">Check eligible government schemes for you.</p>
              <span className="text-sm font-semibold text-green-600 mt-1">{schemesCount} Schemes Available</span>
              </Link>
            </div>
          </div>

          {/* Notices */}
          <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 flex items-center gap-5 transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1">
            <FaBell className="text-green-600 text-4xl" />
            <div>
              <Link href = "usernotice">
              <h2 className="text-lg font-bold text-green-800 mb-1">Notices</h2>
              <p className="text-gray-600 text-sm">Stay updated with latest Panchayat announcements.</p>
              <span className="text-sm font-semibold text-green-600 mt-1">{noticesCount} Notices</span>
              </Link>
            </div>
          </div>

          {/* Seasonal Agriculture */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 shadow-md hover:shadow-xl rounded-xl p-6 flex flex-col justify-between gap-3 transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <FaSeedling className="text-green-600 text-4xl" />
              <h2 className="text-lg font-bold text-green-800">Seasonal Agriculture</h2>
            </div>
            <p className="text-gray-600 text-sm mt-2">Explore content for the current farming season.</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-sm font-semibold text-green-600">{seasonalContentCount} Resources</span>
              <Link href="/season" className="text-green-800 font-semibold hover:underline">Explore →</Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 flex flex-col gap-3 transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <FaRegFileAlt className="text-green-600 text-4xl" />
              <h2 className="text-lg font-bold text-green-800">Quick Actions</h2>
            </div>
            <p className="text-gray-600 text-sm mt-2">Raise a new request or apply for schemes quickly.</p>
            <span className="text-sm font-semibold text-green-600 mt-1">Go to Actions →</span>
          </div>
        </main>

        {/* Recent Activity */}
        <section className="p-6 mt-6 bg-white shadow-md rounded-xl">
          <h2 className="text-xl font-bold text-green-800 mb-4">Recent Activity</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Submitted request for water supply issue (2 days ago)</li>
            <li>Viewed seasonal agriculture content: Rice Farming Techniques</li>
            <li>Marked "Organic Farming Basics" as favorite</li>
            <li>Applied for Kisan Yojana scheme</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
