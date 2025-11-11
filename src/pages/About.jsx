import React from "react";
import { motion } from "framer-motion";
import MissionVisionValues from "../components/about/MissionVisionValues";
import LeadershipTeam from "../components/about/LeadershipTeam";
import HistoryTimeline from "../components/about/HistoryTimeline";
import DocumentsSection from "../components/about/DocumentsSection";


const About = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug sm:leading-tight">
            About Youths for Green Action Kenya
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-green-100 leading-relaxed">
            We are a youth-led organization dedicated to driving climate action,
            environmental education, and sustainable community transformation
            across Kenya.
          </p>
        </motion.div>
         <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      {/* Mission, Vision, Values */}
      <section className="px-4 sm:px-6 lg:px-8">
        <MissionVisionValues />
      </section>

      {/* Leadership */}
      <section className="px-4 sm:px-6 lg:px-8">
        <LeadershipTeam />
      </section>

      {/* History Timeline */}
      <section className="px-4 sm:px-6 lg:px-8">
        <HistoryTimeline />
      </section>

      {/* Downloadable Documents */}
      <section className="px-4 sm:px-6 lg:px-8 mb-10">
        <DocumentsSection />
      </section>
    </div>
  );
};

export default About;
