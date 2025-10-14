import React, { useState } from "react";
import { Search } from "lucide-react";

const ResourceSearch = ({ setSearchTerm }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center w-full sm:w-auto">
      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-l-lg px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-green-600"
      />
      <button
        type="submit"
        className="bg-[#1B5E20] text-white px-4 py-2 rounded-r-lg hover:bg-[#145A24] transition flex items-center"
      >
        <Search size={18} />
      </button>
    </form>
  );
};

export default ResourceSearch;
