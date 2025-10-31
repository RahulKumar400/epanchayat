"use client";
import Link from "next/link";

export default function UserNavbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-800">Welcome, Mr.User</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">User Name</span>
        <Link href = "userprofile">
        <img
          src="/profile1.jpg"
          alt="profile"
          className="w-10 h-10 rounded-full border"
        />
        </Link>
      </div>
    </header>
  );
}
