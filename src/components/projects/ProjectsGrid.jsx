import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects.data";

const PAGE_LIMIT = 3;

const ProjectsGrid = ({ selectedTheme, searchTitle }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Filter projects client-side based on selectedTheme and searchTitle
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTheme =
        !selectedTheme || selectedTheme === "All" || project.theme === selectedTheme;
      const matchesTitle =
        !searchTitle.trim() ||
        project.title.toLowerCase().includes(searchTitle.trim().toLowerCase());
      return matchesTheme && matchesTitle;
    });
  }, [selectedTheme, searchTitle]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_LIMIT));

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTheme, searchTitle]);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PAGE_LIMIT,
    currentPage * PAGE_LIMIT
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-16">
      {paginatedProjects.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-700">No projects found for the selected filters.</p>
          <p className="text-gray-500 mt-2">Try adjusting your theme or search query.</p>
        </div>
      ) : (
        <>
          <div
            className={`grid gap-8 max-w-3xl mx-auto justify-items-center ${
              paginatedProjects.length === 1
                ? "grid-cols-1 place-items-center"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {paginatedProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-12">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#1B5E20] text-white hover:bg-[#145A24]"
                }`}
              >
                <ArrowLeft size={18} />
                <span>Previous</span>
              </button>

              <span className="text-gray-700 font-medium">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#1B5E20] text-white hover:bg-[#145A24]"
                }`}
              >
                <span>Next</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default ProjectsGrid;