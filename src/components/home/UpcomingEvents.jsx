import React, { useState, useEffect } from "react";
import { CalendarDays, MapPin, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { getData } from "../../services/apiService";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getEvents = async () => {
    try {
      setLoading(true);
      const todayDate = getTodayDate();
      const endpoint = "upcoming-events";
      const params = {
        page: 1,
        limit: 3, // Fetch max 3 events only
        date: todayDate,
      };
      const response = await getData(endpoint, params);
      setEvents(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <section className="py-20 bg-gray-50 text-center relative overflow-hidden">
      {/* Soft background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-gray-100 opacity-70"></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B5E20] mb-12">
          Upcoming Events
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 size={36} className="animate-spin text-[#1B5E20]" />
          </div>
        ) : events.length === 0 ? (
          <p className="text-gray-600">
            No upcoming events at the moment. Check back soon!
          </p>
        ) : (
          <div
            className={`
              max-w-6xl mx-auto flex flex-wrap justify-center gap-10 px-6
            `}
          >
            {events
              .slice(0, 3) // Limit to 3 events only
              .map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-left overflow-hidden flex flex-col w-full sm:w-[45%] lg:w-[30%]"
                >
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

                  <div className="px-5 pb-5">
                    <a
                      href={`/activities/events/${event.id}`}
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
          href="/activities/events"
          className="mt-12 inline-block bg-[#1B5E20] hover:bg-[#145A24] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300"
        >
          View Full Calendar
        </a>
      </div>
    </section>
  );
};

export default UpcomingEvents;
