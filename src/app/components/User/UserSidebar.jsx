"use client";
import Link from "next/link";
import { FaRegFileAlt, FaBell, FaHandsHelping, FaLightbulb, FaSignOutAlt, FaChild } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";

export default function UserSidebar() {
  return (
    <div className="w-64 bg-green-800 text-white flex flex-col justify-between h-screen sticky top-0">
      {/* Header */}
      <div className="p-4 text-2xl font-bold border-b border-green-600">
        ePanchayat
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-3">
        <Link
          href="/userdashboard"
          className="flex items-center gap-3 p-2 rounded hover:bg-green-700"
        >
          <MdOutlineDashboard /> Dashboard
        </Link>

        <Link
          href="/bookscategory"
          className="flex items-center gap-3 p-2 rounded hover:bg-green-700"
        >
          <FaLightbulb /> Knowledge Hub
        </Link>

        <Link
          href="/myrequests"
          className="flex items-center gap-3 p-2 rounded hover:bg-green-700"
        >
          <FaRegFileAlt /> My Requests
        </Link>

        <Link
          href="/schemes"
          className="flex items-center gap-3 p-2 rounded hover:bg-green-700"
        >
          <FaHandsHelping /> Schemes & Benefits
        </Link>

        <Link
          href="/usernotice"
          className="flex items-center gap-3 p-2 rounded hover:bg-green-700"
        >
          <FaBell /> Notices
        </Link>

         <Link
          href="/aanaganwadi"
          className="flex items-center gap-3 p-2 rounded hover:bg-green-700"
        >
          <FaChild /> Aanaganwadi
        </Link>
      </nav>

      {/* Logout button */}
      <div className="p-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          <FaSignOutAlt /> Logout
        </Link>
      </div>
    </div>
  );
}
