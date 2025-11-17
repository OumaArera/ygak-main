import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Newspaper, Loader2, X } from "lucide-react";
import { getData } from "../../services/apiService";

// Placeholder press releases
const samplePress = [
  {
    id: 1,
    title: "Youth for Green Action Kenya Launches National Climate Awareness Drive",
    excerpt:
      "The organization has unveiled a new nationwide environmental education campaign targeting schools and community institutions.",
    date: "2025-01-10",
    image: "/project.JPG",
    content: `The Climate Awareness Drive aims to equip young people across Kenya with environmental knowledge and practical tools. It includes school visits, community workshops, and tree planting exercises. The campaign also promotes renewable energy adoption and sustainable lifestyles.`
  },
  {
    id: 2,
    title: "YGAK Partners with Counties to Enhance Tree-Growing Programs",
    excerpt:
      "A new partnership with county governments aims to accelerate reforestation efforts and community-led conservation.",
    date: "2025-02-05",
    image: "/project.JPG",
    content: `This initiative focuses on large-scale tree planting, monitoring of growth, and community involvement. County governments provide technical support and land allocation, while YGAK mobilizes youth volunteers to lead the planting and maintenance efforts.`
  },
  {
    id: 3,
    title: "Youth Climate Dialogue 2025 Receives National Recognition",
    excerpt:
      "Policy experts and youth leaders gathered to deliberate on Kenya’s climate agenda, with YGAK playing a key role.",
    date: "2025-03-15",
    image: "/project.JPG",
    content: `The Youth Climate Dialogue 2025 brought together over 200 participants from diverse backgrounds to develop actionable strategies on climate mitigation. Key resolutions include youth-led renewable energy projects and school sustainability programs.`
  }
];

const Press = () => {
  const [press, setPress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 5, totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const getPress = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint = "press-releases";
      const params = { page: currentPage, limit: 5 };

      const response = await getData(endpoint, params);
      setPress(response?.data?.data || samplePress);
      setMeta(
        response?.data?.meta || {
          total: 0,
          page: currentPage,
          limit: 5,
          totalPages: 1,
        }
      );
    } catch (error) {
      console.error("Error fetching press releases:", error);
      setPress([]);
      setMeta({ total: 0, page: currentPage, limit: 5, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    getPress();
  }, [getPress]);

  const handleNextPage = () => {
    if (currentPage < meta.totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
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
          Press Center
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Stay updated with YGAK’s latest press releases, announcements, and official communications.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Press Cards */}
        <div className="lg:col-span-1 space-y-4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 size={48} className="animate-spin text-[#1B5E20]" />
            </div>
          ) : press.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-700">No press releases available.</p>
            </div>
          ) : (
            press.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden"
                onClick={() => setSelectedArticle(item)}
              >
                <img
                  src={item.image || "/placeholder.jpg"}
                  alt={item.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-[#1B5E20] text-sm mb-1 flex items-center gap-2">
                    <Newspaper size={16} /> {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-1">{new Date(item.date).toDateString()}</p>
                  <p className="text-gray-600 text-sm line-clamp-2">{item.excerpt}</p>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Right Column: Detailed Article */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 min-h-[400px]">
          {selectedArticle ? (
            <motion.div
              key={selectedArticle.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-[#1B5E20]">{selectedArticle.title}</h2>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-500 mb-4">{new Date(selectedArticle.date).toDateString()}</p>
              <img
                src={selectedArticle.image || "/placeholder.jpg"}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedArticle.content || selectedArticle.excerpt}</p>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center">
              <Newspaper size={48} className="mb-4" />
              <p>Select a press release to read its details here.</p>
            </div>
          )}
        </div>
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

export default Press;
