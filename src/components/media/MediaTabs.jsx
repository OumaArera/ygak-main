import React from "react";

const MediaTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "photos", label: "Photos" },
    { id: "videos", label: "Videos" },
    { id: "press", label: "Press Releases" },
  ];

  return (
    <div className="flex justify-center space-x-4 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-5 py-3 font-semibold transition border-b-2 ${
            activeTab === tab.id
              ? "text-green-700 border-green-700"
              : "text-gray-600 hover:text-green-700 border-transparent"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default MediaTabs;
