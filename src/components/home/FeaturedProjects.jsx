import React from "react";
import { motion } from "framer-motion";

const projects = [
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

const FeaturedProjects = () => {
  // Only show first 3 projects on desktop, 2 on mobile
  const visibleProjects = projects.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50 text-center relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-gray-100 opacity-70"></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B5E20] mb-12">
          Our Impact Projects
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {visibleProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col hover:-translate-y-1"
            >
              {/* Embedded YouTube Video */}
              <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden">
                <iframe
                  src={p.videoUrl}
                  title={p.title}
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg text-[#1B5E20] mb-1">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 italic mb-2">
                {p.location} • {p.date}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                {p.description}
              </p>
              <p className="font-medium text-green-700 mt-auto">
                {p.metric}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/about/impact-stories"
          className="mt-12 inline-block bg-[#1B5E20] hover:bg-[#145A24] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300"
        >
          View All Stories
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjects;
