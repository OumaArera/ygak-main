import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { sampleBlogPost } from "../data/blogPosts";

const ContentRenderer = ({ paragraphs }) => {
  if (!paragraphs || paragraphs.length === 0) {
    return <p className="text-gray-500 italic">No content available for this post.</p>;
  }

  const sorted = [...paragraphs].sort((a, b) => a.order - b.order);

  return (
    <div className="text-gray-800">
      {sorted.map((block, index) => {
        if (block.type === "text") {
          return (
            <p
              key={index}
              className={`leading-relaxed text-[1.05rem] text-gray-700 mb-5 ${
                index === 0
                  ? "first-letter:text-5xl first-letter:font-bold first-letter:text-[#1B5E20] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-none"
                  : ""
              }`}
            >
              {block.content}
            </p>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={index} className="my-8">
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
          );
        }

        return null;
      })}
    </div>
  );
};

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPost = sampleBlogPost.find((p) => p.id.toString() === id) || null;
    setPost(foundPost);
    setLoading(false);
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
      <div className="max-w-3xl mx-auto px-6">
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
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}

          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#1B5E20] bg-green-50 border border-green-200 rounded-full px-3 py-1 mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl font-bold text-[#1B5E20] mb-3 leading-snug">
            {post.title}
          </h1>

          <p className="text-sm text-gray-400 mb-8 flex items-center gap-2">
            <span className="font-medium text-gray-600">{post.author}</span>
            <span>·</span>
            <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </p>

          <hr className="border-gray-100 mb-8" />

          <ContentRenderer paragraphs={post.paragraphs} />

          {post.sources && post.sources.length > 0 && (
            <div className="mt-10 border-t border-gray-200 pt-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Sources
              </h3>
              <ul className="space-y-1">
                {post.sources.map((source, index) => (
                  <li key={index} className="text-sm">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1B5E20] hover:underline"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 border-t border-gray-100 pt-6">
            <h3 className="text-lg font-semibold text-[#1B5E20] mb-3">Comments</h3>
            <p className="text-sm text-gray-400 italic">Comment system coming soon...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;