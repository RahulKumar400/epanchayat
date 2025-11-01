// "use client";

// import { useState, useEffect } from "react";
// import { FaBell } from "react-icons/fa";
// import UserNavbar from "./UserNavbar";
// import UserSidebar from "./UserSidebar";

// export default function NoticePage() {
//   const [notices, setNotices] = useState([]);

//   useEffect(() => {
//     // Dummy 6 notices
//     const dummyNotices = [
//       {
//         id: 1,
//         title: "Water Supply Notice",
//         description:
//           "Water supply will remain disrupted in Ward No. 5 from 10 AM - 2 PM on 5th Oct.",
//         date: "2025-10-04",
//         type: "Important",
//       },
//       {
//         id: 2,
//         title: "Garbage Collection Update",
//         description:
//           "Garbage collection will be delayed tomorrow due to vehicle maintenance.",
//         date: "2025-10-03",
//         type: "General",
//       },
//       {
//         id: 3,
//         title: "Panchayat Meeting",
//         description:
//           "General meeting will be held on 7th Oct at Panchayat Bhawan, all citizens are requested to attend.",
//         date: "2025-10-02",
//         type: "Meeting",
//       },
//       {
//         id: 4,
//         title: "Electricity Maintenance",
//         description:
//           "Electricity will be cut off in Ward No. 8 from 11 AM to 1 PM on 6th Oct due to maintenance.",
//         date: "2025-10-05",
//         type: "Important",
//       },
//       {
//         id: 5,
//         title: "Health Camp",
//         description:
//           "Free health check-up camp organized at Community Hall on 8th Oct, 10 AM onwards.",
//         date: "2025-10-06",
//         type: "General",
//       },
//       {
//         id: 6,
//         title: "Cultural Program",
//         description:
//           "Annual cultural program will be held at Panchayat Ground on 10th Oct. All are invited.",
//         date: "2025-10-07",
//         type: "Event",
//       },
//     ];
//     setNotices(dummyNotices);
//   }, []);

//   return (
//     <div className="flex h-screen bg-gray-50">
//           {/* Sidebar */}
//           <UserSidebar />
    
//           {/* Main Content */}
//           <div className="flex-1 flex flex-col overflow-auto">
//             {/* Navbar */}
//             <UserNavbar />

//     <div className="p-6 bg-green-50 min-h-screen">
//       {/* Header */}
//       <div className="flex items-center gap-3 mb-6">
//         <FaBell className="text-green-600 text-2xl" />
//         <h1 className="text-2xl font-bold text-green-800">Notices & Announcements</h1>
//       </div>

//       {/* Notice List */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {notices.map((notice) => (
//           <div
//             key={notice.id}
//             className="bg-white rounded-2xl shadow hover:shadow-lg p-5 border-l-4 transition-all duration-300
//               border-green-500"
//           >
//             <div className="flex justify-between items-center mb-2">
//               <span
//                 className={`text-xs font-semibold px-2 py-1 rounded-full ${
//                   notice.type === "Important"
//                     ? "bg-red-100 text-red-600"
//                     : notice.type === "Meeting"
//                     ? "bg-green-100 text-green-700"
//                     : notice.type === "Event"
//                     ? "bg-yellow-100 text-yellow-600"
//                     : "bg-gray-100 text-gray-600"
//                 }`}
//               >
//                 {notice.type}
//               </span>
//               <span className="text-sm text-gray-400">{notice.date}</span>
//             </div>

//             <h2 className="text-lg font-semibold text-green-800 mb-2">
//               {notice.title}
//             </h2>
//             <p className="text-gray-600 text-sm">{notice.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import { getAllNotices } from "../../apiServices/user/notices"; 
import { showToast } from "../ToastProvider"; 
import UserLayout from "./UserLayout";

export default function NoticePage() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await getAllNotices();
        // ✅ depending on your backend structure
        setNotices(data.notices || data); 
      } catch (error) {
        console.error("Error fetching notices:", error);
        showToast?.("error", error.message || "Failed to fetch notices");
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  return (
    <UserLayout>
      <div className=" bg-green-50 min-h-screen">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <FaBell className="text-green-600 text-2xl" />
            <h1 className="text-2xl font-bold text-green-800">
              Notices & Announcements
            </h1>
          </div>

          {/* Loading state */}
          {loading ? (
            <p className="text-gray-500">Loading notices...</p>
          ) : notices.length === 0 ? (
            <p className="text-gray-500">No notices available.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notices.map((notice) => (
                <div
                  key={notice._id || notice.id}
                  className="bg-white rounded-2xl shadow hover:shadow-lg p-5 border-l-4 transition-all duration-300 border-green-500"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        notice.type === "Important"
                          ? "bg-red-100 text-red-600"
                          : notice.type === "Meeting"
                          ? "bg-green-100 text-green-700"
                          : notice.type === "Event"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {notice.type || "General"}
                    </span>
                    <span className="text-sm text-gray-400">
                      {notice.date?.slice(0, 10) || "N/A"}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-green-800 mb-2">
                    {notice.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {notice.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </UserLayout>
  );
}
