import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const photos = [
  { id: 1, src: "/37402022-42.JPG", caption: "Tree planting drive, Nakuru" },
  { id: 2, src: "/37402022-118.JPG", caption: "Youth clean-up, Kisumu" },
  { id: 3, src: "/37402022-169.JPG", caption: "Community awareness forum" },
  { id: 4, src: "/output_optimized.gif", caption: "Climate Action workshop" },
];

const PhotosGallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
            onClick={() => setSelected(photo)}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="rounded-lg shadow-md object-cover w-full h-56"
            />
            <p className="text-sm text-gray-700 mt-2 text-center">
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative">
              <img
                src={selected.src}
                alt={selected.caption}
                className="max-h-[80vh] rounded-lg shadow-lg"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-2 text-white bg-black/40 p-2 rounded-full hover:bg-black/60"
              >
                <X size={24} />
              </button>
              <p className="text-white text-center mt-4 text-sm">
                {selected.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotosGallery;
