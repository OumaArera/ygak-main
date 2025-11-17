import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, FileText, Loader2, Download } from "lucide-react";
import { getData } from "../../services/apiService";

// Sample placeholder reports
const sampleReports = [
  {
    id: 1,
    title: "Annual Report 2024",
    description: "Comprehensive review of activities, impact, and financials for 2024.",
    file: "/NEST_Authentication_Design_Document_V1.pdf",
    date: "2025-01-15",
  },
  {
    id: 2,
    title: "Annual Report 2023",
    description: "Overview of key achievements, projects, and financial statements of 2023.",
    file: "/NEST_Authentication_Design_Document_V1.pdf",
    date: "2024-01-20",
  },
  {
    id: 3,
    title: "Sustainability Report 2024",
    description: "Insights into YGAK's environmental initiatives and sustainable practices.",
    file: "/NEST_Authentication_Design_Document_V1.pdf",
    date: "2025-03-10",
  },
  {
    id: 4,
    title: "Impact Report 2023",
    description: "Highlights of community projects, tree planting programs, and youth engagements.",
    file: "/NEST_Authentication_Design_Document_V1.pdf",
    date: "2024-04-05",
  },
];

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 3, totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);

  const getReports = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint = "reports";
      const params = { page: currentPage, limit: 3 };

      const response = await getData(endpoint, params);
      setReports(response?.data?.data || sampleReports);
      setMeta(
        response?.data?.meta || {
          total: sampleReports.length,
          page: currentPage,
          limit: 3,
          totalPages: Math.ceil(sampleReports.length / 3),
        }
      );
    } catch (error) {
      console.error("Error fetching reports:", error);
      setReports([]);
      setMeta({ total: 0, page: currentPage, limit: 3, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    getReports();
  }, [getReports]);

  const handleNextPage = () => {
    if (currentPage < meta.totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-3"
        >
          Reports
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Access annual, sustainability, and impact reports by Youths for Green Action Kenya.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      {/* Reports List */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-3 flex justify-center items-center h-64">
            <Loader2 size={48} className="animate-spin text-[#1B5E20]" />
          </div>
        ) : reports.length === 0 ? (
          <div className="col-span-3 text-center py-10">
            <p className="text-xl text-gray-700">No reports available at this time.</p>
            <p className="text-gray-500 mt-2">Check back later for the latest reports.</p>
          </div>
        ) : (
          reports.map((report) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#1B5E20] mb-2 flex items-center gap-2">
                  <FileText size={20} /> {report.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{new Date(report.date).toDateString()}</p>
                <p className="text-gray-600 text-sm line-clamp-4">{report.description}</p>
              </div>
              <a
                href={report.file}
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

export default Reports;
