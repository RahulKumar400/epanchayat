'use client';
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';
import AdminLayout from './AdminLayout';

const dummyNotices = [
  {
    id: '686a95ca8752a11529db46b1',
    title: 'Property Tax Payment Reminder',
    type: 'Notice Board',
  },
  {
    id: '686a96508752a11529db46cf',
    title: 'Water Supply Interruption',
    type: 'Notice Board',
  },
  {
    id: '686a973a8752a11529db46db',
    title: 'Last Date Announced for Property Tax Payment',
    type: 'Press Release',
  },
];

const dummyMarquees = [
  {
    id: '686a98ba8752a11529db4708',
    title: 'Last date for Property Tax payment is 31st July 2025.',
  },
  {
    id: '686a98e18752a11529db470e',
    title:
      'Water supply will be interrupted in Ward 5, 6, 7 on 7th July from 8 AM to 6 PM.',
  },
];

export default function ManageNotices() {
  const [notices, setNotices] = useState(dummyNotices);
  const [marquees, setMarquees] = useState(dummyMarquees);

  const [noticeText, setNoticeText] = useState('');
  const [noticeCategory, setNoticeCategory] = useState('Notice Board');

  const [marqueeText, setMarqueeText] = useState('');

  const handleAddNotice = () => {
    if (!noticeText) return;
    setNotices([
      ...notices,
      { id: Date.now().toString(), title: noticeText, type: noticeCategory },
    ]);
    setNoticeText('');
  };

  const handleAddMarquee = () => {
    if (!marqueeText) return;
    setMarquees([
      ...marquees,
      { id: Date.now().toString(), title: marqueeText },
    ]);
    setMarqueeText('');
  };

  return (
    <AdminLayout>
        <div className=" bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold text-green-700 mb-6">
            Manage Notices & Marquee
          </h1>

          {/* Add Notice Form */}
          <div className="bg-white p-4 rounded-xl shadow mb-6">
            <h2 className="text-lg font-semibold text-green-700 mb-2">
              Add Notice
            </h2>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <input
                type="text"
                placeholder="Enter notice text"
                value={noticeText}
                onChange={(e) => setNoticeText(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <select
                value={noticeCategory}
                onChange={(e) => setNoticeCategory(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              >
                <option>Notice Board</option>
                <option>Press Release</option>
              </select>
              <button
                onClick={handleAddNotice}
                className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Add Marquee Form */}
          <div className="bg-white p-4 rounded-xl shadow mb-6">
            <h2 className="text-lg font-semibold text-green-700 mb-2">
              Add Marquee
            </h2>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <input
                type="text"
                placeholder="Enter Marquee text"
                value={marqueeText}
                onChange={(e) => setMarqueeText(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <button
                onClick={handleAddMarquee}
                className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              >
                Save
              </button>
            </div>
          </div>

          {/* Manage Notices Table */}
          <div className="bg-white p-4 rounded-xl shadow mb-6 overflow-x-auto">
            <h2 className="text-lg font-semibold text-green-700 mb-2">
              Manage Notices
            </h2>
            <table className="min-w-full border">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2 px-4 text-left">ID</th>
                  <th className="py-2 px-4 text-left">Title</th>
                  <th className="py-2 px-4 text-left">Type</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice) => (
                  <tr key={notice.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{notice.id}</td>
                    <td className="py-2 px-4">{notice.title}</td>
                    <td className="py-2 px-4">{notice.type}</td>
                    <td className="py-2 px-4 flex gap-2">
                      <button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Edit
                      </button>
                      <button className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Manage Marquee Table */}
          <div className="bg-white p-4 rounded-xl shadow overflow-x-auto">
            <h2 className="text-lg font-semibold text-green-700 mb-2">
              Manage Marquee
            </h2>
            <table className="min-w-full border">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2 px-4 text-left">ID</th>
                  <th className="py-2 px-4 text-left">Title</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {marquees.map((marquee) => (
                  <tr key={marquee.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{marquee.id}</td>
                    <td className="py-2 px-4">{marquee.title}</td>
                    <td className="py-2 px-4">
                      <button className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
  );
}
