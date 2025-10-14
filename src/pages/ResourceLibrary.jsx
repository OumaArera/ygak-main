import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowLeft, ArrowRight } from "lucide-react"; // Import Arrow icons
import ResourceFilters from "../components/resources/ResourceFilters";
import ResourceSearch from "../components/resources/ResourceSearch";
import ResourceCard from "../components/resources/ResourceCard";
import DownloadModal from "../components/resources/DownloadModal";
import { getData } from "../services/apiService";

const ResourceLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [author, setAuthor] = useState("");
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({
    total: 0,
    page: 1,
    limit: 3, 
    totalPages: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedResource, setSelectedResource] = useState(null);

  const getResources = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint = "resource-library";
      const params = {
        page: currentPage,
        limit: 3,
      };

      if (selectedCategory && selectedCategory !== "All") {
        params.category = selectedCategory;
      }
      if (searchTerm.trim()) {
        params.title = searchTerm.trim();
      }
      if (author.trim()) {
        params.author = author.trim();
      }
      const response = await getData(endpoint, params);

      setResources(response?.data?.data || []);
      
      setMeta(
        response?.data?.meta || {
          total: 0,
          page: currentPage,
          limit: 10,
          totalPages: 1,
        }
      );
    } catch (error) {
      console.error("Error fetching resources:", error);
      setResources([]);
      setMeta({ total: 0, page: currentPage, limit: 10, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  }, [currentPage, selectedCategory, searchTerm, author]);

  useEffect(() => {
    if (currentPage !== 1) {
        setCurrentPage(1);
    } else {
        getResources();
    }
  }, [selectedCategory, searchTerm, author]);

  useEffect(() => {
    getResources();
  }, [currentPage]); 


  const handleNextPage = () => {
    if (currentPage < meta.totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleFilterChange = (setter) => (value) => {
    setter(value);
    // setCurrentPage(1) is handled in the effect above
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
          Resource Library
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Explore research, policy briefs, and educational materials curated by
          Youths for Green Action Kenya. Use the search and filters to find what
          you need.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-10 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <ResourceFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={handleFilterChange(setSelectedCategory)}
          author={author}
          setAuthor={handleFilterChange(setAuthor)}
        />
        <ResourceSearch setSearchTerm={handleFilterChange(setSearchTerm)} />
      </div>

      <section className="max-w-7xl mx-auto px-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 size={48} className="animate-spin text-[#1B5E20]" />
          </div>
        ) : resources.length === 0 ? (
          <p className="text-center text-gray-500 italic py-10">
            No resources found for the selected filters.
          </p>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ResourceCard
                    resource={resource}
                    onDownload={() => setSelectedResource(resource)}
                  />
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

      {selectedResource && (
        <DownloadModal
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
        />
      )}
    </div>
  );
};

export default ResourceLibrary;