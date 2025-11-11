import React from "react";
import { motion } from "framer-motion";

const patron = {
  name: "Dr. Sassan Dieter Khatib-Shahidi",
  role: "Patron, Youth for Green Action Kenya (YGAK)",
  description:
    "Provides visionary guidance, national advocacy, and strategic support in advancing YGAK’s mission to empower youth and promote environmental sustainability across Kenya.",
  image: "/Sassa Khatib.jpg", 
};

const boardMembers = [
  {
    name: "David Omondi",
    role: "Board Chairman",
    description:
      "Provides strategic vision and governance oversight, ensuring YGAK remains aligned with its mission to empower youth for environmental stewardship.",
    image: "/David Omondi.png",
  },
  {
    name: "Daniel Otieno",
    role: "Board Secretary",
    description:
      "Oversees administrative integrity, coordinates board affairs, and ensures transparent governance processes within YGAK.",
    image: "/Daniel Otieno.jpg",
  },
  {
    name: "Lilian Onyango",
    role: "Treasurer",
    description:
      "Manages YGAK’s financial strategy, accountability frameworks, and donor relations to sustain long-term environmental initiatives.",
    image: "/Lilian Onyango.jpg",
  },
  {
    name: "Tunai Murunga",
    role: "Board Member",
    description:
      "Provides expert insights in youth engagement and environmental advocacy, guiding key decision-making and partnerships.",
    image: "/Tunai Murunga.jpg",
  },
  {
    name: "Judith Ikonya",
    role: "Board Member",
    description:
      "Supports governance and program oversight, ensuring YGAK initiatives foster inclusivity, sustainability, and community resilience.",
    image: "/Judith Ikonya.jpg",
  },
  {
    name: "Kelvin Honest",
    role: "Board Member",
    description:
      "Advises on strategic partnerships and sustainability programs, strengthening YGAK’s national and regional collaborations.",
    image: "/Kelvin Mworia.png",
  },
  {
    name: "Tedy Ouma",
    role: "Board Member",
    description:
      "Advises on strategic partnerships and sustainability programs, strengthening YGAK’s national and regional collaborations.",
    image: "/Tedy Ouma.jpg",
  },
];

const secretariat = [
  {
    name: "Dennis Asiya",
    role: "Chief Executive Officer",
    description:
      "Leads YGAK’s secretariat and day-to-day operations, driving program implementation, partnerships, and organizational growth under board guidance.",
    image: "/Dennis Asiya.jpg",
  },
];

const LeadershipTeam = () => {
  return (
    <section className="relative w-full bg-gray-50 -mt-4 sm:-mt-6">
      {/* Hero Background */}
      <div
        className="relative h-[55vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/forest-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Leadership
          </h1>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Meet the visionaries guiding Youth for Green Action Kenya toward a
            sustainable, youth-driven future.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Patron Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-[#1c4b28] mb-10">Our Patron</h2>
          <div className="bg-white shadow-xl rounded-2xl p-10 max-w-3xl mx-auto hover:shadow-2xl transition">
            <img
              src={patron.image}
              alt={patron.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-green-100 shadow-md"
            />
            <h3 className="text-2xl font-semibold text-[#1c4b28] mb-2">
              {patron.name}
            </h3>
            <p className="text-green-800 font-medium mb-3">{patron.role}</p>
            <p className="text-gray-600 leading-relaxed">{patron.description}</p>
          </div>
        </motion.div>

        {/* Board of Directors */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#1c4b28] text-center mb-8">
            Board of Directors
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            The Board provides governance, strategic oversight, and ensures that
            YGAK remains mission-driven, impactful, and transparent in promoting
            youth-led environmental sustainability.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {boardMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-8 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-100 shadow-md relative z-10"
                />
                <h4 className="font-semibold text-lg text-[#1c4b28] relative z-10">
                  {member.name}
                </h4>
                <p className="text-green-700 text-sm mb-3 relative z-10">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Secretariat */}
        <div>
          <h3 className="text-2xl font-bold text-[#1c4b28] text-center mb-8">
            Secretariat
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The Secretariat leads YGAK’s operations, manages daily programs, and
            implements strategic plans under the Board’s direction.
          </p>

          <div className="flex justify-center">
            {secretariat.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition text-center max-w-md"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mb-5 border-4 border-green-100 shadow-md mx-auto"
                />
                <h4 className="font-semibold text-xl text-[#1c4b28]">
                  {member.name}
                </h4>
                <p className="text-green-700 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
