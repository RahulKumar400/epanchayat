"use client";

import ProfileCard from "../Profile.jsx";

export default function AdminProfilePage() {
  const adminProfile = {
    role: "Admin",
    name: "Ravi Kumar",
    email: "admin@epanchayat.in",
    phone: "9876543210",
    ward: "Ward No. 5",
    joined: "2024-12-10",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
        Admin Profile
      </h1>
      <ProfileCard profile={adminProfile} />
    </div>
  );
}
