import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Download, Loader2, FileText } from "lucide-react";

// Sample corporate documents
const sampleCorporateDocs = [
  {
    id: 1,
    title: "Annual Report 2024",
    description: "Comprehensive annual report highlighting organizational achievements, financials, and strategic direction for 2024.",
    file: "/service_reports_sample.pdf",
    date: "2024-12-31",
  },
  {
    id: 2,
    title: "Corporate Governance Policy",
    description: "Policy outlining governance structures, compliance measures, and operational standards for YGAK.",
    file: "/service_reports_sample.pdf",
    date: "2025-01-15",
  },
  {
    id: 3,
    title: "Strategic Plan 2025-2030",
    description: "Long-term strategic vision, goals, and key initiatives guiding organizational growth and impact.",
    file: "/service_reports_sample.pdf",
    date: "2025-03-01",
  },
  {
    id: 4,
    title: "Financial Statement Q1 2025",
    description: "Quarterly financial statement including income, expenditure, and balance summary for internal and external stakeholders.",
    file: "/service_reports_sample.pdf",
    date: "2025-03-31",
  },
];

const CorporateDocuments = () => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDocs = useCallback(async () => {
    try {
      setLoading(true);
      // Replace with API fetch when ready
      setDocs(sampleCorporateDocs);
    } catch (error) {
      console.error("Error fetching corporate documents:", error);
      setDocs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getDocs();
  }, [getDocs]);

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
          Corporate Documents
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Access official corporate documents, financials, and strategic plans from YGAK.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      {/* Timeline-style Document List */}
      <div className="max-w-5xl mx-auto px-6 mt-12 relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-1 bg-green-700 rounded-full opacity-40"></div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 size={48} className="animate-spin text-[#1B5E20]" />
          </div>
        ) : docs.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-700">No corporate documents available.</p>
            <p className="text-gray-500 mt-2">Please check back later.</p>
          </div>
        ) : (
          docs.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-10 pl-12 flex flex-col sm:flex-row sm:items-center justify-between"
            >
              {/* Dot on the vertical line */}
              <div className="absolute left-0 top-3 w-4 h-4 rounded-full bg-green-700 border-2 border-white shadow-md"></div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#1B5E20] mb-1 flex items-center gap-2">
                  <FileText size={18} /> {doc.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{new Date(doc.date).toDateString()}</p>
                <p className="text-gray-600 text-sm line-clamp-3">{doc.description}</p>
              </div>

              <a
                href={doc.file}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 sm:mt-0 inline-flex items-center space-x-2 bg-[#1B5E20] hover:bg-[#145A24] text-white px-4 py-2 rounded-full font-semibold transition"
              >
                <Download size={18} /> <span>Download PDF</span>
              </a>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default CorporateDocuments;
