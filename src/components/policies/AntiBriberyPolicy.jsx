import React from "react";
import { motion } from "framer-motion";

const AntiBriberyPolicy = () => {
  const PDF_PATH = "/ANTI BRIBERY ANTI FRAUD POLICY.pdf"; 

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
          Anti-Bribery & Anti-Fraud Policy
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
        {/* Sections */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">1. Introduction</h2>
          <p className="leading-relaxed">
            Corruption and fraud undermine social justice, economic development, and public trust. For YGAK, they pose a direct 
            threat to our mission of youth empowerment, climate action, and inclusive governance. YGAK acknowledges its responsibility 
            to remain accountable to the public, beneficiaries, donors, and partners, and commits to upholding the highest standards 
            of integrity in line with Kenyan legislation including the Bribery Act (2016), Anti-Corruption and Economic Crimes Act (2003), 
            Penal Code, as well as international standards such as the UN Convention Against Corruption and the UN Global Compact Principle 10.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">2. Policy Statement</h2>
          <p className="leading-relaxed">
            YGAK maintains a zero-tolerance approach to bribery, fraud, and corrupt practices. We are committed to preventing, detecting, 
            and responding to misconduct through robust systems, transparent procedures, and ethical leadership. All suspicions of fraud 
            or corruption will be taken seriously and addressed promptly. Breaches of this policy may result in disciplinary action, termination 
            of engagement, and legal referral.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">3. Purpose</h2>
          <p className="leading-relaxed">
            This policy communicates YGAK’s stance and framework for mitigating the risk of bribery and fraud. It outlines expectations 
            for all staff, volunteers, board members, partners, donors, and contractors in upholding ethical conduct and protecting organizational resources.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">4. Scope</h2>
          <p className="leading-relaxed">
            This policy applies to all individuals and entities associated with YGAK, including employees, volunteers, board members, 
            implementing partners, donors, vendors, contractors, and grantees. It covers all organizational activities, including procurement, 
            financial management, program delivery, and stakeholder engagement.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">5. Definitions</h2>
          <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li><strong>Bribery:</strong> Offering, promising, giving, accepting, or soliciting an advantage to induce or reward improper conduct, including kickbacks, facilitation payments, and favours.</li>
            <li><strong>Fraud:</strong> Intentional deception for personal or organizational gain, including forgery, misrepresentation, and misuse of funds or assets.</li>
            <li><strong>Corruption:</strong> Abuse of entrusted power for private gain, encompassing bribery, nepotism, and extortion.</li>
            <li><strong>Theft:</strong> Unauthorized taking or use of property belonging to another.</li>
            <li><strong>Extortion:</strong> Coercion to obtain a benefit through threats or intimidation.</li>
            <li><strong>Conflict of Interest:</strong> A situation where personal interests compromise professional judgment or duties.</li>
            <li><strong>Suspicion:</strong> A reasonably held belief that misconduct may have occurred.</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">6. Prohibited Practices</h2>
          <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>Offering or accepting bribes, kickbacks, or facilitation payments.</li>
            <li>Misuse or misappropriation of funds, assets, or information.</li>
            <li>Falsifying records or reports.</li>
            <li>Nepotism or favoritism in recruitment or procurement.</li>
            <li>Concealing conflicts of interest.</li>
            <li>Making donations or payments to gain undue advantage.</li>
            <li>Engaging in collusive or coercive practices.</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">7. Gifts and Hospitality</h2>
          <p className="leading-relaxed">
            Gifts and hospitality may be construed as bribery if intended to influence decisions or create a sense of obligation. 
            YGAK staff and affiliates must not accept or offer gifts that compromise professional judgment. Small, reasonable tokens 
            may be accepted only if they do not create a conflict of interest or perception of impropriety.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">8. Prevention Measures</h2>
          <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>Leadership Commitment: Board and Secretariat set the tone for ethical conduct and oversee implementation.</li>
            <li>Risk Assessment: Fraud and bribery risks assessed during program design and monitored through risk management frameworks.</li>
            <li>Internal Controls: Clear procedures, segregation of duties, and financial oversight.</li>
            <li>Due Diligence: Risk-based screening of third parties with anti-fraud clauses in contracts.</li>
            <li>Training and Awareness: Induction and periodic training on this policy.</li>
            <li>Monitoring and Evaluation: Regular review of control effectiveness with Board guidance.</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">9. Reporting Misconduct</h2>
          <p className="leading-relaxed">
            All YGAK representatives are required to report suspicions of fraud or bribery immediately to a line manager, senior officer, 
            or directly to the Chief Executive Officer or Chairperson of the Board. Anonymous reports are accepted and all reports will be 
            treated confidentially and investigated promptly.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">10. Investigations and Response</h2>
          <p className="leading-relaxed">
            Credible suspicions will be investigated by qualified personnel or external experts, conducted with fairness, confidentiality, 
            and adherence to due process. Outcomes may include disciplinary action, recovery of assets, and external reporting to authorities such as the Ethics and Anti-Corruption Commission.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">11. Malicious Reporting</h2>
          <p className="leading-relaxed">
            No one will face retaliation for reporting concerns in good faith. Malicious or frivolous reports made to harm others may result in disciplinary action.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">12. Grantee and Partner Obligations</h2>
          <p className="leading-relaxed">
            Partners and grantees must maintain procedures to prevent fraud and bribery in YGAK-funded programs. Suspicions must be reported 
            within 48 hours. Investigations must be conducted ethically, and outcomes shared confidentially with YGAK. Compliance with this policy is contractual.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">13. Records and Documentation</h2>
          <p className="leading-relaxed">
            YGAK will maintain a register of all reported cases and outcomes. Managers must ensure proper documentation of financial decisions, 
            procurement, recruitment, and gifts. The Board will receive anonymized quarterly reports.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">14. Roles and Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li><strong>Board of Directors:</strong> Provide strategic oversight and ensure accountability.</li>
            <li><strong>Secretariat and Management Staff:</strong> Implement controls, monitor compliance, and respond to allegations.</li>
            <li><strong>Volunteers:</strong> Uphold ethical standards and report concerns.</li>
            <li><strong>Partners and Contractors:</strong> Comply with this policy and cooperate with investigations.</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">15. External Reporting</h2>
          <p className="leading-relaxed">
            Where required by law or donor agreements, YGAK will report confirmed cases to relevant authorities, including the Ethics and Anti-Corruption Commission.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">16. Data Protection</h2>
          <p className="leading-relaxed">
            All investigation records and reports will be handled in accordance with YGAK’s Data Protection Policy. Information will be shared strictly on a need-to-know basis.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">17. Review and Approval</h2>
          <p className="leading-relaxed">
            This policy shall be reviewed every two years or earlier if needed. It takes effect upon approval by the YGAK Board of Directors and remains in force until reviewed or amended. All staff, volunteers, and partners are required to acknowledge receipt and understanding of this policy upon engagement with YGAK.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default AntiBriberyPolicy;
