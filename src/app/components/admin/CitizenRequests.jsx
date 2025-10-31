'use client';
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';

const dummyRequests = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    type: 'Birth Certificate',
    date: '2025-10-01',
    status: 'Pending',
  },
  {
    id: 2,
    name: 'Sita Devi',
    type: 'Death Certificate',
    date: '2025-10-02',
    status: 'Pending',
  },
  {
    id: 3,
    name: 'Anil Sharma',
    type: 'Residence Certificate',
    date: '2025-10-03',
    status: 'Approved',
  },
];

export default function CitizenRequests() {
  const [requests, setRequests] = useState(dummyRequests);

  const handleAction = (id, action) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: action } : req))
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <AdminNavbar username="Admin User" />
        <div className="p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold text-green-700 mb-4">
            Citizen Requests
          </h1>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Request Type</th>
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <tr
                    key={req.id}
                    className=" text-black border-b hover:bg-gray-50"
                  >
                    <td className="py-3 px-6">{req.name}</td>
                    <td className="py-3 px-6">{req.type}</td>
                    <td className="py-3 px-6">{req.date}</td>
                    <td
                      className={`py-3 px-6 font-semibold ${
                        req.status === 'Approved'
                          ? 'text-green-600'
                          : req.status === 'Rejected'
                          ? 'text-red-600'
                          : 'text-yellow-600'
                      }`}
                    >
                      {req.status}
                    </td>
                    <td className="py-3 px-6 flex gap-2">
                      {req.status === 'Pending' && (
                        <>
                          <button
                            onClick={() => handleAction(req.id, 'Approved')}
                            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleAction(req.id, 'Rejected')}
                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
