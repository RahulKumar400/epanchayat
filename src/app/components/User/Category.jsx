'use client';
import UserSidebar from './UserSidebar';
import UserNavbar from './UserNavbar';
import { FaBookOpen } from 'react-icons/fa';
import Link from 'next/link';

const categories = [
  { id: 1, title: 'Agriculture', icon: <FaBookOpen />, link: 'booksname' },
  { id: 2, title: 'Health', icon: <FaBookOpen />, link: 'healthname' },
  { id: 3, title: 'Newspaper', icon: <FaBookOpen />, link: 'newspapername' },
];

export default function BooksCategoryCardsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <UserSidebar />

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <UserNavbar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-green-800 mb-6">
            Resources Categories
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.id} href={cat.link}>
                <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center justify-center gap-3 hover:shadow-lg cursor-pointer transition">
                  <div className="text-green-600 text-4xl">{cat.icon}</div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {cat.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
