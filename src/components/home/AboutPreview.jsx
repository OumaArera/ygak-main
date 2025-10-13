import React from "react";
import { motion } from "framer-motion";

const AboutPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left grid md:grid-cols-2 gap-10 items-center">
        {/* Replace with about image */}
        <img
          src="/main.jpg"
          alt="YGAK in a nutshell"
          className="rounded-2xl shadow-lg object-cover h-80 w-full"
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#1B5E20] mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Youths for Green Action Kenya (YGAK) empowers young people to lead
            environmental sustainability initiatives — from tree planting and
            waste management to climate advocacy across Kenya.
          </p>
          <a
            href="/about"
            className="inline-block bg-[#1B5E20] hover:bg-[#145A24] text-white px-5 py-3 rounded-full font-semibold transition"
          >
            Read More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
