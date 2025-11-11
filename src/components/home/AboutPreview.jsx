import React from "react";
import { motion } from "framer-motion";

const AboutPreview = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-full h-full bg-green-200 rounded-3xl blur-lg opacity-40"></div>
          <img
            src="/main.jpg"
            alt="YGAK in action"
            className="relative rounded-3xl shadow-2xl object-cover w-full h-[24rem] transform hover:scale-[1.02] transition duration-700"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center md:text-left"
        >
          <div className="inline-block mb-4">
            <span className="inline-block h-1 w-16 bg-green-600 rounded-full"></span>
          </div>
          <h2 className="text-4xl font-extrabold mb-4 text-[#1B5E20] leading-snug">
            Our <span className="text-green-500 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Story</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-lg">
            Youths for Green Action Kenya (YGAK) empowers young people to lead
            impactful environmental sustainability initiatives — from tree
            planting and waste management to climate advocacy and community-led
            restoration programs across Kenya.
          </p>
          <a
            href="/about/our-story"
            className="inline-flex items-center justify-center bg-[#1B5E20] hover:bg-[#145A24] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
