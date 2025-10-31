"use client";
import Link from "next/link";
import {
  FaTachometerAlt,
  FaUsers,
  FaGift,
  FaBullhorn,
  FaExclamationCircle,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function AdminSidebar() {
  return (
    <div className="w-64 bg-green-800 text-white flex flex-col justify-between h-screen sticky top-0">
      {/* Header */}
      <div className="p-4 text-2xl font-bold border-b border-green-600 text-center">
        ePanchayat Admin
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-3 overflow-y-auto">
        <SidebarLink href="/admindashboard" icon={<FaTachometerAlt />} text="Dashboard" />
        <SidebarLink href="/citizenrequest" icon={<FaUsers />} text="Citizen Requests" />
        <SidebarLink href="/scheme" icon={<FaGift />} text="Schemes & Benefits" />
        <SidebarLink href="/notice" icon={<FaBullhorn />} text="Manage Notices" />
        <SidebarLink href="/complains" icon={<FaExclamationCircle />} text="View Complaints" />
        <SidebarLink href="/rolemanagement" icon={<FaUserCog />} text="User Management" />
      </nav>

      {/* Logout Button */}
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

/* 🔸 Reusable Link Component */
function SidebarLink({ href, icon, text }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 p-2 rounded hover:bg-green-700 transition"
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </Link>
  );
}
