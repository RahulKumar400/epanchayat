'use client';
import { FaBook, FaVideo, FaRegFileAlt } from 'react-icons/fa';
import { useState } from 'react';
import UserLayout from './UserLayout';

const books = [
  {
    id: 1,
    title: 'Organic Farming Basics',
    type: 'pdf',
    thumbnail: 'https://agritech.tnau.ac.in/org_farm/INTRODUCTION.jpg',
    pdfUrl: '/Organic Farming Basics.pdf',
  },
  {
    id: 2,
    title: 'Crop Rotation Techniques',
    type: 'pdf',
    thumbnail: '/Crop Rotation Techniques.jpg',
    pdfUrl: '/crop-rotation-intercropping.pdf',
  },
  {
    id: 3,
    title: 'Soil Science (Mitti Vigyan)',
    type: 'pdf',
    thumbnail: '/Soil-Profile.png',
    pdfUrl: '/Introduction-to-Soil-Science.pdf',
  },
  {
    id: 4,
    title: 'Soil Health Manual',
    type: 'pdf',
    thumbnail: '/Soil Health Manual.jpg',
    pdfUrl: '/Cropland_InField_Soil_Health_Assessment_Guide.pdf',
  },
  {
    id: 5,
    title: 'Soil Conservation & Land Reclamation',
    type: 'pdf',
    thumbnail: '/Methods-of-Soil--Conservation-.webp',
    pdfUrl: '/Soil-Conservation-Manual-a-Managers-Guide-low-res.pdf',
  },
  {
    id: 6,
    title: 'Agroecology',
    type: 'pdf',
    thumbnail: 'Agroecology.png',
    pdfUrl: '/Agroecology-training-manual-TWN-SOCLA.pdf',
  },
  {
    id: 7,
    title: 'Organic Farming Basics video',
    type: 'video',
    thumbnail: '/Organic Farming Basics video.png',
    videoUrl: '/Agriculture video.mp4',
  },
];

export default function BooksListPage() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <UserLayout>
        <main className="flex-1">
          <h1 className="text-2xl font-bold text-green-800 mb-6">
            Agriculture Books
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

          {/* Modal for PDF/Video */}
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
      </UserLayout>
  );
}
