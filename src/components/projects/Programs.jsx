import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { getData } from "../../services/apiService";

const sampleprograms =[
  {
    "id": 1,
    "title": "Climate-Smart Tree Planting Program",
    "description": "A nationwide youth-driven reforestation initiative focused on restoring degraded landscapes, increasing tree cover, and building climate resilience through community engagement and school-based tree planting campaigns.",
    "image": "/bg_image.jpg"
  },
  {
    "id": 2,
    "title": "Green Schools Initiative",
    "description": "A program designed to empower students across Kenya with environmental education, recycling activities, school gardens, and climate literacy to nurture the next generation of sustainability champions.",
    "image": "/bg_image.jpg"
  },
  {
    "id": 3,
    "title": "Youth Climate Leadership Fellowship",
    "description": "A leadership and mentorship program equipping young climate activists with skills in advocacy, policy engagement, research, and community mobilization for environmental action.",
    "image": "/bg_image.jpg"
  },
  {
    "id": 4,
    "title": "Urban Waste Management & Recycling Program",
    "description": "An initiative focused on responsible waste handling, community clean-ups, plastic waste recycling, and sensitization of urban communities on circular economy practices.",
    "image": "/bg_image.jpg"
  },
  {
    "id": 5,
    "title": "Water Conservation & Community WASH Program",
    "description": "A community-development program aiming to improve access to clean water, promote hygiene education, and support sustainable water management technologies in rural areas.",
    "image": "/bg_image.jpg"
  },
  {
    "id": 6,
    "title": "Agroecology & Sustainable Farming Training",
    "description": "A program that trains youth and smallholder farmers on regenerative agriculture, soil restoration, organic farming techniques, and climate-resilient crop production.",
    "image": "/bg_image.jpg"
  }
]


const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 20, totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);

  const getPrograms = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint = "programs";
      const params = { page: currentPage, limit: 20 };

      const response = await getData(endpoint, params);
      setPrograms(response?.data?.data || sampleprograms);
      setMeta(response?.data?.meta || { total: 0, page: currentPage, limit: 20, totalPages: 1 });
    } catch (error) {
      console.error("Error fetching programs:", error);
      setPrograms([]);
      setMeta({ total: 0, page: currentPage, limit: 20, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    getPrograms();
  }, [getPrograms]);

  const handleNextPage = () => {
    if (currentPage < meta.totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
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
          Our Programs
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Discover the initiatives driving environmental stewardship and youth empowerment across Kenya.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-3 flex justify-center items-center h-64">
            <Loader2 size={48} className="animate-spin text-[#1B5E20]" />
          </div>
        ) : programs.length === 0 ? (
          <div className="col-span-3 text-center py-10">
            <p className="text-xl text-gray-700">No programs found at this time.</p>
            <p className="text-gray-500 mt-2">Please check back soon.</p>
          </div>
        ) : (
          programs.map((program) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100"
            >
              <img
                src={program.image || "/placeholder.jpg"}
                alt={program.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-[#1B5E20] mb-2">{program.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">{program.description}</p>
            </motion.div>
          ))
        )}
      </div>

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

export default Programs;
