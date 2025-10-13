import React from "react";
import { motion } from "framer-motion";
import { Sprout, Handshake, Award, Users, TrendingUp } from "lucide-react";

const history = [
  {
    year: "2018",
    title: "Founding of YGAK",
    description:
      "Youths for Green Action Kenya was established by passionate youth to champion environmental conservation and protect Mother Earth. Previously known as Youths Action Kenya NGO, registered under section 10 of the Non-Governmental Organizations Co-ordination Board.",
    icon: <Sprout className="w-6 h-6" />,
  },
  {
    year: "2020-2022",
    title: "Building Foundations & Partnerships",
    description:
      "Expanded network across Kenya by partnering with higher learning institutions, government parastatals, businesses, and organizations. Integrated environmental education in schools across multiple counties.",
    icon: <Handshake className="w-6 h-6" />,
  },
  {
    year: "2023",
    title: "Major Milestones Achieved",
    description:
      "Planted over 250,000 trees across 15+ counties in Kenya. Removed over 50 tonnes of waste from landfills. Recognized as restoration champions of Njoro River, Nakuru County. Engaged numerous schools in more than 12 counties.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    year: "2025",
    title: "Scaling Impact & Membership Growth",
    description:
      "Reached 400 registered volunteers with presence in 10+ universities including Egerton, JKUAT, and Kenyatta University. Established 4 registered YGAK chapters in MKU, Egerton, TUK, and MMUST. Targeting 1 million trees by 2027.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    year: "Future",
    title: "Vision 2027 & Beyond",
    description:
      "Aiming to plant 1,000,000 trees by 2027 to combat deforestation and enhance biodiversity. Continuing to empower communities through sustainable environmental conservation, education, and advocacy for a resilient ecosystem.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const HistoryTimeline = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#1B5E20] mb-4">
          Our Journey
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          From humble beginnings to a leading force in environmental conservation across Kenya
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-green-500 to-green-600"></div>

          {history.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 flex ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } relative`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content Card */}
              <div className="bg-white shadow-lg rounded-xl p-6 w-full md:w-5/12 border-l-4 border-green-600 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-green-600 bg-green-50 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-green-800">
                    {item.year}
                  </h3>
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-green-700 text-white rounded-xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Impact at a Glance
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">700,000+</p>
              <p className="text-green-100">Trees Planted</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">17+</p>
              <p className="text-green-100">Counties Covered</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-green-100">Tonnes Waste Removed</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">2500+</p>
              <p className="text-green-100">Registered Volunteers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryTimeline;