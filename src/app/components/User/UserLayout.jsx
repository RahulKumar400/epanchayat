'use client';
import UserSidebar from './UserSidebar';
import UserNavbar from './UserNavbar';

export default function UserLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64">
        <UserSidebar />
      </div>

      {/* Main Area */}
      <div className="flex-1 ml-64 flex flex-col overflow-y-auto">
        <UserNavbar />
        <main className="p-6 bg-gray-50 min-h-screen">{children}</main>
      </div>
    </div>
  );
}
