import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchInput = ({ setSearchTerm, placeholder = "Search..." }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    // Trigger the search action when the button is clicked
    setSearchTerm(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(inputValue);
    }
  };

  return (
    <div className="relative w-full sm:w-80 flex items-center shadow-sm rounded-lg overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-green-600 focus-within:border-green-600 transition">
      {/* Search Icon */}
      <Search className="absolute left-3 text-gray-400" size={20} />
      
      {/* Input Field */}
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className="w-full p-3 pl-10 border-none focus:outline-none" // Added padding-left for the icon
      />
      
      {/* Search Button */}
      <button
        onClick={handleSearchClick}
        disabled={!inputValue.trim()}
        className="bg-green-600 text-white p-3 px-4 h-full hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        aria-label="Search"
        title="Click or press Enter to search"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;