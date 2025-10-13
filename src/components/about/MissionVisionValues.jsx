import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Lightbulb, Handshake, Shield, Zap, Sun } from "lucide-react";

const MissionVisionValues = () => {
  const mission = {
    title: "Our Mission",
    icon: <Target className="text-green-600 w-8 h-8 mb-3" />,
    text: "Empowering communities through sustainable environmental conservation, education, and advocacy to create a resilient and thriving ecosystem for present and future generations.",
  };

  const vision = {
    title: "Our Vision",
    icon: <Eye className="text-green-600 w-8 h-8 mb-3" />,
    text: "To be a leading force in creating a clean, healthy, safe, and sustainable environment in Kenya by fostering environmental stewardship, promoting a culture of conservation, and inspiring global action for a healthier planet.",
  };

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      name: "Sustainability",
      description: "Commitment to long-term environmental health and resource conservation",
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Community Engagement",
      description: "Active involvement and collaboration with local communities and stakeholders",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      name: "Education & Awareness",
      description: "Promoting environmental education and raising awareness about conservation",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      name: "Innovation",
      description: "Implementing innovative solutions and best practices for environmental challenges",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      name: "Integrity",
      description: "Upholding transparency, accountability, and ethical standards in all our actions",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      name: "Collaboration",
      description: "Partnering with organizations, institutions, and individuals to promote SDGs",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      name: "Agility",
      description: "Learning and innovating quickly to achieve goals and create lasting impact",
    },
    {
      icon: <Sun className="w-6 h-6" />,
      name: "Optimism",
      description: "Maintaining a hopeful, encouraging, and courageous outlook for positive outcomes",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1B5E20] mb-12 text-center">
          Mission, Vision & Values
        </h2>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <div className="flex flex-col items-center text-center">
              {mission.icon}
              <h3 className="font-bold text-2xl mb-4 text-green-700">
                {mission.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{mission.text}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <div className="flex flex-col items-center text-center">
              {vision.icon}
              <h3 className="font-bold text-2xl mb-4 text-green-700">
                {vision.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{vision.text}</p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border-t-4 border-green-600"
              >
                <div className="text-green-600 mb-3">{value.icon}</div>
                <h4 className="font-semibold text-lg mb-2 text-gray-800">
                  {value.name}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;