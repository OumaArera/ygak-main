import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const themes = [
  "All",
  "Reforestation",
  "Waste Management",
  "Environmental Education",
  "Climate Action",
];

const FilterBar = ({ selectedTheme, setSelectedTheme, searchTitle, setSearchTitle }) => {
  return (
    <div className="bg-white shadow-sm py-4 px-4 sm:px-8 flex flex-wrap justify-center gap-4 border-b border-gray-100">
      {/* Theme Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {themes.map((theme, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedTheme(theme)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedTheme === theme
                ? "bg-[#1B5E20] text-white shadow-md"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {theme}
          </motion.button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative w-full sm:w-80 mt-3 sm:mt-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
        />
      </div>
    </div>
  );
};

export default FilterBar;
