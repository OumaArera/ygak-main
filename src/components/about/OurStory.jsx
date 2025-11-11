import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Lightbulb,
  Handshake,
  Shield,
  Zap,
  Sun,
  Sprout,
  Award,
  TrendingUp,
} from "lucide-react";

const OurStory = () => {
  const mission = {
    title: "Our Mission",
    icon: <Target className="text-[#1c4b28] w-8 h-8 mb-3" />,
    text: "To empower young people with the knowledge, skills, and resources to champion sustainable development through environmental conservation, climate action, and agricultural entrepreneurship.",
  };

  const vision = {
    title: "Our Vision",
    icon: <Eye className="text-[#1c4b28] w-8 h-8 mb-3" />,
    text: "A just, sustainable, and resilient world where young people are leading the transition toward a green and inclusive future.",
  };

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      name: "Sustainability",
      description:
        "Commitment to long-term environmental health and responsible resource use.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Community Engagement",
      description:
        "Collaboration with youth, local communities, and institutions to drive change.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      name: "Innovation",
      description:
        "Implementing creative and effective solutions for environmental challenges.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      name: "Integrity",
      description:
        "Upholding transparency, accountability, and ethical standards in our actions.",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      name: "Collaboration",
      description:
        "Partnering across sectors to achieve shared sustainability goals.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      name: "Agility",
      description:
        "Adapting quickly to emerging environmental and social challenges.",
    },
    {
      icon: <Sun className="w-6 h-6" />,
      name: "Optimism",
      description:
        "Maintaining a hopeful and resilient outlook toward a green future.",
    },
  ];

  const history = [
    {
      year: "2018",
      title: "Founding of YGAK",
      description:
        "Youth for Green Action Kenya (YGAK) began as a student-led environmental club at Egerton University, driven by youth passion for conservation.",
      icon: <Sprout className="w-6 h-6" />,
    },
    {
      year: "2021",
      title: "Becoming a Registered NGO",
      description:
        "Officially registered as a youth-led NGO focused on environmental conservation, climate action, and sustainable agribusiness.",
      icon: <Handshake className="w-6 h-6" />,
    },
    {
      year: "2023",
      title: "Expanding Impact",
      description:
        "Engaged over 12 counties, planted 500,000+ trees, and reached 60+ schools through environmental education.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2025",
      title: "Scaling Impact & Membership Growth",
      description:
        "Over 8,000 youth and community members sensitized, 10 university chapters established, and 300+ smallholder farmers supported.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      year: "Future",
      title: "Vision 2027 & Beyond",
      description:
        "Targeting the planting of 1 million trees by 2027 while building climate-resilient communities nationwide.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-center bg-cover flex items-center justify-center -mt-4 sm:-mt-6"
        style={{ backgroundImage: `url('/our-story.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Story: Youth for Green Action Kenya
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-100">
            Turning awareness into action — and action into lasting impact for a sustainable future.
          </p>
        </motion.div>
      </section>

      {/* Mission, Vision, and Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1c4b28] mb-12 text-center">
            Mission, Vision & Values
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[mission, vision].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="flex flex-col items-center text-center">
                  {item.icon}
                  <h3 className="font-bold text-2xl mb-4 text-[#1c4b28]">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-[#1c4b28] mb-10 text-center">
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
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border-t-4 border-[#1c4b28]"
              >
                <div className="text-[#1c4b28] mb-3">{value.icon}</div>
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
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1c4b28] mb-4">
            Our Journey
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From a student initiative to a nationwide environmental movement.
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1c4b28] via-green-700 to-green-500"></div>

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
                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-[#1c4b28] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="bg-white shadow-lg rounded-xl p-6 w-full md:w-5/12 border-l-4 border-[#1c4b28] hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-[#1c4b28] bg-green-50 p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#1c4b28]">
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

          {/* Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-[#1c4b28] text-white rounded-xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Our Impact at a Glance
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">500,000+</p>
                <p className="text-green-100">Trees Planted</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">12+</p>
                <p className="text-green-100">Counties Engaged</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">8,000+</p>
                <p className="text-green-100">Youth Reached</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">60+</p>
                <p className="text-green-100">Schools Impacted</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
