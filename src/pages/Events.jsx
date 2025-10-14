import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import EventCalendar from "../components/events/EventCalendar";
import EventFilters from "../components/events/EventFilters";
import { getData } from "../services/apiService";
import { getTodayDate } from "../utils/getDate";

const Events = () => {
  const [selectedCounty, setSelectedCounty] = useState("All");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 20, totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);

  const getEvents = useCallback(async () => {
    try {
      setLoading(true);
      const todayDate = getTodayDate();
      const endpoint = "upcoming-events";
      const params = {
        page: currentPage,
        limit: 20,
        date: todayDate,
      };

      if (selectedCounty !== "All") {
        params.county = selectedCounty;
      }

      const response = await getData(endpoint, params);
      setEvents(response?.data?.data || []);
      setMeta(response?.data?.meta || { total: 0, page: currentPage, limit: 20, totalPages: 1 });
    } catch (error) {
      console.error("Error fetching events:", error);
      setEvents([]);
      setMeta({ total: 0, page: currentPage, limit: 20, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  }, [currentPage, selectedCounty]);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const handleNextPage = () => {
    if (currentPage < meta.totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleCountyChange = (county) => {
    setSelectedCounty(county);
    setCurrentPage(1);
  };

  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-3"
        >
          Upcoming Events & Calendar
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Explore our upcoming activities, tree planting drives, and climate action events happening across Kenya.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <EventFilters
          selectedCounty={selectedCounty}
          setSelectedCounty={handleCountyChange}
        />

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 size={48} className="animate-spin text-[#1B5E20]" />
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-700">No events found for the selected criteria.</p>
            <p className="text-gray-500 mt-2">Try selecting "All" counties to see more events.</p>
          </div>
        ) : (
          <EventCalendar events={events} />
        )}
        
        {meta.totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-8">
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
    </div>
  );
};

export default Events;