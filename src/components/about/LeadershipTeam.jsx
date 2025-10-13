import React from "react";
import { motion } from "framer-motion";

const boardMembers = [
  {
    name: "David Obuya",
    role: "Founder & Board Chairman",
    description:
      "Provides strategic vision and governance oversight, ensuring YGAK remains aligned with its mission to empower youth for environmental stewardship.",
    image: "/leader.JPG",
  },
  {
    name: "Tedy Ouma",
    role: "Board Secretary",
    description:
      "Oversees administrative integrity, coordinates board affairs, and ensures transparent governance processes within YGAK.",
    image: "/leader.JPG",
  },
  {
    name: "Lilian Achieng",
    role: "Treasurer",
    description:
      "Manages the organization’s financial strategy, accountability frameworks, and donor relations to sustain long-term environmental initiatives.",
    image: "/leader.JPG",
  },
  {
    name: "Omar Chanzu",
    role: "Board Member",
    description:
      "Provides expert insights in youth engagement and environmental advocacy, guiding key decision-making and partnerships.",
    image: "/leader.JPG",
  },
  {
    name: "Mary Mwangi",
    role: "Board Member",
    description:
      "Supports governance and program oversight, ensuring YGAK initiatives foster inclusivity, sustainability, and community resilience.",
    image: "/leader.JPG",
  },
  {
    name: "Davis Mogaka",
    role: "Board Member",
    description:
      "Advises on strategic partnerships and sustainability programs, strengthening YGAK’s national and regional collaborations.",
    image: "/leader.JPG",
  },
];

const secretariat = [
  {
    name: "David Oloo",
    role: "Chief Executive Officer",
    description:
      "Leads YGAK’s secretariat and day-to-day operations, driving program implementation, partnerships, and organizational growth under board guidance.",
    image: "/leader.JPG",
  },
];

const LeadershipTeam = () => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-[#1B5E20] mb-10">
        Our Leadership
      </h2>

      {/* Board of Directors */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h3 className="text-2xl font-semibold text-green-800 mb-8">
          Board of Directors
        </h3>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          The Board of Directors provides governance, accountability, and
          strategic direction for YGAK. Their collective expertise ensures that
          the organization remains impactful, transparent, and mission-driven.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {boardMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-100 shadow-sm"
              />
              <h4 className="font-semibold text-lg text-green-800">
                {member.name}
              </h4>
              <p className="text-gray-600 text-sm mb-3">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Secretariat */}
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-green-800 mb-8">
          Secretariat
        </h3>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          The Secretariat is responsible for YGAK’s operational management and
          execution of programs under the guidance of the Board of Directors.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 justify-items-center">
          {secretariat.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition text-center max-w-md"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-green-100 shadow-sm mx-auto"
              />
              <h4 className="font-semibold text-xl text-green-800">
                {member.name}
              </h4>
              <p className="text-gray-600 text-sm mb-3">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
