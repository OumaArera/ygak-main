import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2, Mail, X } from "lucide-react";
import { getData } from "../../services/apiService";

// Sample newsletter data
const sampleNewsletters = [
  {
    id: 1,
    title: "January 2025 Newsletter",
    excerpt: "Highlights from our tree planting campaigns and youth engagement programs across Kenya.",
    date: "2025-01-31",
    content: `In January 2025, YGAK mobilized over 2,000 youth volunteers across five counties for tree planting initiatives. We also held workshops on climate literacy in 12 schools, reaching over 1,500 students. Success stories include community clean-ups and renewable energy awareness campaigns.`,
    pdf: "/newsletters/january-2025.pdf",
  },
  {
    id: 2,
    title: "February 2025 Newsletter",
    excerpt: "Updates on new partnerships, climate dialogues, and youth leadership programs.",
    date: "2025-02-28",
    content: `February focused on building partnerships with county governments to enhance youth climate leadership. Our Youth Climate Dialogue 2025 gathered over 200 participants to discuss actionable strategies for sustainable development.`,
    pdf: "/newsletters/february-2025.pdf",
  },
  {
    id: 3,
    title: "March 2025 Newsletter",
    excerpt: "Coverage of national tree planting day and green innovation initiatives.",
    date: "2025-03-31",
    content: `March marked our National Tree Planting Day, where volunteers planted 10,000 trees nationwide. We also launched the Green Innovation Hub supporting youth-led eco-enterprises.`,
    pdf: "/newsletters/march-2025.pdf",
  },
  // Add more sample newsletters as needed
];

const Newsletters = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 5, totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNewsletter, setSelectedNewsletter] = useState(null);

  const getNewsletters = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint = "newsletters";
      const params = { page: currentPage, limit: 5 };

      const response = await getData(endpoint, params);
      setNewsletters(response?.data?.data || sampleNewsletters);
      setMeta(
        response?.data?.meta || {
          total: sampleNewsletters.length,
          page: currentPage,
          limit: 5,
          totalPages: Math.ceil(sampleNewsletters.length / 5),
        }
      );
    } catch (error) {
      console.error("Error fetching newsletters:", error);
      setNewsletters([]);
      setMeta({ total: 0, page: currentPage, limit: 5, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    getNewsletters();
  }, [getNewsletters]);

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
          Newsletters
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Browse all past newsletters and stay informed about YGAK activities. Subscription is optional.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Newsletter Cards */}
        <div className="lg:col-span-1 space-y-4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 size={48} className="animate-spin text-[#1B5E20]" />
            </div>
          ) : newsletters.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-700">No newsletters available at this time.</p>
            </div>
          ) : (
            newsletters.map(n => (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer p-4 border border-gray-100"
                onClick={() => setSelectedNewsletter(n)}
              >
                <h3 className="font-semibold text-[#1B5E20] mb-1 flex items-center gap-2">
                  <Mail size={16} /> {n.title}
                </h3>
                <p className="text-gray-500 text-xs mb-1">{new Date(n.date).toDateString()}</p>
                <p className="text-gray-600 text-sm line-clamp-3">{n.excerpt}</p>
              </motion.div>
            ))
          )}
        </div>

        {/* Right Column: Detailed Newsletter */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 min-h-[400px]">
          {selectedNewsletter ? (
            <motion.div
              key={selectedNewsletter.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-[#1B5E20]">{selectedNewsletter.title}</h2>
                <button
                  onClick={() => setSelectedNewsletter(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-500 mb-4">{new Date(selectedNewsletter.date).toDateString()}</p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedNewsletter.content}</p>
              {selectedNewsletter.pdf && (
                <a
                  href={selectedNewsletter.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-[#1B5E20] hover:bg-[#145A24] text-white px-4 py-2 rounded-lg transition"
                >
                  Download PDF
                </a>
              )}
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center">
              <Mail size={48} className="mb-4" />
              <p>Select a newsletter to read its details here.</p>
            </div>
          )}

          {/* Subscription Form */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-2 text-[#1B5E20]">Subscribe to Newsletters</h3>
            <form className="flex items-center bg-gray-100 rounded-full overflow-hidden max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow px-3 py-2 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#1B5E20] hover:bg-[#145A24] text-white font-semibold px-4 py-2 rounded-r-full transition"
              >
                Subscribe
              </button>
            </form>
          </div>
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

export default Newsletters;
