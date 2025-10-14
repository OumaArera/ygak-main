import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowLeft, ArrowRight } from "lucide-react"; 
import ProjectCard from "./ProjectCard";
import { getData } from "../../services/apiService";
import { getTodayDate } from "../../utils/getDate";

const ProjectsGrid = ({ selectedTheme, searchTitle }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 20, totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);

  const getProjects = useCallback(async () => {
    try {
      setLoading(true);
      const todayDate = getTodayDate();
      const endpoint = "upcoming-projects";
      const params = {
        page: currentPage,
        limit: 20,
        date: todayDate,
      };

      if (selectedTheme && selectedTheme !== "All") {
        params.theme = selectedTheme;
      }

      if (searchTitle.trim()) {
        params.title = searchTitle.trim();
      }

      const response = await getData(endpoint, params);
      setProjects(response?.data?.data || []);
      setMeta(response?.data?.meta || { total: 0, page: currentPage, limit: 3, totalPages: 1 });
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
      setMeta({ total: 0, page: currentPage, limit: 20, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  }, [currentPage, selectedTheme, searchTitle]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

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

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-16">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 size={48} className="animate-spin text-[#1B5E20]" />
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-700">No projects found for the selected filters.</p>
          <p className="text-gray-500 mt-2">Try adjusting your theme or search query.</p>
        </div>
      ) : (
        <>
          <div
            className={`grid gap-8 max-w-3xl mx-auto justify-items-center ${
              projects.length === 1
                ? "grid-cols-1 place-items-center"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {projects.map((project, i) => (
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

          {meta.totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-12">
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
        </>
      )}
    </section>
  );
};

export default ProjectsGrid;
