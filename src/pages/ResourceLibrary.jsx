import React, { useState } from "react";
import { motion } from "framer-motion";
import ResourceFilters from "../components/resources/ResourceFilters";
import ResourceSearch from "../components/resources/ResourceSearch";
import ResourceCard from "../components/resources/ResourceCard";
import DownloadModal from "../components/resources/DownloadModal";

const sampleResources = [
  {
    id: 1,
    title: "Youth and Climate Action in Kenya: Policy Brief 2025",
    description:
      "An analysis of youth involvement in Kenya’s climate policy framework and sustainable practices.",
    category: "Policy Brief",
    author: "Youths for Green Action Kenya",
    date: "2025-09-10",
    file: "/John Ouma - 2024-09-20.pdf",
  },
  {
    id: 2,
    title: "Tree Restoration and Biodiversity Report 2024",
    description:
      "Comprehensive report on Kenya’s reforestation initiatives and biodiversity conservation measures.",
    category: "Research Paper",
    author: "YFGAK Research Division",
    date: "2024-12-01",
    file: "/John Ouma - 2024-09-20.pdf",
  },
  {
    id: 3,
    title: "Environmental Education Toolkit for Schools",
    description:
      "A step-by-step guide to integrating sustainability into school curriculums.",
    category: "Educational Material",
    author: "YFGAK Education Team",
    date: "2025-02-15",
    file: "/John Ouma - 2024-09-20.pdf",
  },
];

const ResourceLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedResource, setSelectedResource] = useState(null);

  const filteredResources = sampleResources.filter((resource) => {
    const matchesCategory =
      selectedCategory === "All" || resource.category === selectedCategory;
    const matchesSearch = resource.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-3"
        >
          Resource Library
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Explore research, policy briefs, and educational materials curated by
          Youths for Green Action Kenya. Use the search and filters to find the
          content you need.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <ResourceFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ResourceSearch setSearchTerm={setSearchTerm} />
      </div>

      {/* Resource List */}
      <section className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ResourceCard
                resource={resource}
                onDownload={() => setSelectedResource(resource)}
              />
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 italic">
            No resources found for your selection.
          </p>
        )}
      </section>

      {/* Download Modal */}
      {selectedResource && (
        <DownloadModal
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
        />
      )}
    </div>
  );
};

export default ResourceLibrary;
