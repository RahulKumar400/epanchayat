// "use client";

// import { useState } from "react";
// import UserNavbar from "./UserNavbar";
// import UserSidebar from "./UserSidebar";
// const categories = ["Water Supply", "Agriculture", "Adult Literacy", "Infrastructure"];

// export default function MyRequests() {
//   const [requests, setRequests] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     category: categories[0],
//     description: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newRequest = {
//       id: requests.length + 1,
//       ...formData,
//       status: "Pending",
//       date: new Date().toISOString().split("T")[0],
//     };
//     setRequests([newRequest, ...requests]);
//     setFormData({ title: "", category: categories[0], description: "" });
//     setShowForm(false);
//   };

//   return (
//      <div className="flex h-screen bg-gray-50">
//           {/* Sidebar */}
//           <UserSidebar />

//           {/* Main Content */}
//           <div className="flex-1 flex flex-col overflow-auto">
//             {/* Navbar */}
//             <UserNavbar />

//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-green-800">My Requests</h2>
//         <button
//           onClick={() => setShowForm(true)}
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           New Request
//         </button>
//       </div>

//       {/* New Request Form Modal */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative">
//             <button
//               className="absolute top-2 right-2 text-red-600 font-bold text-xl"
//               onClick={() => setShowForm(false)}
//             >
//               ×
//             </button>
//             <h3 className="text-xl font-semibold mb-4">Submit a New Request</h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block font-medium mb-1">Title</label>
//                 <input
//                   type="text"
//                   value={formData.title}
//                   onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                   className="w-full border border-gray-300 rounded px-3 py-2"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium mb-1">Category</label>
//                 <select
//                   value={formData.category}
//                   onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                   className="w-full border border-gray-300 rounded px-3 py-2"
//                 >
//                   {categories.map((cat) => (
//                     <option key={cat} value={cat}>
//                       {cat}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block font-medium mb-1">Description</label>
//                 <textarea
//                   value={formData.description}
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                   className="w-full border border-gray-300 rounded px-3 py-2"
//                   rows={4}
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//               >
//                 Submit Request
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Requests Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow rounded-lg">
//           <thead>
//             <tr className="bg-green-600 text-white">
//               <th className="py-2 px-4">ID</th>
//               <th className="py-2 px-4">Title</th>
//               <th className="py-2 px-4">Category</th>
//               <th className="py-2 px-4">Status</th>
//               <th className="py-2 px-4">Date Submitted</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.length === 0 ? (
//               <tr>
//                 <td colSpan={5} className="text-center py-4 text-gray-500">
//                   No requests submitted yet.
//                 </td>
//               </tr>
//             ) : (
//               requests.map((req) => (
//                 <tr key={req.id} className="border-b">
//                   <td className="py-2 px-4">{req.id}</td>
//                   <td className="py-2 px-4">{req.title}</td>
//                   <td className="py-2 px-4">{req.category}</td>
//                   <td
//                     className={`py-2 px-4 font-medium ${
//                       req.status === "Pending"
//                         ? "text-yellow-600"
//                         : req.status === "Resolved"
//                         ? "text-green-600"
//                         : "text-blue-600"
//                     }`}
//                   >
//                     {req.status}
//                   </td>
//                   <td className="py-2 px-4">{req.date}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import UserNavbar from "./UserNavbar";
import UserSidebar from "./UserSidebar";
import {
  createRequest,
  getUserRequests,
} from "../../apiServices/user/requests";
import { toast } from "react-toastify";

const categories = [
  "Water Supply",
  "Agriculture",
  "Adult Literacy",
  "Infrastructure",
];

export default function MyRequests() {
  const [requests, setRequests] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: categories[0],
    description: "",
  });

  // ✅ Fetch user requests on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserRequests();
        setRequests(data || []);
        console.log(data[0]);
      } catch (err) {
        console.error(err);
        toast.error(err.message || "Failed to load requests");
      }
    };
    fetchData();
  }, []);

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createRequest(formData);
      console.log(data);
      toast.success(data.message || "Request submitted!");
      setRequests([data.request, ...requests]);
      setFormData({ title: "", category: categories[0], description: "" });
      setShowForm(false);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to submit request");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <UserSidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        <UserNavbar />
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-green-800">My Requests</h2>
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              New Request
            </button>
          </div>

          {/* Modal Form */}
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative">
                <button
                  className="absolute top-2 right-2 text-red-600 font-bold text-xl"
                  onClick={() => setShowForm(false)}
                >
                  ×
                </button>
                <h3 className="text-xl font-semibold mb-4">
                  Submit a New Request
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-medium mb-1">Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium mb-1">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      rows={4}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow rounded-lg">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="py-2 px-4">ID</th>
                  <th className="py-2 px-4">Title</th>
                  <th className="py-2 px-4">Category</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Date Submitted</th>
                </tr>
              </thead>
              <tbody>
                {requests.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-gray-500">
                      No requests submitted yet.
                    </td>
                  </tr>
                ) : Array.isArray(requests) && requests.length > 0 ? (
                  requests.map(
                    (req, i) =>
                      req && (
                        <tr key={req._id || i} className="border-b">
                          <td className="py-2 px-4">{i + 1}</td>
                          <td className="py-2 px-4">{req.title}</td>
                          <td className="py-2 px-4">{req.category}</td>
                          <td
                            className={`py-2 px-4 font-medium ${
                              req.status === "Pending"
                                ? "text-yellow-600"
                                : req.status === "Resolved"
                                ? "text-green-600"
                                : "text-blue-600"
                            }`}
                          >
                            {req.status}
                          </td>
                          <td className="py-2 px-4">
                            {new Date(req.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      )
                  )
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-gray-500">
                      No requests submitted yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
