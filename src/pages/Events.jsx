import React, { useState } from "react";
import { motion } from "framer-motion";
import EventCalendar from "../components/events/EventCalendar";
import EventFilters from "../components/events/EventFilters";

const sampleEvents = [
  {
    id: "1",
    title: "Nakuru Tree Drive",
    description:
      "Community-driven tree planting and clean-up event across Nakuru County.",
    county: "Nakuru",
    subCounty: "Nakuru Town West",
    latitude: -0.3031,
    longitude: 36.0800,
    isApproved: true,
    date: "2025-10-18",
    flyer: "/background.JPG",
  },
  {
    id: "2",
    title: "Youth Climate Forum",
    description:
      "A youth-led forum discussing climate policy and green entrepreneurship.",
    county: "Nairobi",
    subCounty: "Westlands",
    latitude: -1.2921,
    longitude: 36.8219,
    isApproved: true,
    date: "2025-11-05",
    flyer: "/background.JPG",
  },
  {
    id: "3",
    title: "Rift Valley Greening Schools Initiative Launch",
    description:
      "YGAK launches Greening Schools Initiative. Students engage in hands-on environmental learning through tree planting and sustainable gardening.",
    county: "Uasin Gishu",
    subCounty: "Eldoret East",
    latitude: 0.5204,
    longitude: 35.2698,
    isApproved: true,
    date: "2025-10-25",
    flyer: "/background.JPG",
  },
];

const Events = () => {
  const [selectedCounty, setSelectedCounty] = useState("All");

  const filteredEvents =
    selectedCounty === "All"
      ? sampleEvents
      : sampleEvents.filter((e) => e.county === selectedCounty);

  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-3"
        >
          Upcoming Events & Calendar
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Explore our upcoming activities, tree planting drives, and climate action events happening across Kenya.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <EventFilters
          selectedCounty={selectedCounty}
          setSelectedCounty={setSelectedCounty}
        />
        <EventCalendar events={filteredEvents} />
      </div>
    </div>
  );
};

export default Events;
