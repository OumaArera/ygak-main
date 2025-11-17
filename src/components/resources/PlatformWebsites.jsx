import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Loader2 } from "lucide-react";

// Sample Platforms
const samplePlatforms = [
  {
    id: 1,
    name: "TreeCare Kenya",
    description: "A dedicated platform for youth-led tree planting initiatives, tracking progress and community engagement.",
    url: "https://zafrika.com",
    image: "/logo.png",
  },
  {
    id: 2,
    name: "Green Schools Hub",
    description: "Resources, guides, and activities empowering schools across Kenya to adopt sustainable and eco-friendly practices.",
    url: "https://greenschoolshub.org",
    image: "/zafrika_logo.png",
  },
  {
    id: 3,
    name: "Youth Climate Forum",
    description: "A platform for youth climate leaders to collaborate, share ideas, and engage with policy initiatives.",
    url: "https://zafrika.com",
    image: "/zafrika_logo.png",
  },
];

const PlatformWebsites = () => {
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPlatforms = useCallback(async () => {
    try {
      setLoading(true);
      // Replace with actual API call later
      setPlatforms(samplePlatforms);
    } catch (error) {
      console.error("Error fetching platform websites:", error);
      setPlatforms([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPlatforms();
  }, [getPlatforms]);

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
          Platform Websites
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Explore YGAK’s associated platforms and discover projects, resources, and initiatives across Kenya.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      {/* Platform Cards */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-3 flex justify-center items-center h-64">
            <Loader2 size={48} className="animate-spin text-[#1B5E20]" />
          </div>
        ) : platforms.length === 0 ? (
          <div className="col-span-3 text-center py-10">
            <p className="text-xl text-gray-700">No platform websites are available at this moment.</p>
            <p className="text-gray-500 mt-2">Please check back later.</p>
          </div>
        ) : (
          platforms.map((platform, idx) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-100 overflow-hidden flex flex-col"
            >
              <img
                src={platform.image || "/placeholder.jpg"}
                alt={platform.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#1B5E20] mb-2">{platform.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{platform.description}</p>
                </div>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center space-x-2 bg-[#1B5E20] hover:bg-[#145A24] text-white px-4 py-2 rounded-full font-semibold transition"
                >
                  <span>Visit Platform</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default PlatformWebsites;
