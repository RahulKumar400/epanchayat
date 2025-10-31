// "use client";
// import { FaUserCircle } from "react-icons/fa";

// export default function Navbar() {
//   return (
//     <div className="w-full bg-white shadow p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">Admin Dashboard</h1>
//       <div className="flex items-center gap-4">
//         <span className="text-gray-600">Welcome, Admin</span>
//         <FaUserCircle className="text-3xl text-green-700" />
//       </div>
//     </div>
//   );
// }
'use client';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function AdminNavbar() {
  return (
    <div className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl text-green-600 font-bold">Overview</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome, Admin</span>
        <Link href = "adminprofile">
        <FaUserCircle className="text-3xl text-green-700" />
        </Link>
      </div>
    </div>
  );
}
