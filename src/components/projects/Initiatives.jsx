import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Leaf, MapPin, Calendar } from "lucide-react";
import { initiatives } from "../../data/initiatives.data";

const PAGE_LIMIT = 3;

/* ── accent colors cycling per card ── */
const ACCENTS = [
  { bg: "from-emerald-600 to-green-500", light: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" },
  { bg: "from-teal-600 to-cyan-500",     light: "bg-teal-50",    text: "text-teal-700",    border: "border-teal-100"    },
  { bg: "from-green-700 to-lime-500",    light: "bg-lime-50",    text: "text-lime-700",    border: "border-lime-100"    },
];

const InitiativeCard = ({ initiative, index }) => {
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: (index % PAGE_LIMIT) * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl overflow-hidden flex flex-col"
      style={{
        boxShadow: "0 4px 24px rgba(27,94,32,0.08), 0 0 0 1px rgba(27,94,32,0.06)",
        minHeight: "460px",
      }}
    >
      {/* ── Image with gradient overlay ── */}
      <div className="relative h-52 overflow-hidden shrink-0">
        <img
          src={initiative.image || "/placeholder.jpg"}
          alt={initiative.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ transform: "scale(1)", transition: "transform 700ms ease" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        />
        {/* gradient sweep */}
        <div className={`absolute inset-0 bg-gradient-to-br ${accent.bg} opacity-40 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Index badge */}
        <div className="absolute top-4 left-4">
          <div className={`w-9 h-9 rounded-2xl bg-gradient-to-br ${accent.bg} flex items-center justify-center shadow-lg`}>
            <span className="text-white text-xs font-black">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Status */}
        {initiative.status && (
          <div className="absolute top-4 right-4">
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm border ${
              initiative.status === "completed"
                ? "bg-green-500/80 text-white border-green-400/30"
                : "bg-amber-400/80 text-amber-900 border-amber-300/30"
            }`}>
              {initiative.status}
            </span>
          </div>
        )}

        {/* Title floated onto image */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-white font-black text-lg leading-snug drop-shadow-sm line-clamp-2">
            {initiative.title}
          </h3>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-grow p-5 gap-4">

        {/* Theme / category pill */}
        {initiative.theme && (
          <div className="flex">
            <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${accent.light} ${accent.text} ${accent.border}`}>
              {initiative.theme}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 text-[13px] leading-relaxed line-clamp-3 flex-grow">
          {initiative.description}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap gap-3 text-[11px] text-gray-400">
          {initiative.location?.county && (
            <span className="flex items-center gap-1">
              <MapPin size={11} className={accent.text} />
              {[initiative.location.county, initiative.location.country].filter(Boolean).join(", ")}
            </span>
          )}
          {initiative.duration?.startDate && (
            <span className="flex items-center gap-1">
              <Calendar size={11} className={accent.text} />
              {new Date(initiative.duration.startDate).toLocaleDateString("en-KE", {
                year: "numeric", month: "short", day: "numeric",
              })}
            </span>
          )}
        </div>

        {/* SDG tags */}
        {initiative.alignment?.sdg?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {initiative.alignment.sdg.map((sdg, i) => (
              <span key={i} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${accent.light} ${accent.text} ${accent.border}`}>
                {sdg.split(" - ")[0]}
              </span>
            ))}
          </div>
        )}

        {/* ── Divider + CTA ── */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
          {/* mini stat if available */}
          {initiative.treePlantingStatistics?.totalSeedlingsPlanted ? (
            <div className="flex items-center gap-1.5">
              <Leaf size={13} className={accent.text} />
              <span className="text-xs font-bold text-gray-700">
                {(initiative.treePlantingStatistics.totalSeedlingsPlanted / 1000).toFixed(0)}K trees
              </span>
            </div>
          ) : (
            <div />
          )}

          <motion.a
            href={`/activities/initiatives/${initiative.id}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r ${accent.bg} px-4 py-2 rounded-full shadow-sm hover:shadow-md transition`}
          >
            Explore
            <ArrowUpRight size={13} />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

/* ── Page component ── */
const Initiatives = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(initiatives.length / PAGE_LIMIT));

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const paginatedInitiatives = useMemo(() => {
    return initiatives.slice((currentPage - 1) * PAGE_LIMIT, currentPage * PAGE_LIMIT);
  }, [currentPage]);

  const handleNextPage = () => { if (currentPage < totalPages) setCurrentPage(p => p + 1); };
  const handlePrevPage = () => { if (currentPage > 1) setCurrentPage(p => p - 1); };

  return (
    <div className="pb-20 bg-[#f7f9f7] min-h-screen">

      {/* ── Hero ── */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d160e]/80 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl mx-auto px-6"
        >
          {/* eyebrow */}
          <div className="flex justify-center mb-4">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-400 bg-green-400/10 border border-green-400/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
              <Leaf size={12} />
              Youths for Green Action Kenya
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Initiatives</span>
          </h1>
          <p className="text-green-100/80 text-base leading-relaxed">
            Explore the major ideas guiding long-term environmental transformation and climate resilience across Kenya.
          </p>

          {/* live count pill */}
          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/80 font-medium">
              {initiatives.length} Active Initiative{initiatives.length !== 1 ? "s" : ""}
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── Grid ── */}
      <div className="max-w-6xl mx-auto px-6 mt-12">

        <AnimatePresence mode="wait">
          {initiatives.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Leaf size={48} className="mx-auto text-green-200 mb-4" />
              <p className="text-xl text-gray-600">No initiatives available at the moment.</p>
              <p className="text-gray-400 mt-1 text-sm">Please check back soon.</p>
            </motion.div>
          ) : (
            <motion.div
              key={currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {paginatedInitiatives.map((initiative, i) => (
                <InitiativeCard
                  key={initiative.id}
                  initiative={initiative}
                  index={(currentPage - 1) * PAGE_LIMIT + i}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-14">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-[#1B5E20] border border-green-200 hover:bg-green-50 shadow-sm"
              }`}
            >
              <ArrowLeft size={15} /> Previous
            </button>

            {/* page dots */}
            <div className="flex gap-2 items-center">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`rounded-full transition-all ${
                    currentPage === i + 1
                      ? "w-7 h-2.5 bg-[#1B5E20]"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-[#1B5E20] text-white hover:bg-[#145A24] shadow-sm"
              }`}
            >
              Next <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Initiatives;