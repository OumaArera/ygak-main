import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const DownloadModal = ({ resource, onClose }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Simulate tracking
    console.log(`Download tracked for: ${resource.title}`);
    setTimeout(() => {
      setDownloading(false);
      window.open(resource.file, "_blank");
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-green-700"
          >
            <X size={22} />
          </button>
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-3">
            Confirm Download
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            You are about to download:{" "}
            <span className="font-semibold">{resource.title}</span>.  
            Your download activity will be recorded for analytics purposes.
          </p>
          <button
            onClick={handleDownload}
            disabled={downloading}
            className={`w-full py-2 rounded-full text-white font-semibold transition ${
              downloading
                ? "bg-green-400 cursor-wait"
                : "bg-[#1B5E20] hover:bg-[#145A24]"
            }`}
          >
            {downloading ? "Preparing Download..." : "Download Now"}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DownloadModal;
