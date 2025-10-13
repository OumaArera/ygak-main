import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import FilterBar from "../components/projects/FilterBar";

const Projects = () => {
  const [selectedTheme, setSelectedTheme] = useState("All");

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Projects & Activities
          </h1>
          <p className="text-green-100 text-base sm:text-lg">
            Discover how Youths for Green Action Kenya drives environmental change through
            impactful initiatives and youth-led campaigns across the country.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-[url('/project.JPG')] bg-cover bg-center opacity-20" />
      </section>

      {/* Filter Bar */}
      <FilterBar selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />

      {/* Projects Grid */}
      <ProjectsGrid selectedTheme={selectedTheme} />
    </div>
  );
};

export default Projects;
