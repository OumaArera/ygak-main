import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2, Youtube } from "lucide-react";
import { getData } from "../../services/apiService";

// Sample placeholder videos grouped by event
const sampleEventVideos = [
  {
    id: 1,
    eventName: "National Tree Planting Day",
    date: "2025-01-15",
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "https://www.youtube.com/embed/oHg5SJYRHA0",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    ],
  },
  {
    id: 2,
    eventName: "Youth Climate Dialogue",
    date: "2025-02-20",
    videos: [
      "https://www.youtube.com/embed/L_jWHffIx5E",
      "https://www.youtube.com/embed/k85mRPqvMbE",
      "https://www.youtube.com/embed/tgbNymZ7vqY",
    ],
  },
  {
    id: 3,
    eventName: "Green Innovation Hub Launch",
    date: "2025-03-10",
    videos: [
      "https://www.youtube.com/embed/V-_O7nl0Ii0",
      "https://www.youtube.com/embed/C0DPdy98e4c",
      "https://www.youtube.com/embed/fJ9rUzIMcZQ",
    ],
  },
];

const EventVideos = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 2, totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);

  const getEventVideos = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint = "event-videos";
      const params = { page: currentPage, limit: 2 }; 

      const response = await getData(endpoint, params);
      setEvents(response?.data?.data || sampleEventVideos);
      setMeta(
        response?.data?.meta || {
          total: sampleEventVideos.length,
          page: currentPage,
          limit: 2,
          totalPages: Math.ceil(sampleEventVideos.length / 2),
        }
      );
    } catch (error) {
      console.error("Error fetching event videos:", error);
      setEvents([]);
      setMeta({ total: 0, page: currentPage, limit: 2, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    getEventVideos();
  }, [getEventVideos]);

  const handleNextPage = () => {
    if (currentPage < meta.totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-3"
        >
          Event Videos
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Watch highlights from our events. Click on any video to play.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      {/* Video Cards */}
      <div className="max-w-6xl mx-auto px-6 mt-10 space-y-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 size={48} className="animate-spin text-[#1B5E20]" />
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-700">No event videos available at this time.</p>
          </div>
        ) : (
          events.map(event => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-[#1B5E20] mb-2 flex items-center gap-2">
                <Youtube size={20} /> {event.eventName}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{new Date(event.date).toDateString()}</p>

              {/* Video grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {event.videos.map((videoUrl, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg overflow-hidden shadow-sm"
                  >
                    <div className="relative w-full h-48">
                      <iframe
                        src={videoUrl}
                        title={`Video ${idx + 1} - ${event.eventName}`}
                        className="w-full h-full rounded-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Pagination */}
      {meta.totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-10">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1 || loading}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition ${
              currentPage === 1 || loading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#1B5E20] text-white hover:bg-[#145A24]"
            }`}
          >
            <ArrowLeft size={18} />
            <span>Previous</span>
          </button>

          <span className="text-gray-700 font-medium">
            Page {currentPage} of {meta.totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === meta.totalPages || loading}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition ${
              currentPage === meta.totalPages || loading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#1B5E20] text-white hover:bg-[#145A24]"
            }`}
          >
            <span>Next</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default EventVideos;
