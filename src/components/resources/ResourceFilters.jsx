import React from "react";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Policy Brief",
  "Research Paper",
  "Educational Material",
  "Agriculture & Environment",
];

const ResourceFilters = ({ selectedCategory, setSelectedCategory, author, setAuthor }) => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-3 items-center">
      {/* Category Filters */}
      {categories.map((category, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selectedCategory === category
              ? "bg-[#1B5E20] text-white shadow-md"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          {category}
        </motion.button>
      ))}

      {/* Author Filter Input */}
      <input
        type="text"
        placeholder="Filter by author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border border-gray-300 rounded-full px-4 py-2 text-sm ml-2 focus:outline-none focus:ring-1 focus:ring-green-600"
      />
    </div>
  );
};

export default ResourceFilters;
