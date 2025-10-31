'use client';
import UserSidebar from './UserSidebar';
import UserNavbar from './UserNavbar';
import { FaBook, FaVideo, FaRegFileAlt } from 'react-icons/fa';
import { useState } from 'react';

const books = [
  {
    id: 1,
    title: 'Nutrition for Healthy Living',
    type: 'pdf',
    thumbnail: '/Nutrition for Healthy Living.jpg',
    pdfUrl: '/kehe103.pdf',
  },
  {
    id: 2,
    title: 'Mental Health Awareness',
    type: 'pdf',
    thumbnail: '/Mental Health Awareness.webp',
    pdfUrl: '/Mental-Health-Awareness-Resource-Manual.pdf',
  },
  {
    id: 3,
    title: 'Basic First Aid',
    type: 'pdf',
    thumbnail: '/Basic_First_Aid_Manual_English.jpg',
    pdfUrl: '/Basic_First_Aid_Manual_English.pdf',
  },
  {
    id: 4,
    title: 'Hygiene and Sanitation',
    type: 'video',
    thumbnail: '/Hygiene and Sanitation.jpg',
    videoUrl: '/Agriculture video.mp4',
  },
  {
    id: 5,
    title: 'Exercise and Fitness Guide',
    type: 'video',
    thumbnail: '/Exercise and Fitness Guide.jpg',
    videoUrl: '/Agriculture video.mp4',
  },
];

export default function HealthListPage() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <UserSidebar />
      <div className="flex-1 flex flex-col">
        <UserNavbar username="User Name" />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-green-800 mb-6">
            Health Books
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white p-6 rounded-xl shadow flex flex-col items-center justify-center gap-3 hover:shadow-lg cursor-pointer transition"
                onClick={() => setSelectedBook(book)}
              >
                <div className="relative w-full h-40">
                  <img
                    src={book.thumbnail}
                    alt={book.title}
                    className="w-full h-full object-cover rounded"
                  />
                  {book.type === 'video' && (
                    <FaVideo className="absolute top-2 right-2 text-green-600 text-xl" />
                  )}
                  {book.type === 'pdf' && (
                    <FaRegFileAlt className="absolute top-2 right-2 text-green-600 text-xl" />
                  )}
                  {book.type === 'other' && (
                    <FaBook className="absolute top-2 right-2 text-green-600 text-xl" />
                  )}
                </div>
                <h2 className="text-lg font-semibold text-gray-800 text-center">
                  {book.title}
                </h2>
              </div>
            ))}
          </div>

          {/* PDF Modal */}
          {/* {selectedBook && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
              <div className="bg-white w-[80%] h-[90%] rounded shadow-lg relative flex flex-col">
                <button
                  className="absolute top-1 right-1 text-red-600 font-bold text-xl cursor-pointer"
                  onClick={() => setSelectedBook(null)}
                >
                  ×
                </button>

                {selectedBook.type === 'pdf' && (
                  <iframe
                    src={selectedBook.pdfUrl}
                    className="w-full h-full rounded "
                    title={selectedBook.title}
                  />
                )}

                {selectedBook.type === 'video' && (
                  <video
                    src={selectedBook.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full rounded"
                  />
                )}
              </div>
            </div>
          )} */}

          {selectedBook && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
              <div className="bg-white w-[80%] h-[90%] rounded shadow-lg relative flex flex-col overflow-hidden">
                {/* Close Button */}
                <button
                  className="absolute top-2 right-1 z-50 bg-white text-red-600 font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow cursor-pointer hover:bg-red-100"
                  onClick={() => setSelectedBook(null)}
                >
                  ×
                </button>

                {/* PDF Viewer */}
                {selectedBook.type === 'pdf' && (
                  <iframe
                    src={selectedBook.pdfUrl}
                    className="w-full h-full rounded"
                    title={selectedBook.title}
                  />
                )}

                {/* Video Player */}
                {selectedBook.type === 'video' && (
                  <video
                    src={selectedBook.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full rounded"
                  />
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
