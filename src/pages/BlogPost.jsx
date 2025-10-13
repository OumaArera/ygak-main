import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="pt-28 text-center text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Post Not Found</h2>
        <Link to="/blog" className="text-green-700 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          to="/blog"
          className="flex items-center text-green-700 hover:text-green-800 mb-6 font-medium"
        >
          <ArrowLeft size={18} className="mr-1" /> Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold text-[#1B5E20] mb-2">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            {post.author} • {new Date(post.date).toLocaleDateString()} •{" "}
            {post.category}
          </p>

          <div
            className="prose prose-green max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-8 border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Tags:
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Placeholder for comment system */}
          <div className="mt-10 border-t border-gray-100 pt-6">
            <h3 className="text-lg font-semibold text-[#1B5E20] mb-3">
              Comments
            </h3>
            <p className="text-sm text-gray-500 italic">
              Comment system coming soon...
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
