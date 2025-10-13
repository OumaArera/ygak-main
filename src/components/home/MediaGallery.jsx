import React from "react";
import { motion } from "framer-motion";

const MediaGallery = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#1B5E20] mb-8">Media Gallery</h2>
      {/* Replace with carousel or auto-slide logic */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
        <img src="/path/to/media1.jpg" alt="" className="rounded-lg object-cover" />
        <img src="/path/to/media2.jpg" alt="" className="rounded-lg object-cover" />
        <img src="/path/to/media3.jpg" alt="" className="rounded-lg object-cover" />
      </div>
      <a
        href="/media"
        className="mt-10 inline-block bg-[#1B5E20] hover:bg-[#145A24] text-white px-6 py-3 rounded-full font-semibold transition"
      >
        View Media Center
      </a>
    </section>
  );
};

export default MediaGallery;
