import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2, ExternalLink } from "lucide-react";
import { getData } from "../../services/apiService";

// Sample data: events with photos
const sampleEventPhotos = [
  {
    id: 1,
    eventName: "National Tree Planting Day",
    date: "2025-01-15",
    photos: [
      "/pillar-climate.jpg",
      "/bg_image.jpg",
      "/37402022-42.JPG",
    ],
    googlePhotosUrl: "https://photos.app.goo.gl/sample1",
  },
  {
    id: 2,
    eventName: "Youth Climate Dialogue",
    date: "2025-02-20",
    photos: [
      "/pillar-climate.jpg",
      "/bg_image.jpg",
      "/37402022-42.JPG",
    ],
    googlePhotosUrl: "https://photos.app.goo.gl/sample2",
  },
  {
    id: 3,
    eventName: "Green Innovation Hub Launch",
    date: "2025-03-10",
    photos: [
      "/pillar-climate.jpg",
      "/bg_image.jpg",
      "/37402022-42.JPG",
    ],
    googlePhotosUrl: "https://photos.app.goo.gl/sample3",
  },
  {
    id: 4,
    eventName: "National Clean-Up Day",
    date: "2025-04-12",
    photos: [
      "/pillar-climate.jpg",
      "/bg_image.jpg",
      "/37402022-42.JPG",
    ],
    googlePhotosUrl: "https://photos.app.goo.gl/sample4",
  },
];

const EventPhotos = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 2, totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);

  const getEventPhotos = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint = "event-photos";
      const params = { page: currentPage, limit: 2 }; // show 2 events per page

      const response = await getData(endpoint, params);
      setEvents(response?.data?.data || sampleEventPhotos);
      setMeta(
        response?.data?.meta || {
          total: sampleEventPhotos.length,
          page: currentPage,
          limit: 2,
          totalPages: Math.ceil(sampleEventPhotos.length / 2),
        }
      );
    } catch (error) {
      console.error("Error fetching event photos:", error);
      setEvents([]);
      setMeta({ total: 0, page: currentPage, limit: 2, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    getEventPhotos();
  }, [getEventPhotos]);

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
          Event Photos
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Browse highlights from our events. Click the link to see more photos on Google Photos.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      {/* Event Photo Grid */}
      <div className="max-w-6xl mx-auto px-6 mt-10 space-y-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 size={48} className="animate-spin text-[#1B5E20]" />
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-700">No event photos available at this time.</p>
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
              <h3 className="text-xl font-semibold text-[#1B5E20] mb-2">{event.eventName}</h3>
              <p className="text-gray-500 text-sm mb-4">{new Date(event.date).toDateString()}</p>

              {/* Photos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {event.photos.map((photo, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="overflow-hidden rounded-lg shadow-sm cursor-pointer"
                  >
                    <img
                      src={photo}
                      alt={`${event.eventName} ${idx + 1}`}
                      className="w-full h-40 object-cover transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Google Photos Link */}
              {event.googlePhotosUrl && (
                <a
                  href={event.googlePhotosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[#1B5E20] hover:text-[#145A24] font-semibold transition"
                >
                  <ExternalLink size={16} /> View More Photos
                </a>
              )}
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

export default EventPhotos;
