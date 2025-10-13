import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
  >
    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-green-800 mb-2">{post.title}</h3>
      <p className="text-sm text-gray-500 mb-2">
        {post.category} • {new Date(post.date).toLocaleDateString()}
      </p>
      <p className="text-gray-700 mb-4 text-sm flex-grow">{post.excerpt}</p>
      <Link
        to={`/blog/${post.id}`}
        className="inline-block text-green-700 font-semibold hover:underline mt-auto"
      >
        Read More →
      </Link>
    </div>
  </motion.div>
);

export default BlogCard;
