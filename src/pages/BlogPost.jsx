import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { getData } from "../services/apiService"; 

const ContentRenderer = ({ paragraphs }) => {
  if (!paragraphs || paragraphs.length === 0) {
    return <p className="text-gray-500 italic">No content available for this post.</p>;
  }

  return (
    <div className="prose prose-green max-w-none text-gray-800">
      {paragraphs.sort((a, b) => a.order - b.order).map((block, index) => (
        <React.Fragment key={index}>
          {block.type === "text" && <p>{block.content}</p>}
          {block.type === "image" && (
            <figure className="my-6">
              <img
                src={block.content}
                alt={block.caption || "Blog Image"}
                className="w-full rounded-lg shadow-lg"
              />
              {block.caption && (
                <figcaption className="text-center text-sm text-gray-500 italic mt-2">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPost = async () => {
    try {
      setLoading(true);
      const endpoint = `blogs/${id}`;
      const response = await getData(endpoint);
      setPost(response?.data || null);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      setPost(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-28 text-center min-h-screen flex flex-col justify-center items-center">
        <Loader2 size={36} className="animate-spin text-green-700 mb-4" />
        <h2 className="text-xl text-gray-700 font-medium">Fetching Story...</h2>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-28 text-center text-gray-700 min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Post Not Found 😔</h2>
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
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto object-cover rounded-lg mb-6"
            />
          )}
          <h1 className="text-3xl font-bold text-[#1B5E20] mb-2">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            {post.author} • {new Date(post.publishedAt).toLocaleDateString()} •{" "}
            {post.category}
          </p>

          <ContentRenderer paragraphs={post.paragraphs} />

          {post.sources && post.sources.length > 0 && (
            <div className="mt-8 border-t border-gray-200 pt-4">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Sources:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                {post.sources.map((source, index) => (
                  <li key={index}>
                    <a 
                      href={source.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-green-700 hover:underline"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

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