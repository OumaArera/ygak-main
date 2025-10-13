import React from "react";

const CategoryFilter = ({ categories, selected, setSelected }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8 mt-4">
      {["All", ...categories].map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
            selected === category
              ? "bg-green-600 text-white border-green-600"
              : "bg-white border-gray-300 text-gray-700 hover:bg-green-50"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
