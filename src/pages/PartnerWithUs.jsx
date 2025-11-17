import React from "react";
import { motion } from "framer-motion";
import { Mail, Users } from "lucide-react";

const PartnerWithUs = () => {
  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-3"
        >
          Partner With Us
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Join us in driving youth-led environmental initiatives and community development across Kenya. Learn how to collaborate, support, or become a strategic partner.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      {/* Partnership Information */}
      <div className="max-w-5xl mx-auto px-6 mt-12 space-y-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-8 border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="text-[#1B5E20]">
            <Users size={40} className="mb-4" />
            <h2 className="text-xl font-bold mb-2">Strategic Partnerships</h2>
            <p className="text-gray-700 text-sm">
              Collaborate with Youths for Green Action Kenya to amplify impact, support initiatives, and co-create innovative projects. Partnerships may include NGOs, corporate entities, government agencies, or academic institutions.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-8 border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="text-[#1B5E20]">
            <Mail size={40} className="mb-4" />
            <h2 className="text-xl font-bold mb-2">Partnership Registration</h2>
            <p className="text-gray-700 text-sm">
              For partnerships and enquiries, email us at{" "}
              <a
                href="mailto:ygakbusiness@ygak.org"
                className="text-[#1B5E20] font-semibold hover:underline"
              >
                ygakbusiness@ygak.org
              </a>{" "}
              and CC{" "}
              <a
                href="mailto:info@ygak.org"
                className="text-[#1B5E20] font-semibold hover:underline"
              >
                info@ygak.org
              </a>
              . Our team will respond promptly with guidance on available partnership opportunities, collaboration frameworks, and project onboarding.
            </p>
          </div>
        </motion.div>

        {/* Additional Info / Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-green-50 rounded-xl p-8 border-l-4 border-[#1B5E20] shadow-inner"
        >
          <h3 className="text-lg font-semibold text-[#145A24] mb-2">Why Partner With YGAK?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            <li>Amplify your social and environmental impact through youth-led initiatives.</li>
            <li>Access expertise in climate action, tree planting, sustainable agriculture, and community engagement.</li>
            <li>Collaborate on innovative projects with measurable outcomes and reporting.</li>
            <li>Build corporate social responsibility visibility and strengthen community relations.</li>
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1B5E20] text-white rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Partner?</h3>
          <p className="mb-6">Send us an email with your proposal, and we’ll guide you through the partnership process.</p>
          <a
            href="mailto:ygakbusiness@ygak.org?cc=info@ygak.org"
            className="inline-block bg-yellow-300 hover:bg-yellow-400 text-[#1B5E20] font-semibold px-6 py-3 rounded-full transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
