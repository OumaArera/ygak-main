import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, ArrowLeft } from "lucide-react";
import EventRegistrationForm from "../components/events/EventRegistrationForm";

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

const EventDetails = () => {
  const { id } = useParams();
  const event = sampleEvents.find((e) => e.id === id);

  if (!event)
    return (
      <div className="pt-28 text-center text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Event Not Found</h2>
        <Link to="/events" className="text-green-700 hover:underline">
          ← Back to Events
        </Link>
      </div>
    );

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <Link
          to="/events"
          className="flex items-center text-green-700 hover:text-green-800 transition font-medium"
        >
          <ArrowLeft size={18} className="mr-1" /> Back to Events
        </Link>
      </div>

      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src={event.flyer}
          alt={event.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-[#1B5E20] mb-2">
            {event.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-4 space-x-4">
            <CalendarDays size={18} />
            <span>{new Date(event.date).toDateString()}</span>
            <MapPin size={18} className="ml-4" />
            <span>
              {event.subCounty}, {event.county}
            </span>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {event.description}
          </p>

          {/* Map Embed */}
          <motion.iframe
            key={event.id}
            src={`https://www.google.com/maps?q=${event.latitude},${event.longitude}&z=14&output=embed`}
            className="w-full h-80 rounded-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          ></motion.iframe>

          <EventRegistrationForm eventTitle={event.title} />
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
