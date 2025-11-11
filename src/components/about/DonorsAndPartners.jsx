import React from "react";
import { motion } from "framer-motion";

const donors = [
  {
    name: "United Nations Environment Programme (UNEP)",
    logo: "/unep.png",
    url: "https://www.unep.org/",
  },
  {
    name: "Ford Foundation",
    logo: "/ford.jpg",
    url: "https://www.fordfoundation.org/",
  },
  {
    name: "USAID",
    logo: "/usaid.png",
    url: "https://www.usaid.gov/",
  },
  {
    name: "World Wildlife Fund (WWF)",
    logo: "/wwf.webp",
    url: "https://www.worldwildlife.org/",
  },
];

const partners = [
  {
    name: "Kenya Forestry Research Institute (KEFRI)",
    logo: "/kefri.png",
    url: "https://www.kefri.org/",
  },
  {
    name: "Ministry of Environment, Kenya",
    logo: "/moe.jpg",
    url: "https://environment.go.ke/",
  },
  {
    name: "Safaricom Foundation",
    logo: "/safaricom.png",
    url: "https://www.safaricomfoundation.org/",
  },
  {
    name: "Green Belt Movement",
    logo: "/greenbelt_movement_logo.jpg",
    url: "https://www.greenbeltmovement.org/",
  },
  {
    name: "Zafrika",
    logo: "/zafrika_logo.png",
    url: "https://www.zafrika.com/",
  },
];

const DonorsAndPartners = () => {
  return (
    <section className="relative w-full bg-gray-50 -mt-4 sm:-mt-6">
      {/* Hero Banner */}
      <div
        className="relative h-[55vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/forest-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Donors & Partners
          </h1>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Our work is made possible through the generosity and collaboration
            of visionary donors and strategic partners dedicated to
            environmental sustainability and youth empowerment.
          </p>
        </motion.div>
      </div>

      {/* Donors Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#1c4b28] mb-4">Our Donors</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We extend our deepest gratitude to the institutions and
            organizations that have provided the financial and strategic support
            enabling YGAK to continue driving impactful environmental and youth
            development programs across Kenya and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
          {donors.map((donor, i) => (
            <motion.a
              key={i}
              href={donor.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center justify-center h-40 w-48"
            >
              <img
                src={donor.logo}
                alt={donor.name}
                className="h-16 object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-sm font-medium text-[#1c4b28] text-center leading-snug">
                {donor.name}
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-green-200 to-transparent my-8"></div>

      {/* Partners Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#1c4b28] mb-4">
            Our Strategic Partners
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Collaboration lies at the heart of our mission. We proudly work with
            governmental agencies, research institutions, and development
            partners who share our vision of a greener and more sustainable
            Kenya.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
          {partners.map((partner, i) => (
            <motion.a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center justify-center h-40 w-48"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-sm font-medium text-[#1c4b28] text-center leading-snug">
                {partner.name}
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-[#1c4b28] text-white py-16 text-center"
      >
        <h3 className="text-2xl font-semibold mb-4">
          Want to Partner or Support Our Work?
        </h3>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          We welcome collaborations with institutions, individuals, and
          foundations that share our commitment to environmental sustainability
          and youth empowerment.
        </p>
        <a
          href="/get-involved"
          className="bg-white text-[#1c4b28] font-semibold px-6 py-3 rounded-full shadow hover:bg-green-100 transition"
        >
          Become a Partner
        </a>
      </motion.div>
    </section>
  );
};

export default DonorsAndPartners;
