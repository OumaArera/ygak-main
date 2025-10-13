import React, { useState } from "react";
import { motion } from "framer-motion";
import DonateModal from "./DonateModal";
import VolunteerFormModal from "./VolunteerFormModal";

const HeroSection = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);

  return (
    <section className="relative -top-4 h-screen flex items-center justify-center text-center bg-black/50 overflow-hidden">
      {/* Background */}
      <img
        src="/output_optimized.gif"
        alt="Youth planting trees"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 text-white"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Empowering Youth for a <span className="text-green-400">Greener Kenya</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Join us in driving sustainable change, one community at a time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setShowDonateModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Donate Now
          </button>
          <button
            onClick={() => setShowVolunteerModal(true)}
            className="bg-white text-green-700 hover:bg-green-50 px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Join as Volunteer
          </button>
          <a
            href="/about"
            className="border border-white text-white hover:bg-white hover:text-green-700 px-6 py-3 rounded-full font-semibold transition"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Modals */}
      <DonateModal isOpen={showDonateModal} onClose={() => setShowDonateModal(false)} />
      <VolunteerFormModal isOpen={showVolunteerModal} onClose={() => setShowVolunteerModal(false)} />
    </section>
  );
};

export default HeroSection;
