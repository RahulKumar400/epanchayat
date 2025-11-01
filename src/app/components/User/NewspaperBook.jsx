'use client';
import { FaBook, FaVideo, FaRegFileAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import UserLayout from './UserLayout';

const books = [
  {
    id: 1,
    title: 'Local Governance Updates - Newspaper',
    type: 'pdf',
    thumbnail: '/Local Governance Updates.jpg',
    pdfUrl:
      'https://timesofindia.indiatimes.com/city/lucknow/lucknow-based-organisation-to-help-strengthen-cybercrime-research-training-policy-ecosystem/articleshow/124298058.cms',
    isOnlineLink: true,
  },
  {
    id: 2,
    title: 'Panchayat Meeting Reports',
    type: 'pdf',
    thumbnail: '/Panchayat Meeting Reports.jpg',
    pdfUrl: 'https://meetingonline.gov.in/',
    isOnlineLink: true,
  },
  {
    id: 3,
    title: 'Rural Development News',
    type: 'pdf',
    thumbnail: '/Rural Development News.jpg',
    pdfUrl: 'https://economictimes.indiatimes.com/topic/rural-development',
    isOnlineLink: true,
  },
  {
    id: 4,
    title: 'Government Schemes Updates',
    type: 'pdf',
    thumbnail: '/Government Schemes Updates.jpeg',
    pdfUrl: 'https://www.myscheme.gov.in/',
    isOnlineLink: true,
  },
];

export default function NewspaperListPage() {
  const [selectedBook, setSelectedBook] = useState(null);

  // Automatically open online links in a new tab
  useEffect(() => {
    if (selectedBook?.isOnlineLink) {
      window.open(selectedBook.pdfUrl, '_blank');
      setSelectedBook(null);
    }
  }, [selectedBook]);

  return (
    <UserLayout>
        <main className="flex-1">
          <h1 className="text-2xl font-bold text-green-800 mb-6">Newspaper</h1>

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

          {/* PDF Modal for local PDFs only */}
          {selectedBook && !selectedBook.isOnlineLink && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
              <div className="bg-white w-[80%] h-[90%] rounded shadow-lg relative flex flex-col">
                <button
                  className="absolute top-2 right-2 text-red-600 font-bold text-xl"
                  onClick={() => setSelectedBook(null)}
                >
                  ×
                </button>

                {/* PDF viewer */}
                <iframe
                  src={selectedBook.pdfUrl}
                  className="w-full h-full rounded"
                  title={selectedBook.title}
                />
              </div>
            </div>
          )}
        </main>
      </UserLayout>
  );
}
