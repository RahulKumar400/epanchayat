"use client";

import { useState } from "react";
import { FaFilePdf, FaPlay, FaTimes, FaExpand, FaCompress } from "react-icons/fa";
import UserNavbar from "./UserNavbar";
import UserSidebar from "./UserSidebar";

export default function SeasonalAgriculturePage() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [fullscreen, setFullscreen] = useState(false); // ✅ add this

  const crops = [
    {
      id: 1,
      name: "Rice",
      sowing: "June - July",
      harvest: "September",
      tips: "Use organic compost and ensure proper irrigation.",
      pdf: "/Rice.pdf",
      video: "/rice1.mp4",
    },
    {
      id: 2,
      name: "Wheat",
      sowing: "Oct - Nov",
      harvest: "March - April",
      tips: "Follow fertilizer schedule and monitor soil moisture.",
      pdf: "/wheat.pdf",
      video: "/wheat1.mp4",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <UserSidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        <UserNavbar />

        <div className="p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold text-green-800 mb-4">Seasonal Agriculture</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crops.map((crop) => (
              <div
                key={crop.id}
                className="bg-white shadow-lg rounded-lg p-5 flex flex-col gap-3 hover:shadow-2xl transition-shadow duration-300"
              >
                <h2 className="text-lg font-semibold text-green-700">{crop.name}</h2>
                <p className="text-gray-600">
                  <strong>Sowing:</strong> {crop.sowing} | <strong>Harvest:</strong> {crop.harvest}
                </p>
                <p className="text-gray-700">{crop.tips}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setSelectedPdf(crop.pdf)}
                    className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    <FaFilePdf /> PDF
                  </button>
                  <button
                    onClick={() => setSelectedVideo(crop.video)}
                    className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded hover:bg-green-200"
                  >
                    <FaPlay /> Video
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* PDF Modal */}
          {selectedPdf && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">

              {/* Buttons अब बाहर रखे हैं */}
              <div className="absolute top-5 right-5 flex gap-3 z-50">
                {/* Fullscreen Toggle */}
                <button
                  onClick={() => setFullscreen(!fullscreen)}
                  className="bg-white rounded-full shadow p-2 text-green-600 hover:text-green-800"
                >
                  {fullscreen ? <FaCompress /> : <FaExpand />}
                </button>

                {/* Close */}
                <button
                  onClick={() => {
                    setSelectedPdf(null);
                    setFullscreen(false);
                  }}
                  className="bg-white rounded-full shadow p-2 text-red-600 hover:text-red-800"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Content Card */}
              <div
                className={`bg-white relative overflow-hidden shadow-2xl transition-all duration-300 ${fullscreen
                    ? "w-full h-full m-0 rounded-none"
                    : "w-11/12 lg:w-10/12 h-[90vh] rounded-lg"
                  }`}
              >
                <iframe src={selectedPdf} className="w-full h-full" title="PDF Viewer"></iframe>
              </div>
            </div>
          )}


          {selectedVideo && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
              <div className="bg-white w-11/12 lg:w-10/12 h-[90vh] relative rounded-lg overflow-hidden shadow-2xl flex flex-col">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-3 right-3 text-red-600 text-2xl hover:text-red-800 z-10"
                >
                  <FaTimes />
                </button>
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="w-full h-full"
                ></video>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
