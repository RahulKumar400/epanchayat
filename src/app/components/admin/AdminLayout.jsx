// app/(admin)/AdminLayout.jsx
'use client';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Fixed Sidebar */}
      <AdminSidebar />

      {/* Main Area */}
      <div className="flex-1  flex flex-col overflow-y-auto">
        <AdminNavbar username="Admin User" />
        <main className="p-6 bg-gray-100 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
