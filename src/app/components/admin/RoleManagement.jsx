'use client';
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';

const dummyUsers = [
  { id: '1', name: 'Ayush Kumar', email: 'ayush@example.com', role: 'Admin' },
  {
    id: '2',
    name: 'Ramesh Singh',
    email: 'ramesh@example.com',
    role: 'Citizen',
  },
  { id: '3', name: 'Sita Devi', email: 'sita@example.com', role: 'Citizen' },
  {
    id: '4',
    name: 'Mohit Sharma',
    email: 'mohit@example.com',
    role: 'Citizen',
  },
];

export default function UserManagement() {
  const [users, setUsers] = useState(dummyUsers);
  const [filterRole, setFilterRole] = useState('All');

  const handleRoleChange = (userId, newRole) => {
    setUsers(users.map((u) => (u.id === userId ? { ...u, role: newRole } : u)));
  };

  const handleDelete = (userId) => {
    setUsers(users.filter((u) => u.id !== userId));
  };

  const filteredUsers =
    filterRole === 'All' ? users : users.filter((u) => u.role === filterRole);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <AdminNavbar username="Admin User" />
        <div className="p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold text-green-700 mb-6">
            User Management
          </h1>

          {/* Filter Dropdown */}
          <div className="mb-4 flex items-center gap-4">
            <label className="font-semibold text-gray-700">
              Filter by Role:
            </label>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            >
              <option>All</option>
              <option>Admin</option>
              <option>Citizen</option>
              <option>Moderator</option>
            </select>
          </div>

          {/* Users Table */}
          <div className="bg-white p-4 rounded-xl shadow overflow-x-auto">
            <table className="min-w-full border">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2 px-4 text-left">ID</th>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  <th className="py-2 px-4 text-left">Role</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{user.id}</td>
                    <td className="py-2 px-4">{user.name}</td>
                    <td className="py-2 px-4">{user.email}</td>
                    <td className="py-2 px-4">
                      <select
                        value={user.role}
                        onChange={(e) =>
                          handleRoleChange(user.id, e.target.value)
                        }
                        className="p-1 border border-gray-300 rounded"
                      >
                        <option>Admin</option>
                        <option>Citizen</option>
                        <option>Moderator</option>
                      </select>
                    </td>
                    <td className="py-2 px-4 flex gap-2">
                      <button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Edit
                      </button>
                      <button
                        className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-4 text-center text-gray-500">
                      No users found.
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
