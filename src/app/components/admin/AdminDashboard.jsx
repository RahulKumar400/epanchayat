'use client';
import { useState, useRef, useEffect } from 'react';
import { FaUsers, FaBook, FaBullhorn, FaUpload } from 'react-icons/fa';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

import 'react-calendar/dist/Calendar.css';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';

const villagersData = [
  { name: 'Male', value: 700 },
  { name: 'Female', value: 550 },
];

const resourcesData = [
  { name: 'Books', value: 500 },
  { name: 'Documents', value: 300 },
  { name: 'Audio/Video', value: 450 },
];

const COLORS = ['#22c55e', '#10b981', '#06b6d4'];

const announcementsData = [
  { title: 'Meeting on 5th Oct', date: '2025-10-05' },
  { title: 'New Scheme Launch', date: '2025-10-10' },
  { title: 'Village Cleanup', date: '2025-10-12' },
];

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [bookName, setBookName] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Book Uploaded:', { bookName, category, file });
    alert('Book uploaded successfully!');
    setShowForm(false);
    setBookName('');
    setCategory('');
    setFile(null);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <AdminNavbar username="Admin User" />

        {/* Content Area */}
        <main className="p-6 overflow-y-auto">
          {/* Upload Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
            >
              <FaUpload /> Upload Book
            </button>
          </div>

          {/* Upload Form Modal */}
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
                <h2 className="text-lg font-bold text-green-700 mb-4">
                  Upload a Book
                </h2>
                <form
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-4"
                >
                  <label className="text-sm font-semibold text-gray-700">
                    Book Name
                  </label>
                  <input
                    type="text"
                    placeholder="Book Name"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    className="border p-2 rounded"
                  />

                  <label className="text-sm font-semibold text-gray-700">
                    Category
                  </label>
                  <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2 rounded"
                  />

                  <label className="text-sm font-semibold text-gray-700">
                    Upload File
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="border p-2 rounded"
                  />

                  <label className="text-sm font-semibold text-gray-700">
                    Upload PDF
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="border p-2 rounded"
                  />

                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Villagers Card */}
            <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-4 min-h-[280px]">
              <div className="flex items-center gap-4">
                <FaUsers className="text-green-700 text-3xl" />
                <div>
                  <h2 className="text-lg text-green-700 font-bold">
                    Villagers
                  </h2>
                  <p className="text-gray-600">1,250 Registered</p>
                </div>
              </div>
              <div className="w-full h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={villagersData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      paddingAngle={5}
                      label
                    >
                      {villagersData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Resources Card */}
            <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <FaBook className="text-green-700 text-3xl" />
                <div>
                  <h2 className="text-lg text-green-700 font-bold">
                    Resources
                  </h2>
                  <p className="text-gray-600">Total: 1,250 items</p>
                </div>
              </div>
              <div className="w-full h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={resourcesData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      paddingAngle={5}
                      label
                    >
                      {resourcesData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Announcements Card */}
            <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-4 min-h-[250px]">
              <div className="flex items-center gap-4">
                <FaBullhorn className="text-green-700 text-3xl" />
                <div>
                  <h2 className="text-lg text-green-700 font-bold">
                    Announcements
                  </h2>
                  <p className="text-gray-600">Latest updates</p>
                </div>
              </div>
              <div className="mt-2 text-gray-700">
                <ul className="list-disc list-inside text-sm">
                  {announcementsData.map((item, index) => (
                    <li key={index}>
                      {item.title} –{' '}
                      <span className="text-gray-500">{item.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
