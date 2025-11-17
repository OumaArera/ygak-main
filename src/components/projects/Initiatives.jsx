import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { getData } from "../../services/apiService";

// Placeholder sample data for initiatives
const sampleInitiatives = [
  {
    id: 1,
    title: "National Green Innovation Lab",
    description:
      "A flagship platform supporting groundbreaking environmental technologies, youth-led climate innovations, and eco-entrepreneurship across Kenya.",
    image: "/bg_image.jpg",
  },
  {
    id: 2,
    title: "Kenya Blue Economy Vision",
    description:
      "A long-term initiative focused on sustainable marine ecosystems, ocean conservation, and coastal community resilience.",
    image: "/bg_image.jpg",
  },
  {
    id: 3,
    title: "Youth Climate Action Hub",
    description:
      "A national hub empowering young climate leaders through research support, policy engagement, and environmental leadership training.",
    image: "/bg_image.jpg",
  },
  {
    id: 4,
    title: "Green Cities 2050",
    description:
      "A transformative urban development model promoting clean mobility, smart waste systems, renewable energy adoption, and sustainable city planning.",
    image: "/bg_image.jpg",
  },
  {
    id: 5,
    title: "Agricultural Resilience Blueprint",
    description:
      "A national framework advancing climate-smart agriculture, regenerative farming, and food-security innovations for rural communities.",
    image: "/bg_image.jpg",
  },
  {
    id: 6,
    title: "National Circular Economy Roadmap",
    description:
      "A wide-scope initiative targeting zero-waste systems, plastic reduction, recycling industries, and greener production ecosystems.",
    image: "/bg_image.jpg",
  },
];

const Initiatives = () => {
  const [initiatives, setInitiatives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 20, totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);

  const getInitiatives = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint = "initiatives";
      const params = { page: currentPage, limit: 20 };

      const response = await getData(endpoint, params);
      setInitiatives(response?.data?.data || sampleInitiatives);
      setMeta(
        response?.data?.meta || {
          total: 0,
          page: currentPage,
          limit: 20,
          totalPages: 1,
        }
      );
    } catch (error) {
      console.error("Error fetching initiatives:", error);
      setInitiatives([]);
      setMeta({ total: 0, page: currentPage, limit: 20, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    getInitiatives();
  }, [getInitiatives]);

  const handleNextPage = () => {
    if (currentPage < meta.totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-3"
        >
          Our Initiatives
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Explore the major ideas guiding long-term environmental transformation and climate resilience.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      {/* Initiatives List */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-3 flex justify-center items-center h-64">
            <Loader2 size={48} className="animate-spin text-[#1B5E20]" />
          </div>
        ) : initiatives.length === 0 ? (
          <div className="col-span-3 text-center py-10">
            <p className="text-xl text-gray-700">No initiatives available at the moment.</p>
            <p className="text-gray-500 mt-2">Please check back soon.</p>
          </div>
        ) : (
          initiatives.map((initiative) => (
            <motion.div
              key={initiative.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100"
            >
              <img
                src={initiative.image || "/placeholder.jpg"}
                alt={initiative.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-[#1B5E20] mb-2">
                {initiative.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {initiative.description}
              </p>
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

export default Initiatives;