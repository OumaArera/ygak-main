import React, { useState } from "react";
import { motion } from "framer-motion";
import MediaTabs from "../components/media/MediaTabs";
import PhotosGallery from "../components/media/PhotosGallery";
import VideosGallery from "../components/media/VideosGallery";
import PressReleases from "../components/media/PressReleases";

const MediaCenter = () => {
  const [activeTab, setActiveTab] = useState("photos");

  const renderContent = () => {
    switch (activeTab) {
      case "photos":
        return <PhotosGallery />;
      case "videos":
        return <VideosGallery />;
      case "press":
        return <PressReleases />;
      default:
        return <PhotosGallery />;
    }
  };

  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Media Center</h1>
          <p className="text-lg text-green-100">
            Explore our journey through visuals, stories, and press coverage.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-[url('/project.JPG')] bg-cover bg-center opacity-20" />
      </section>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <MediaTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-10">{renderContent()}</div>
      </div>
    </div>
  );
};

export default MediaCenter;
