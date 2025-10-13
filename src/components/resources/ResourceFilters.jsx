import React from "react";

const categories = ["All", "Research Paper", "Policy Brief", "Educational Material"];

const ResourceFilters = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:ring-green-600 focus:border-green-600 text-sm"
      >
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default ResourceFilters;
