"use client";

import ProfileCard from "../Profile.jsx";

export default function UserProfilePage() {
  const userProfile = {
    role: "User",
    name: "Suman Sharma",
    email: "suman123@gmail.com",
    phone: "9123456780",
    ward: "Ward No. 3",
    joined: "2025-01-15",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <ProfileCard profile={userProfile} />
    </div>
  );
}
