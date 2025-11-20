import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Leaf } from "lucide-react";
import CountUp from "react-countup";

const impactStories = [
  {
    title: "Greening Schools Initiative 2025",
    videoUrl: "https://www.youtube.com/embed/vNZaXwfO5ZM",
    metric: "Eco-Learning Centers Established",
    location: "Rift Valley Region",
    date: "Sept 2025",
    description:
      "Transforming schools across the Rift Valley into vibrant green learning hubs, this program empowers students to plant and care for trees while learning sustainable environmental practices.",
  },
  {
    title: "Kipkabus Forest 100,000 Trees Initiative",
    videoUrl: "https://www.youtube.com/embed/e40VmS3hJDU",
    metric: "100,000 Trees Restored",
    location: "Kipkabus Forest, Elgeyo Marakwet County",
    date: "June 2025",
    description:
      "A landmark restoration drive uniting youth and communities to restore degraded forestland, promote agroforestry, and empower local livelihoods through reforestation and biodiversity recovery.",
  },
  {
    title: "Mombasa 35,000 Mangroves Initiative",
    videoUrl: "https://www.youtube.com/embed/pr18CCpL7eY",
    metric: "35,000 Mangroves Planted",
    location: "Port Reitz Creek, Mombasa County",
    date: "Sept 2023",
    description:
      "Over 120 students and 100 community members joined forces to restore coastal ecosystems by planting 35,000 mangroves, supporting Kenya’s 15 Billion Trees mission and blue economy resilience.",
  },
  {
    title: "August Tree Planting Challenge 2023",
    videoUrl: "https://www.youtube.com/embed/Syjg9uaRuko",
    metric: "100 Trees Planted per Volunteer",
    location: "Nakuru County",
    date: "August 2023",
    description:
      "A nationwide initiative engaging youth volunteers like Rasugu Ogamba to plant fruit and indigenous trees across Kenyan schools and communities, fostering grassroots environmental stewardship.",
  },
  {
    title: "Narok 100,000 Trees Campaign",
    videoUrl: "https://www.youtube.com/embed/AGz8arBtpds",
    metric: "100,000 Trees Planted in 5 Days",
    location: "Mau Forest, Narok County",
    date: "May 2023",
    description:
      "In partnership with German Imaging Technologies, YGAK mobilized 300+ volunteers to plant 100,000 trees across Mau Forest in just five days—one of Kenya’s largest youth-led reforestation drives.",
  },
];

const ImpactStories = () => {
  return (
    <section className="w-full bg-gray-50 -mt-4 sm:-mt-6">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/impact.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#1c4b28]/20"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Impact Stories
          </h1>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Inspiring transformations from communities across Kenya — stories
            of resilience, reforestation, and youth-led climate action.
          </p>
        </motion.div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#1c4b28] mb-4">
            Real Change, Real Impact
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Each story below captures the spirit of collaboration, innovation,
            and environmental action led by young people and communities
            committed to a greener Kenya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {impactStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video bg-black">
                <iframe
                  src={story.videoUrl}
                  title={story.title}
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#1c4b28] mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {story.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between text-sm text-gray-500 gap-3">
                  <div className="flex items-center gap-1">
                    <Leaf className="w-4 h-4 text-green-700" />
                    <span>{story.metric}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-green-700" />
                    <span>{story.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-green-700" />
                    <span>{story.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact Summary Section */}
      <div className="bg-[#1c4b28] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10"
          >
            Impact in Numbers
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { number: 700000, label: "Trees Planted" },
              { number: 18, label: "Counties Engaged" },
              { number: 60, label: "Schools Reached" },
              { number: 8000, label: "Youth Empowered" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => (
                    <span
                      ref={countUpRef}
                      className="text-4xl font-bold mb-2 text-yellow-300"
                    />
                  )}
                </CountUp>

                <p className="text-green-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>



      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 text-center bg-white"
      >
        <h3 className="text-2xl font-semibold text-[#1c4b28] mb-4">
          Be Part of the Next Story
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join us in greening Kenya and empowering youth to take climate action.
          Your contribution, partnership, or volunteer effort helps us write the
          next success story.
        </p>
        <a
          href="/get-involved"
          className="bg-[#1c4b28] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-green-800 transition"
        >
          Get Involved
        </a>
      </motion.div>
    </section>
  );
};

export default ImpactStories;
