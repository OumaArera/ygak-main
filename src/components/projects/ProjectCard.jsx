import React from "react";
import { Star, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { shareProject } from "../../utils/shareUtils";


const ProjectCard = ({ project }) => {
  const handleShare = () => {
    shareProject(project);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-semibold text-[#1B5E20] mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{project.theme}</p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Interactive Features */}
        <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-3">
          <div className="flex items-center space-x-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-yellow-400" />
            ))}
          </div>

          {/* Share Button */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="text-gray-500 hover:text-green-700 transition"
            title="Share this project"
          >
            <Share2 size={20} />
          </motion.button>
        </div>

        {/* CTA */}
        <a
          href={`/projects/${project.id}`}
          className="mt-4 text-center inline-block bg-[#1B5E20] text-white text-sm font-semibold py-2 rounded-full hover:bg-[#145A24] transition"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
