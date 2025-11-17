import React from "react";
import { motion } from "framer-motion";

const WhistleBlowerPolicy = () => {
  const PDF_PATH = "/Whistleblower Protection Policy.doc 3.pdf";

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
          Whistleblower Protection Policy
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

        {/* Section 1 */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">1. Introduction</h2>
          <p className="leading-relaxed">
            Youth for Green Action Kenya (YGAK) is committed to fostering a culture of integrity, transparency, and accountability. Whistleblowing promotes these values by enabling individuals to disclose misconduct without fear of retaliation. This policy provides a framework for reporting corruption, malpractice, safeguarding concerns, or other improper conduct, while safeguarding whistleblowers and ensuring fair investigation processes.
          </p>
        </motion.section>

        {/* Section 2 */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">2. Policy Statement</h2>
          <p className="leading-relaxed">
            YGAK maintains a zero-tolerance approach to retaliation against whistleblowers. All disclosures made in good faith will be treated seriously, confidentially, and investigated promptly. Whistleblowers will not suffer adverse consequences for reporting misconduct.
          </p>
        </motion.section>

        {/* Section 3 */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">3. Purpose</h2>
          <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>Encourage reporting of misconduct in YGAK’s operations.</li>
            <li>Protect whistleblowers from retaliation or discrimination.</li>
            <li>Ensure timely, fair, and impartial investigations.</li>
            <li>Strengthen donor confidence and public trust in YGAK’s mission of youth empowerment and climate justice.</li>
          </ul>
        </motion.section>

        {/* Section 4 */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">4. Scope</h2>
          <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>Employees, volunteers, and board members.</li>
            <li>Consultants, contractors, and vendors.</li>
            <li>Donors, partners, and community members engaged in YGAK programs.</li>
          </ul>
        </motion.section>

        {/* Section 5 */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">5. Definitions</h2>
          <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li><strong>Whistleblowing:</strong> Reporting suspected misconduct, corruption, malpractice, safeguarding violations, or breach of organizational policies in the public interest.</li>
            <li><strong>Whistleblower:</strong> Any person who makes such a report in good faith.</li>
            <li><strong>Good Faith:</strong> An honest belief that misconduct has occurred, even if investigations do not substantiate the allegation.</li>
            <li><strong>Disclosure:</strong> Communication of information regarding suspected misconduct, corruption, malpractice, or safeguarding concerns.</li>
            <li><strong>Misconduct:</strong> Fraud, corruption, harassment, misuse of resources, environmental malpractice, safeguarding violations, or violation of YGAK policies.</li>
            <li><strong>Retaliation:</strong> Any adverse action against a whistleblower, including dismissal, demotion, harassment, discrimination, or denial of benefits.</li>
            <li><strong>Confidential Information:</strong> Identity of whistleblower or suspect, details of disclosure, and substance of investigations.</li>
          </ul>
        </motion.section>

        {/* Section 6 */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">6. Types of Corruption, Malpractice, and Safeguarding Concerns</h2>
          <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>Financial malpractice, fraud, bribery, theft, misappropriation of funds.</li>
            <li>Irregularities in recruitment, promotion, or selection of staff, volunteers, or contractors.</li>
            <li>Misuse of donor funds, grants, or organizational resources.</li>
            <li>Professional malpractice, negligence, or abuse of authority.</li>
            <li>Nepotism, favoritism, tribalism, or discrimination.</li>
            <li>Sexual exploitation, abuse, or harassment (SEAH).</li>
            <li>Irregular procurement of goods, services, or assets.</li>
            <li>Diversion of resources intended for beneficiaries.</li>
            <li>Environmental malpractice (illegal logging, pollution, misuse of conservation resources).</li>
            <li>Falsification of records, reports, or documents.</li>
          </ul>
        </motion.section>

        {/* Section 7 - Reporting */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">7. Reporting</h2>
          <h3 className="font-semibold">7.1 Who Can Make a Disclosure</h3>
          <p className="leading-relaxed">
            Any individual associated with YGAK — employees, volunteers, board members, partners, contractors, donors, or community members — who reasonably believes misconduct has occurred.
          </p>
          <h3 className="font-semibold mt-2">7.2 Procedure for Making a Disclosure</h3>
          <p className="leading-relaxed">
            Disclosures may be made:
          </p>
          <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>Orally (in person or by phone).</li>
            <li>In writing (letters or official forms).</li>
            <li>Through electronic media (email, secure online reporting channels).</li>
          </ul>
          <p className="leading-relaxed">
            Reports shall be submitted directly to the Designated Office (Chief Executive Officer or delegated officer). If the disclosure involves senior management, reports shall be submitted to the Chairperson of the Board. Anonymous reports will be accepted.
          </p>
          <h3 className="font-semibold mt-2">7.3 Independent Reporting Channel</h3>
          <p className="leading-relaxed">
            YGAK shall maintain a dedicated whistleblowing email address and secure phone line, managed by the Designated Office, with options for anonymous and multilingual reporting.
          </p>
        </motion.section>

        {/* Section 8 - Action Following Disclosure */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">8. Action Following Disclosure</h2>
          <ol className="list-decimal pl-5 space-y-1 leading-relaxed">
            <li>Acknowledge receipt within 24 hours.</li>
            <li>Assess whether the disclosure falls within the scope of this policy and determine whether:
              <ul className="list-disc pl-5">
                <li>Investigations are necessary, and if so, the form of investigation.</li>
                <li>The matter should be referred to another YGAK body under appropriate policies.</li>
                <li>The matter should be referred to external authorities such as the Ethics and Anti-Corruption Commission, the Police, or relevant donors.</li>
                <li>The matter should be closed.</li>
              </ul>
            </li>
            <li>Notify the whistleblower of the action taken within 30 days.</li>
          </ol>
        </motion.section>

        {/* Section 9 - Level 2 Reporting */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}>
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">9. Reporting and Investigation of Breaches by Senior Officials (Level 2 Reporting)</h2>
          <h3 className="font-semibold mt-2">9.1 Scope</h3>
          <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>The Chief Executive Officer.</li>
            <li>Board members (executive or non-executive).</li>
            <li>The Chairperson of the Board.</li>
          </ul>
          <h3 className="font-semibold mt-2">9.2 Reporting Channels</h3>
          <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>If the subject is the CEO, forward directly to the Chairperson of the Board.</li>
            <li>If the subject is a Board member (not Chair), submit directly to the Chairperson of the Board.</li>
            <li>If the subject is the Chairperson of the Board, submit directly to the Chairperson of the Finance & Audit Committee (currently held by the Treasurer).</li>
          </ul>
          <h3 className="font-semibold mt-2">9.3 Review and Determination</h3>
          <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>The receiving Chairperson shall review the report and may consult with other Board members not subject to the report.</li>
            <li>A determination on admissibility shall be made within 15 days.</li>
            <li>If admissible, an ad-hoc committee of at least two Board members shall be constituted to investigate.</li>
            <li>Any person subject to the disclosure or with a conflict of interest shall recuse themselves from all stages of intake, review, investigation, and decision-making.</li>
          </ul>
          <h3 className="font-semibold mt-2">9.4 Notification of Subject</h3>
          <p className="leading-relaxed">
            The subject shall be formally informed of the disclosure, provided with sufficient details, and given a reasonable opportunity to respond before any adverse decision is made.
          </p>
          <h3 className="font-semibold mt-2">9.5 Decision and Communication</h3>
          <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>A decision shall be communicated to the whistleblower and subject within two months of determination.</li>
            <li>If a breach is confirmed, the ad-hoc committee shall make recommendations to the Board for action.</li>
            <li>The whistleblower shall be informed in writing of the decision.</li>
          </ul>
        </motion.section>

        {/* Section 10 - Investigation Process */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">10. Investigation Process</h2>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>Determine who should undertake the investigation (internal committee or external expert).</li>
            <li>Establish the procedure to be followed.</li>
            <li>Identify when the suspect will be informed.</li>
            <li>Define the scope of the concluding report.</li>
            <li><strong>Timeliness:</strong> Deliver the investigation report within three months.</li>
            <li><strong>Records:</strong> Maintain secure records in line with YGAK’s Data Protection Policy.</li>
            <li><strong>Retention:</strong> Records shall be retained for seven years or longer if required by law or donor agreements.</li>
        </ul>
        </motion.section>

        {/* Section 11 - Protections for Whistleblowers */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">11. Protections for Whistleblowers</h2>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>Dismissal, demotion, or denial of promotion.</li>
            <li>Withholding of salary, benefits, or opportunities.</li>
            <li>Harassment, discrimination, or intimidation.</li>
            <li>Suspension, exclusion, or unfair treatment (for volunteers, students, or community members).</li>
        </ul>
        </motion.section>

        {/* Section 12 - Protection of Suspects */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">12. Protection of Suspects</h2>
        <p className="leading-relaxed">
            Individuals accused of misconduct are presumed innocent until proven otherwise. They will be given the right to be heard and to respond to allegations before any adverse decision is made.
        </p>
        </motion.section>

        {/* Section 13 - Withdrawal of Protection */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">13. Withdrawal of Protection</h2>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>The whistleblower participated in the misconduct.</li>
            <li>The disclosure was false, malicious, or made in bad faith.</li>
            <li>The disclosure was intended to harm others or obstruct YGAK’s mission.</li>
        </ul>
        </motion.section>

        {/* Section 14 - Sanctions */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">14. Sanctions</h2>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>Whistleblowers who act maliciously or file false reports will face disciplinary action.</li>
            <li>Any person who suppresses information, interferes with investigations, or retaliates against whistleblowers will be subject to disciplinary measures, including termination of engagement or referral to authorities.</li>
        </ul>
        </motion.section>

        {/* Section 15 - Legal Framework */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">15. Legal Framework</h2>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>Constitution of Kenya (2010).</li>
            <li>Anti-Corruption and Economic Crimes Act (2003).</li>
            <li>Leadership and Integrity Act (2012).</li>
            <li>Witness Protection Act (2006).</li>
            <li>Public Procurement and Asset Disposal Act (2015).</li>
            <li>Relevant NGO governance codes and international conventions.</li>
        </ul>
        </motion.section>

        {/* Section 16 - Roles and Responsibilities */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">16. Roles and Responsibilities</h2>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>Board of Directors: Provide oversight; ensure accountability; constitute ad-hoc committees; receive and act on investigation reports; ensure non-retaliation.</li>
            <li>Chairperson of the Board: Receive escalated reports; initiate Level 3 reviews; ensure subjects are notified; oversee fairness and timeliness.</li>
            <li>Chairperson, Finance & Audit Committee (currently Treasurer): Receive reports when the Board Chair is the subject; lead Level 3 reviews; ensure independent handling and documentation.</li>
            <li>Secretariat/CEO: Operate the Designated Office; receive and log disclosures; ensure acknowledgments and updates; coordinate investigations; maintain records and confidentiality.</li>
            <li>Staff, volunteers, partners, and contractors: Uphold ethical standards; report concerns promptly; cooperate with investigations; maintain confidentiality.</li>
            <li>Donors and external partners: May receive anonymized summaries of cases affecting donor-funded projects; entitled to cooperation in audits and compliance reviews.</li>
        </ul>
        </motion.section>

        {/* Section 17 - Commitment */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">17. Commitment</h2>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed">
            <li>Upholding natural justice in investigations.</li>
            <li>Protecting whistleblowers from reprisals.</li>
            <li>Promoting openness and accountability.</li>
            <li>Sensitizing staff, volunteers, partners, and community members on this policy.</li>
            <li>Cooperating fully with donor audits and compliance reviews.</li>
            <li>Maintaining independent reporting channels accessible in English, Kiswahili, and local languages.</li>
        </ul>
        </motion.section>

        {/* Section 18 - Review and Approval */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}>
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">18. Review and Approval</h2>
        <p className="leading-relaxed">
            This policy shall be reviewed every two years or earlier if required. It takes effect upon approval by the YGAK Board of Directors and remains in force until amended.
        </p>
        </motion.section>


      </div>
    </div>
  );
};

export default WhistleBlowerPolicy;

