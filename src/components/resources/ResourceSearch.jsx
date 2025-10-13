import React from "react";
import { Search } from "lucide-react";

const ResourceSearch = ({ setSearchTerm }) => {
  return (
    <div className="relative w-full sm:w-80">
      <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      <input
        type="text"
        placeholder="Search resources..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-green-600 focus:border-green-600 text-sm"
      />
    </div>
  );
};

export default ResourceSearch;
