import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "../components/blog/BlogCard";
import CategoryFilter from "../components/blog/CategoryFilter";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  const categories = [...new Set(blogPosts.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Blog & News
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Stay informed with the latest stories, updates, and climate action
          insights from Youths for Green Action Kenya.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      {/* Filters */}
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
};

export default Blog;
