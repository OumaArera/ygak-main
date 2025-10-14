import React, { useEffect } from "react";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Notification = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const baseClasses = "fixed bottom-5 right-5 p-4 rounded-lg shadow-xl flex items-center space-x-3 max-w-sm z-50";
  let colorClasses = "";
  let Icon = X;

  switch (type) {
    case "success":
      colorClasses = "bg-green-600 text-white";
      Icon = CheckCircle;
      break;
    case "error":
      colorClasses = "bg-red-600 text-white";
      Icon = AlertTriangle;
      break;
    default:
      colorClasses = "bg-gray-700 text-white";
      Icon = AlertTriangle;
      break;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className={`${baseClasses} ${colorClasses}`}
        >
          <Icon size={24} />
          <p className="flex-grow text-sm font-medium">{message}</p>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 transition">
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;