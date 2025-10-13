import React from "react";
import { FileText, Download } from "lucide-react";
import { motion } from "framer-motion";

const ResourceCard = ({ resource, onDownload }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 transition"
    >
      <div className="flex items-center space-x-3 mb-3">
        <FileText size={24} className="text-green-700" />
        <div>
          <h3 className="font-semibold text-lg text-green-800">
            {resource.title}
          </h3>
          <p className="text-xs text-gray-500">
            {resource.category} • {new Date(resource.date).toDateString()}
          </p>
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-4 leading-relaxed">
        {resource.description}
      </p>
      <p className="text-xs text-gray-500 mb-4">By {resource.author}</p>
      <button
        onClick={onDownload}
        className="flex items-center justify-center w-full bg-[#1B5E20] text-white font-semibold py-2 rounded-full hover:bg-[#145A24] transition"
      >
        <Download size={18} className="mr-2" /> Download
      </button>
    </motion.div>
  );
};

export default ResourceCard;
