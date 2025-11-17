import React from "react";
import { motion } from "framer-motion";

const DonorAndPartnerStatement = () => {
  const PDF_PATH = "/Donor and Partner Statement.pdf";

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative h-[35vh] flex flex-col items-center justify-center text-center bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <img src="/logo.png" alt="YGAK Logo" className="h-20 mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Donor & Partner Statement
        </motion.h1>
        <p className="max-w-2xl mx-auto mt-2 text-gray-200">
          Youth for Green Action Kenya (YGAK)
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20"></div>
      </section>

      {/* Download Button */}
      <div className="max-w-4xl mx-auto px-6 mt-6 flex justify-end">
        <a
          href={PDF_PATH}
          download
          className="inline-flex items-center px-5 py-2 bg-[#1B5E20] text-white font-semibold rounded-lg shadow hover:bg-[#145A24] transition"
        >
          Download PDF
        </a>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 mt-10 space-y-8 text-gray-800">
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">Purpose</h2>
          <p className="leading-relaxed">
            Youth for Green Action Kenya (YGAK) exists to empower young people to lead environmental stewardship rooted in ethical governance, community participation, and shared responsibility. Our mission is to cultivate a generation of resilient leaders who restore ecosystems, uphold integrity, and drive sustainable development across Kenya.
          </p>
          <p className="leading-relaxed mt-2">
            We are pleased to acknowledge the generous support and partnership extended by our donors and collaborators. This contribution strengthens our shared commitment to youth-led climate action, social justice, and sustainable development across Kenya.
          </p>
          <p className="leading-relaxed mt-2">
            Through this partnership, YGAK reaffirms its dedication to transparency, integrity, and impact-driven programming. All contributions will be utilized in alignment with our strategic goals and documented through our grant and impact reporting frameworks. We look forward to continued collaboration in advancing inclusive, community-centered solutions for a greener and more equitable future. Together, we are not just planting trees; we are growing a movement of ethical leaders and sustainable solutions.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">Principles of Engagement</h2>
          <p className="leading-relaxed">
            YGAK’s work is anchored in three core values:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Integrity: Transparent planning, open dialogue, and accountability in all initiatives.</li>
              <li>Community: Inclusive participation across generations and local knowledge systems.</li>
              <li>Resilience: Equipping youth with adaptive skills to lead in a changing climate.</li>
            </ul>
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">Donor Relations</h2>
          <p className="leading-relaxed">
            We deeply value the trust and support of our donors and commit to the following:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Regular updates on project progress and milestones.</li>
              <li>Financial reports detailing the use of funds and resource allocation.</li>
              <li>Impact assessments to measure outcomes and inform future strategy.</li>
              <li>Purpose-bound contributions: All donor support is used solely for agreed-upon objectives.</li>
              <li>Respectful recognition: Donors are acknowledged in line with their preferences and YGAK’s organizational policy.</li>
            </ul>
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">Partnership Management</h2>
          <p className="leading-relaxed">
            YGAK upholds ethical standards in all partnerships, ensuring alignment with our mission and values. We commit to:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Clear agreements: Memoranda of Understanding (MoUs) or partnership contracts define roles, responsibilities, and reporting requirements.</li>
              <li>Joint monitoring and evaluation: Regular reviews promote accountability, transparency, and shared learning.</li>
              <li>Collaborative governance: Partners are engaged in decision-making and implementation to foster mutual ownership.</li>
            </ul>
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">Definitions & Conflict of Interest</h2>
          <p className="leading-relaxed">
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>A donor refers to any individual, organization, or institution that provides financial or in-kind support to YGAK for agreed-upon purposes.</li>
              <li>A partner is any entity (public, private, or civil society) that collaborates with YGAK through formal or informal arrangements to advance shared goals.</li>
              <li>A Memorandum of Understanding (MoU) is a formal document outlining the roles, responsibilities, and expectations of each party in a partnership.</li>
              <li>An impact assessment is a systematic evaluation of the outcomes and effectiveness of a project or initiative, used to inform strategy and reporting.</li>
              <li>A conflict of interest arises when personal, financial, or professional interests may compromise or appear to compromise the impartiality or integrity of a decision or action.</li>
              <li>A strategic partnership is a collaboration purposefully aligned with broader development goals and designed for long-term sustainability and scalability.</li>
              <li>Joint monitoring and evaluation refers to a shared process between YGAK and its partners to track progress, assess impact, and ensure accountability.</li>
              <li>A purpose-bound contribution is a donation or resource restricted to specific uses as agreed upon between YGAK and the donor.</li>
              <li>Donor recognition is the process of acknowledging donor contributions in a manner that respects their preferences.</li>
            </ul>
          </p>
          <p className="leading-relaxed mt-4">
            YGAK maintains a strict policy to prevent and manage conflicts of interest. All staff, volunteers, and partners are expected to disclose potential conflicts and act in the best interest of the organization and its mission. Decisions are made transparently, with safeguards to ensure fairness, integrity, and public trust.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default DonorAndPartnerStatement;
