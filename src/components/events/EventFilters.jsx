import React from "react";

const counties = ["All", "Nakuru", "Nairobi", "Uasin Gishu"];

const EventFilters = ({ selectedCounty, setSelectedCounty }) => {
  return (
    <div className="flex justify-center mb-8">
      <select
        value={selectedCounty}
        onChange={(e) => setSelectedCounty(e.target.value)}
        className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:ring-green-600 focus:border-green-600"
      >
        {counties.map((county) => (
          <option key={county} value={county}>
            {county}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EventFilters;
