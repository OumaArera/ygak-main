import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, MapPin, Calendar } from "lucide-react";
import { milestonesData, MILESTONES_PER_PAGE } from "../../data/milestones";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Extracts a YouTube video ID from a full YouTube URL.
 * Supports youtu.be short links and youtube.com/watch?v= formats.
 * @param {string} url
 * @returns {string|null}
 */
const extractYoutubeId = (url) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

/**
 * Builds a YouTube thumbnail URL from a video ID.
 * Falls back to a placeholder if ID is null.
 * @param {string|null} videoId
 * @returns {string}
 */
const getThumbnailUrl = (videoId) =>
  videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "https://placehold.co/640x360/0d160e/ffffff?text=YGAK+Event";

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Renders a single milestone card with thumbnail, title, county, year, and a
 * "Watch" button that opens the YouTube link in a new tab.
 */
const MilestoneCard = ({ milestone, index }) => {
  const videoId = extractYoutubeId(milestone.youtubeUrl);
  const thumbnail = getThumbnailUrl(videoId);

  return (
    <motion.div
      key={milestone.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative group overflow-hidden">
        <img
          src={thumbnail}
          alt={milestone.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Play overlay */}
        <a
          href={milestone.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch ${milestone.title} on YouTube`}
          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="bg-[#1B5E20] text-white rounded-full p-4 shadow-lg">
            <Play size={28} fill="white" />
          </span>
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2">
          {milestone.title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 flex-1">
          {milestone.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-4 text-xs text-gray-400 mt-1">
          <span className="flex items-center gap-1">
            <MapPin size={13} className="text-[#1B5E20]" />
            {milestone.county}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={13} className="text-[#1B5E20]" />
            {milestone.year}
          </span>
        </div>

        {/* CTA */}
        <a
          href={milestone.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 self-start bg-[#1B5E20] hover:bg-[#145A24] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
        >
          <Play size={14} fill="white" />
          Watch on YouTube
        </a>
      </div>
    </motion.div>
  );
};

/**
 * Pagination controls — previous / page indicator / next.
 */
const PaginationControls = ({ currentPage, totalPages, onPrev, onNext }) => (
  <div className="flex justify-center items-center gap-5 mt-10">
    <button
      onClick={onPrev}
      disabled={currentPage === 1}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
        currentPage === 1
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-[#1B5E20] text-white hover:bg-[#145A24]"
      }`}
    >
      <ArrowLeft size={18} />
      Previous
    </button>

    <span className="text-gray-600 font-medium text-sm">
      Page {currentPage} of {totalPages}
    </span>

    <button
      onClick={onNext}
      disabled={currentPage === totalPages}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
        currentPage === totalPages
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-[#1B5E20] text-white hover:bg-[#145A24]"
      }`}
    >
      Next
      <ArrowRight size={18} />
    </button>
  </div>
);

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

const Milestones = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(milestonesData.length / MILESTONES_PER_PAGE);

  /** Slice the static array for the current page */
  const visibleMilestones = useMemo(() => {
    const start = (currentPage - 1) * MILESTONES_PER_PAGE;
    return milestonesData.slice(start, start + MILESTONES_PER_PAGE);
  }, [currentPage]);

  const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-3xl font-bold text-white mb-3 z-10"
        >
          Our Milestones
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative text-white max-w-2xl mx-auto z-10"
        >
          Celebrating every tree planted, every school greened, and every
          community empowered across Kenya.
        </motion.p>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        {/* Stats bar */}
        <div className="mb-8 text-center text-gray-500 text-sm">
          Showing {(currentPage - 1) * MILESTONES_PER_PAGE + 1}–
          {Math.min(currentPage * MILESTONES_PER_PAGE, milestonesData.length)} of{" "}
          {milestonesData.length} milestones
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleMilestones.map((milestone, index) => (
              <MilestoneCard
                key={milestone.id}
                milestone={milestone}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </div>
    </div>
  );
};

export default Milestones;