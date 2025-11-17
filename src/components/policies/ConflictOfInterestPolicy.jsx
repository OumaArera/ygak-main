import React from "react";
import { motion } from "framer-motion";

const ConflictOfInterestPolicy = () => {
  const PDF_PATH = "/YGAK CONFLICT OF INTEREST POLICY.pdf"
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
          Conflict of Interest Policy
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

      <div className="max-w-4xl mx-auto px-6 mt-10 space-y-8 text-gray-800">
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">1. Purpose</h2>
          <p className="leading-relaxed">
            This policy is designed to safeguard the integrity, transparency, and accountability of YGAK’s operations. 
            It ensures that all decisions and actions taken by representatives of the organization are free from undue influence 
            and aligned with YGAK’s mission and values. By identifying, disclosing, and managing conflicts of interest, YGAK 
            promotes ethical conduct and public trust.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">2. Scope</h2>
          <p className="leading-relaxed">
            This policy applies to all individuals associated with YGAK, including board members, staff, volunteers, 
            consultants, and any other persons acting on behalf of the organization. It governs both internal and external 
            engagements where personal interests may intersect with organizational responsibilities.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">3. Definition of Conflict of Interest</h2>
          <p className="leading-relaxed">
            A conflict of interest arises when an individual’s personal, professional, financial, or relational interests 
            improperly influence, or appear to influence, their ability to perform duties impartially. Conflicts may be real, 
            perceived, or potential. A real conflict exists when private interests directly interfere with official responsibilities. 
            A perceived conflict occurs when it appears that private interests may be influencing decisions, regardless of whether 
            that is true. A potential conflict refers to situations where private interests could reasonably come into conflict with 
            official duties in the future.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">4. Examples of Conflicts</h2>
          <p className="leading-relaxed">
            Conflicts of interest may include awarding contracts or grants to a business owned by a relative or close associate, 
            showing favouritism in procurement decisions, maintaining personal or family relationships that create perceptions of bias, 
            using YGAK resources for personal gain, sharing confidential information with unauthorized individuals, offering preferential 
            treatment based on religious, ethnic, or familial affiliations, or engaging in secondary employment that compromises YGAK responsibilities.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">5. Principles</h2>
          <p className="leading-relaxed">
            YGAK representatives are expected to act ethically and lawfully, placing the needs of beneficiaries, stakeholders, 
            and the organization above personal interests. Vendors and suppliers must be selected based solely on merit, including 
            quality, service, and cost. Representatives must withdraw from any discussion, decision, or transactions where a conflict 
            exists or may be perceived. All conflicts must be disclosed promptly and managed fairly, transparently, and without bias. 
            Representatives are encouraged to raise concerns with senior officers or the Board.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">6. Disclosure and Management</h2>
          <p className="leading-relaxed">
            All YGAK representatives must examine their interests and disclose any actual, perceived, or potential conflicts 
            as soon as they become aware. Disclosures may be made orally or in writing to a trusted senior officer. Upon disclosure, 
            the individual must recuse themselves from related decisions or votes, and the matter will be reviewed by disinterested parties. 
            Complex or high-risk cases may be referred to the Board for further consideration. All disclosures and decisions will be documented 
            and treated with confidentiality.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">7. Specific Guidelines</h2>
          <p className="leading-relaxed">
            Board and staff members may engage with other organizations, provided these do not compete with YGAK’s core mandate 
            or create sponsor conflicts. Any board member or trustee intending to apply for an executive role within YGAK must notify 
            the Board in advance. No representative may commit YGAK resources without proper authority.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">8. Policy Breaches</h2>
          <p className="leading-relaxed">
            Failure to disclose or manage a conflict of interest may result in disciplinary action, including termination, 
            legal referral, or removal from governance roles. Representatives who suspect a breach of this policy must report it to 
            a senior officer, the Chief Executive Officer, or the Board Chair. No action will be taken against individuals who report in good faith.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">9. Review and Awareness</h2>
          <p className="leading-relaxed">
            All representatives of YGAK, including board members, staff, volunteers, and consultants, are required to be aware of 
            and comply with the Conflict of Interest Policy. The Board of Directors approves and periodically reviews the policy 
            to ensure its effectiveness and relevance, updating as needed to reflect evolving standards and organizational growth.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default ConflictOfInterestPolicy;
