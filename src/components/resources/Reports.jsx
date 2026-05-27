import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, FileText, Download } from "lucide-react";
import { sampleReports } from "../../data/reports.data";

const PER_PAGE = 3;

const Reports = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(sampleReports.length / PER_PAGE);
  const displayedReports = sampleReports.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-3 relative z-10"
        >
          Reports
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto relative z-10">
          Access annual, sustainability, and impact reports by Youths for Green Action Kenya.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      {/* Reports Grid */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedReports.map((report) => (
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
              <p className="text-gray-500 text-sm mb-3">
                {new Date(report.date).toDateString()}
              </p>
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
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-10">
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
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
            onClick={() => setCurrentPage((p) => p + 1)}
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
    </div>
  );
};

export default Reports;