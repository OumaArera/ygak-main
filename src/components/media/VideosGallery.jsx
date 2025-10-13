import React from "react";
import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    title: "Greening Schools Initiative 2025",
    embedUrl: "https://www.youtube.com/embed/vNZaXwfO5ZM",
  },
  {
    id: 2,
    title: "Kipkabus Forest 100,000 Trees Initiative",
    embedUrl: "https://www.youtube.com/embed/e40VmS3hJDU",
  },
  {
    id: 3,
    title: "Mombasa 35,000 Mangroves Initiative",
    embedUrl: "https://www.youtube.com/embed/pr18CCpL7eY",
  },
  {
    id: 4,
    title: "August Tree Planting Challenge 2023",
    embedUrl: "https://www.youtube.com/embed/Syjg9uaRuko",
  },
  {
    id: 5,
    title: "Narok 100,000 Trees Campaign",
    embedUrl: "https://www.youtube.com/embed/AGz8arBtpds",
  },
];

const VideosGallery = () => {
  return (
    <section className="grid sm:grid-cols-2 gap-8">
      {videos.map((video) => (
        <motion.div
          key={video.id}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow overflow-hidden"
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={video.embedUrl}
              title={video.title}
              allowFullScreen
              className="w-full h-64"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-green-800">
              {video.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default VideosGallery;
