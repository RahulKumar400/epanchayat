'use client';
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';

const dummySchemes = [
  {
    id: 1,
    title: 'Health Insurance',
    description: 'Provides health coverage for villagers',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Education Grant',
    description: 'Scholarship for school students',
    status: 'Inactive',
  },
  {
    id: 3,
    title: 'Water Supply Scheme',
    description: 'Ensures clean water supply',
    status: 'Active',
  },
];

export default function SchemesBenefits() {
  const [schemes, setSchemes] = useState(dummySchemes);

  const toggleStatus = (id) => {
    setSchemes((prev) =>
      prev.map((scheme) =>
        scheme.id === id
          ? {
              ...scheme,
              status: scheme.status === 'Active' ? 'Inactive' : 'Active',
            }
          : scheme
      )
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
            Schemes & Benefits
          </h1>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Title</th>
                  <th className="py-3 px-6 text-left">Description</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {schemes.map((scheme) => (
                  <tr
                    key={scheme.id}
                    className="border-b text-black hover:bg-gray-50"
                  >
                    <td className="py-3 px-6">{scheme.title}</td>
                    <td className="py-3 px-6">{scheme.description}</td>
                    <td
                      className={`py-3 px-6 font-semibold ${
                        scheme.status === 'Active'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {scheme.status}
                    </td>
                    <td className="py-3 px-6 flex gap-2">
                      <button
                        onClick={() => toggleStatus(scheme.id)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      >
                        {scheme.status === 'Active' ? 'Deactivate' : 'Activate'}
                      </button>
                      <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Edit
                      </button>
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
