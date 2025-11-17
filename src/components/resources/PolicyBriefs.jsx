import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, FileText, Download, Loader2 } from "lucide-react";

// Sample policy briefs
const samplePolicyBriefs = [
  {
    id: 1,
    title: "Service Reports Sample",
    description: "A sample policy brief illustrating best practices and service delivery guidelines.",
    file: "/service_reports_sample.pdf",
    date: "2025-01-05",
  },
  {
    id: 2,
    title: "Environmental Policy Framework 2024",
    description: "A comprehensive policy brief on environmental governance and sustainable development.",
    file: "/service_reports_sample.pdf",
    date: "2024-12-10",
  },
  {
    id: 3,
    title: "Youth Engagement in Climate Action",
    description: "Policy brief highlighting youth-led initiatives and their impact on climate policies.",
    file: "/service_reports_sample.pdf",
    date: "2025-03-15",
  },
  {
    id: 4,
    title: "Sustainable Agriculture & Community Development",
    description: "Policy recommendations to enhance sustainable farming and community engagement.",
    file: "/service_reports_sample.pdf",
    date: "2025-02-20",
  },
];

const PolicyBriefs = () => {
  const [briefs, setBriefs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 3, totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch briefs (replace with real API call when available)
  const getBriefs = useCallback(async () => {
    try {
      setLoading(true);
      // Simulate API call
      setBriefs(samplePolicyBriefs);
      setMeta({
        total: samplePolicyBriefs.length,
        page: currentPage,
        limit: 3,
        totalPages: Math.ceil(samplePolicyBriefs.length / 3),
      });
    } catch (error) {
      console.error("Error fetching policy briefs:", error);
      setBriefs([]);
      setMeta({ total: 0, page: currentPage, limit: 3, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    getBriefs();
  }, [getBriefs]);

  const handleNextPage = () => {
    if (currentPage < meta.totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
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
          Policy Briefs
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Access policy briefs and recommendations on environmental and youth development initiatives.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      {/* Policy Brief Cards */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-3 flex justify-center items-center h-64">
            <Loader2 size={48} className="animate-spin text-[#1B5E20]" />
          </div>
        ) : briefs.length === 0 ? (
          <div className="col-span-3 text-center py-10">
            <p className="text-xl text-gray-700">No policy briefs available.</p>
            <p className="text-gray-500 mt-2">Please check back later.</p>
          </div>
        ) : (
          briefs.map((brief) => (
            <motion.div
              key={brief.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#1B5E20] mb-2 flex items-center gap-2">
                  <FileText size={20} /> {brief.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{new Date(brief.date).toDateString()}</p>
                <p className="text-gray-600 text-sm line-clamp-4">{brief.description}</p>
              </div>
              <a
                href={brief.file}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center space-x-2 bg-[#1B5E20] hover:bg-[#145A24] text-white px-4 py-2 rounded-full font-semibold transition"
              >
                <Download size={18} /> <span>Download PDF</span>
              </a>
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

export default PolicyBriefs;
