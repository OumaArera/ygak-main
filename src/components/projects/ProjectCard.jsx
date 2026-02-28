import React, { useState } from "react";
import { TreePine, Users, MapPin, CheckCircle2, Clock, Share2, ArrowRight, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = `${window.location.origin}/activities/projects/${project.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const totalTrees = project.treePlantingStatistics?.totalSeedlingsPlanted;
  const totalVolunteers = project.implementationApproach?.volunteerInvolvement?.totalVolunteers;
  const sitesCount = project.location?.specificSites?.length;
  const cumulativeTrees = project.impact?.cumulativeTreesPlantedByOrganization;

  // Progress bar: this project's contribution to cumulative total
  const progressPercent = totalTrees && cumulativeTrees
    ? Math.min(Math.round((totalTrees / cumulativeTrees) * 100 * 10), 100)
    : null;

  const isCompleted = project.status === "completed";

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        boxShadow: "0 2px 8px rgba(27,94,32,0.08), 0 0 0 1px rgba(27,94,32,0.07)",
        minHeight: "520px",
        width: "100%",
      }}
    >
      {/* Image */}
      <div className="relative h-44 shrink-0 overflow-hidden bg-gray-100">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
            <Leaf size={40} className="text-green-300" />
          </div>
        )}

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${
              isCompleted
                ? "bg-green-600/90 text-white"
                : "bg-amber-400/90 text-amber-900"
            }`}
          >
            {isCompleted ? <CheckCircle2 size={11} /> : <Clock size={11} />}
            {isCompleted ? "Completed" : "Upcoming"}
          </span>
        </div>

        {/* Theme badge */}
        <div className="absolute top-3 right-3">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-sm text-green-800 border border-green-100">
            {project.theme}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow p-5 gap-3">
        {/* Title */}
        <h3 className="text-[15px] font-bold text-[#1B5E20] leading-snug line-clamp-2">
          {project.title}
        </h3>

        {/* Location */}
        {project.location && (
          <p className="flex items-center gap-1.5 text-xs text-gray-500">
            <MapPin size={12} className="text-green-600 shrink-0" />
            {[project.location.subCounties?.[0], project.location.county, project.location.country]
              .filter(Boolean)
              .join(", ")}
          </p>
        )}

        {/* Description */}
        <p className="text-gray-600 text-[13px] leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Mini Stats */}
        {(totalTrees || totalVolunteers || sitesCount) && (
          <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-gray-100">
            {totalTrees && (
              <div className="text-center">
                <p className="text-base font-bold text-[#1B5E20]">
                  {totalTrees >= 1000 ? `${(totalTrees / 1000).toFixed(0)}K` : totalTrees}
                </p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">
                  Trees<br />Planted
                </p>
              </div>
            )}
            {totalVolunteers && (
              <div className="text-center border-x border-gray-100">
                <p className="text-base font-bold text-[#1B5E20]">{totalVolunteers}</p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">
                  Volunteers<br />Involved
                </p>
              </div>
            )}
            {sitesCount && (
              <div className="text-center">
                <p className="text-base font-bold text-[#1B5E20]">{sitesCount}</p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">
                  Schools<br />Reached
                </p>
              </div>
            )}
          </div>
        )}

        {/* Progress Bar — contribution to org total */}
        {progressPercent !== null && (
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-gray-500">Contribution to org. total</span>
              <span className="text-[10px] font-semibold text-green-700">{progressPercent}%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${progressPercent}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
            <p className="text-[10px] text-gray-400 mt-1">
              of {cumulativeTrees?.toLocaleString()} cumulative trees by YGAK
            </p>
          </div>
        )}

        {/* SDG Tags */}
        {project.alignment?.sdg?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.alignment.sdg.map((sdg, i) => (
              <span
                key={i}
                className="text-[10px] font-medium bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-full"
              >
                {sdg.split(" - ")[0]}
              </span>
            ))}
          </div>
        )}

        {/* Push footer to bottom */}
        <div className="flex-grow" />

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-green-700 transition font-medium"
            title="Copy link"
          >
            <Share2 size={14} />
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="text-green-600"
                >
                  Copied!
                </motion.span>
              ) : (
                <motion.span
                  key="share"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                >
                  Share
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <Link
            to={`/activities/projects/${project.id}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1B5E20] hover:bg-[#145A24] px-4 py-2 rounded-full transition group/btn"
          >
            View Details
            <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;