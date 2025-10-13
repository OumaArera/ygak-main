import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    id: "1",
    title: "Nakuru Tree Drive",
    description:
      "Join YGAK volunteers in Nakuru County for a community-led tree planting drive. This event brings together youth, schools, and local communities to restore the environment and promote climate resilience.",
    county: "Nakuru",
    subCounty: "Nakuru East",
    latitude: -0.3031,
    longitude: 36.0800,
    isApproved: true,
    date: "2025-11-10",
    flyer: "/bg_image.jpg",
  },
  {
    id: "2",
    title: "Youth Climate Forum 2025",
    description:
      "An inspiring youth-centered climate action forum organized by YGAK, bringing together environmental experts, students, and county representatives to discuss sustainable solutions and policy engagement.",
    county: "Nairobi",
    subCounty: "Westlands",
    latitude: -1.2667,
    longitude: 36.8333,
    isApproved: true,
    date: "2025-12-05",
    flyer: "/main.jpg",
  },
  {
    id: "3",
    title: "Rift Valley Greening Schools Initiative Launch",
    description:
      "YGAK officially launches its Greening Schools Initiative across Rift Valley schools. Students will engage in hands-on environmental learning through tree planting and sustainable gardening programs.",
    county: "Uasin Gishu",
    subCounty: "Eldoret East",
    latitude: 0.5204,
    longitude: 35.2698,
    isApproved: true,
    date: "2025-10-25",
    flyer: "background.JPG",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-[#1B5E20] mb-10">
        Upcoming Events
      </h2>

      {events.length === 0 ? (
        <p className="text-gray-600">No upcoming events at the moment.</p>
      ) : (
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-left overflow-hidden flex flex-col"
            >
              {/* Event Flyer */}
              {event.flyer ? (
                <img
                  src={event.flyer}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-green-100 flex items-center justify-center text-green-800 font-semibold">
                  No Flyer Available
                </div>
              )}

              {/* Event Info */}
              <div className="p-5 flex-grow">
                <h3 className="font-semibold text-lg text-[#1B5E20] mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                  <CalendarDays size={16} className="text-green-700" />
                  {new Date(event.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                  <MapPin size={16} className="text-green-700" />
                  {event.county}, {event.subCounty}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                  {event.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5">
                <a
                  href={`/events/${event.id}`}
                  className="inline-block mt-2 bg-[#1B5E20] hover:bg-[#145A24] text-white text-sm font-semibold px-4 py-2 rounded-full shadow transition"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* CTA */}
      <a
        href="/events"
        className="mt-12 inline-block bg-[#1B5E20] hover:bg-[#145A24] text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
      >
        View Full Calendar
      </a>
    </section>
  );
};

export default UpcomingEvents;
