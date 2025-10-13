import React from "react";
import { motion } from "framer-motion";

const themes = [
  "All",
  "Reforestation",
  "Waste Management",
  "Environmental Education",
  "Climate Action",
];

const FilterBar = ({ selectedTheme, setSelectedTheme }) => {
  return (
    <div className="bg-white shadow-sm py-4 px-4 sm:px-8 flex flex-wrap justify-center gap-3 border-b border-gray-100">
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
  );
};

export default FilterBar;
