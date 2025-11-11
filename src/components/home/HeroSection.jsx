import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DonateModal from "./DonateModal";
import VolunteerFormModal from "./VolunteerFormModal";

const slides = [
  {
    title: "Climate Action",
    image: "/pillar-climate.jpg",
    description:
      "Empowering youth-led initiatives to combat climate change through reforestation, green energy adoption, and environmental advocacy.",
  },
  {
    title: "Community Empowerment",
    image: "/pillar-community.jpg",
    description:
      "Building local capacity through training, environmental education, and sustainable livelihood programs that foster inclusive growth.",
  },
  {
    title: "Sustainability & Innovation",
    image: "/pillar-sustainability.jpg",
    description:
      "Driving innovative, eco-friendly solutions that promote long-term environmental and economic sustainability across Kenya.",
  },
  {
    title: "Youth Leadership",
    image: "/pillar-leadership.jpg",
    description:
      "Inspiring a generation of changemakers to lead with purpose, responsibility, and a deep commitment to a greener, equitable future.",
  },
];

const HeroSection = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative -top-4 h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/40 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg max-w-xl text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-green-400">
                {slides[current].title}
              </h2>
              <p className="text-sm md:text-base">{slides[current].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full text-white transition focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <ChevronLeft size={24} className="md:size-12" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full text-white transition focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <ChevronRight size={24} className="md:size-12" />
        </button>
      </div>

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 text-white"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Empowering Youth for a{" "}
          <span className="text-green-400">Greener Kenya</span>
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
            href="/about/our-story"
            className="border border-white text-white hover:bg-white hover:text-green-700 px-6 py-3 rounded-full font-semibold transition"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Modals */}
      <DonateModal
        isOpen={showDonateModal}
        onClose={() => setShowDonateModal(false)}
      />
      <VolunteerFormModal
        isOpen={showVolunteerModal}
        onClose={() => setShowVolunteerModal(false)}
      />
    </section>
  );
};

export default HeroSection;
