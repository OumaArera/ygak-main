import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowLeft, ArrowRight } from "lucide-react";
import BlogCard from "../components/blog/BlogCard";
import CategoryFilter from "../components/blog/CategoryFilter";
import SearchInput from "../components/common/SearchInput";
import { getData } from "../services/apiService";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 10, totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);

  const getBlogPosts = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint = "blogs";
      const params = {
        page: currentPage,
        limit: 10,
      };

      if (selectedCategory !== "All") {
        params.category = selectedCategory;
      }
      if (searchTerm.trim()) {
        params.title = searchTerm.trim();
      }

      const response = await getData(endpoint, params);
      
      setPosts(response?.data?.data || []);
      setMeta(response?.data?.meta || { total: 0, page: currentPage, limit: 10, totalPages: 1 });

      const uniqueCategories = [
        ...new Set((response?.data?.data || []).map((p) => p.category)),
      ].filter(c => c); 
      setCategories(uniqueCategories);

    } catch (error) {
      console.error("Error fetching blogs:", error);
      setPosts([]);
      setMeta({ total: 0, page: currentPage, limit: 10, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  }, [currentPage, selectedCategory, searchTerm]);

  useEffect(() => {
    getBlogPosts();
  }, [getBlogPosts]);

  const handleFilterChange = (setter) => (value) => {
    setter(value);
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < meta.totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Blog & News 📰
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Stay informed with the latest stories, updates, and climate action
          insights from Youths for Green Action Kenya.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-10">
        <SearchInput setSearchTerm={handleSearch} placeholder="Search blog titles..." />
      </div>

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        setSelected={handleFilterChange(setSelectedCategory)}
      />

      <section className="max-w-6xl mx-auto px-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 size={48} className="animate-spin text-[#1B5E20]" />
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500 italic py-10">
            No posts found for the selected criteria. Try adjusting the filter or search term.
          </p>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            {meta.totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-12">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1 || loading}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition ${
                    currentPage === 1 || loading
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#1B5E20] text-white hover:bg-[#145A24]"
                  }`}
                >
                  <ArrowLeft size={18} />
                  <span>Previous</span>
                </button>

                <span className="text-gray-700 font-medium">
                  Page {currentPage} of {meta.totalPages}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === meta.totalPages || loading}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition ${
                    currentPage === meta.totalPages || loading
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#1B5E20] text-white hover:bg-[#145A24]"
                  }`}
                >
                  <span>Next</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default Blog;

