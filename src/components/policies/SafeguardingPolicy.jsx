import React from "react";
import { motion } from "framer-motion";

const SafeguardingPolicy = () => {
  const PDF_PATH = "/SAFEGUARDING POLICIES YGAK.pdf";
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
          Safeguarding Policy
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
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">1. Introduction</h2>
          <p className="leading-relaxed">
            Youth for Green Action Kenya (YGAK) is committed to creating and maintaining a safe, inclusive, and respectful environment for all individuals, especially children, young people, and vulnerable adults who engage with our programs, staff, volunteers, and partners. Safeguarding is the responsibility of the organization to ensure that its operations, activities, and representatives do not cause harm or expose individuals to abuse, exploitation, neglect, or discrimination. This responsibility extends to protecting our own staff and volunteers when they are vulnerable such as during illness, fieldwork, or when facing risks of harm, abuse or inappropriate behaviour including bullying and harassment. Child protection is a core component of safeguarding and refers to the specific measures taken to protect children identified as being at risk of significant harm. For the purposes of this policy, a “child” is defined as any individual under the age of 18 years.
          </p>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">2. Purpose of the Policy</h2>
          <p className="leading-relaxed">
            The purpose of this policy is to provide clear guidance on how YGAK prevents, identifies, and responds to safeguarding concerns. It ensures that all staff, volunteers, and partners understand their responsibilities and are equipped to act in the best interests of those we serve. The policy also reinforces YGAK’s commitment to creating a safe and supportive environment for all, and to holding individuals accountable for misconduct.
          </p>
        </motion.section>

        {/* Section 3 */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">3. Scope of the Policy</h2>
          <p className="leading-relaxed">
            This policy applies to all individuals engaged in YGAK’s work, including staff, volunteers, interns, board members, consultants, implementing partners, grantees, and contractors. All such individuals are required to acknowledge their understanding of and compliance with this policy through their contracts or agreements with YGAK.
          </p>
        </motion.section>

        {/* Section 4 */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">4. Policy Statement</h2>
          <p className="leading-relaxed">
            YGAK maintains a zero-tolerance approach to all forms of abuse, harassment, and exploitation whether directed at children, vulnerable adults, staff, volunteers, or community members. We are committed to putting in place proactive and responsive measures to ensure the safety, dignity, and well-being of everyone we work with and serve. Safeguarding is a shared responsibility. YGAK recognizes its moral, legal, and social duty to protect individuals from harm and to promote a culture of accountability, respect, and care. This policy applies to all YGAK activities and will be communicated to all staff, volunteers, partners, and stakeholders. Any breach of this policy will be treated as a serious disciplinary matter and may result in termination of employment or partnership, and referral to law enforcement or regulatory authorities.
          </p>
        </motion.section>

        {/* Section 5 */}
        <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        >
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">5. Key Principles</h2>
        <p className="leading-relaxed">
            YGAK upholds the following safeguarding principles:
            <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Every individual has an equal right to protection from abuse, regardless of age, gender, race, ethnicity, disability, religion, sexual orientation, political opinion, or social status.</li>
            <li>The best interests of the child, vulnerable adult, or affected individual must be the primary consideration in all decisions and actions.</li>
            <li>Safeguarding is everyone’s responsibility and must be embedded in all aspects of our work.</li>
            <li>All concerns, allegations, or suspicions of abuse will be taken seriously and responded to promptly, fairly, and confidentially.</li>
            </ul>
        </p>
        </motion.section>

        {/* Section 6 */}
        <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        >
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">6. Commitments</h2>
        <p className="leading-relaxed">
            YGAK commits to:
            <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Fulfilling its duty of care to children, vulnerable adults, and staff by acting swiftly and appropriately when there is reason to believe someone is at risk or has been harmed.</li>
            <li>Establishing clear procedures for reporting, investigating, and responding to safeguarding concerns.</li>
            <li>Providing regular training, induction, and awareness sessions for staff, volunteers, and partners on safeguarding responsibilities.</li>
            <li>Implementing safer recruitment practices and maintaining transparent systems for accountability and learning.</li>
            <li>Ensuring that all partners, grantees, and contractors are informed of and expected to comply with this policy. Non-compliance may result in suspension or termination of the partnership.</li>
            <li>Maintaining confidentiality and protecting the identity of individuals involved in safeguarding reports, to the extent practicable and appropriate.</li>
            </ul>
        </p>
        </motion.section>

        {/* Section 7 */}
        <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        >
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">7. Safe Recruitment and Screening</h2>
        <p className="leading-relaxed">
            YGAK will implement safe recruitment practices to minimize the risk of harm to children and vulnerable adults. This includes conducting background checks, reference verification, and screening for prior misconduct or safeguarding violations. All staff, volunteers, and consultants will undergo safeguarding orientation as part of their onboarding process. Recruitment materials and interviews will include safeguarding-related questions to assess candidates’ understanding and commitment to child protection and ethical conduct.
        </p>
        </motion.section>

        {/* Section 8 */}
        <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        >
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">8. Roles and Responsibilities</h2>
        <p className="leading-relaxed">
            Safeguarding is a shared responsibility across all levels of YGAK. Each group plays a vital role in upholding the safety, dignity, and protection of all individuals engaged in our work:
            <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Board of Directors: Provide strategic oversight and ensure that safeguarding is embedded in governance, risk management, and organizational accountability. They review safeguarding reports and support policy enforcement.</li>
            <li>Secretariat and Management Staff: Lead the implementation of safeguarding measures across programs and operations. They are responsible for ensuring staff and volunteers are trained, concerns are addressed promptly, and safeguarding is integrated into organizational culture.</li>
            <li>Volunteers: Uphold safeguarding principles in all interactions with beneficiaries and peers. Volunteers are expected to report concerns immediately and participate in safeguarding orientation and refresher sessions.</li>
            <li>Partners and Contractors: Must comply with YGAK’s Safeguarding Policy and demonstrate alignment with its principles. They are responsible for ensuring their staff and operations do not expose individuals to harm. Breaches may result in suspension or termination of engagement.</li>
            </ul>
        </p>
        </motion.section>

        {/* Section 9 */}
        <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        >
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">9. Reporting a Safeguarding Concern</h2>
        <p className="leading-relaxed">
            Any YGAK staff member, volunteer, or affiliate who receives or becomes aware of a safeguarding concern must report it immediately to a trusted senior officer depending on the hierarchy. Reports may be made verbally or in writing and should include as much detail as possible. If the concern involves a senior officer, the matter should be escalated directly to the Chief Executive Officer or Chairperson of the Board. External parties, including partners and community members, are encouraged to report concerns through their primary YGAK contact. All reports will be treated with sensitivity and urgency, and no one will face retaliation for reporting in good faith. YGAK will investigate all reported incidents promptly, fairly, and impartially and take appropriate actions, including suspension, termination, or referral to authorities where necessary. Documentation of all investigations and outcomes shall be maintained securely. A dedicated safeguarding email address will be established to facilitate confidential reporting.
        </p>
        </motion.section>

        {/* Section 10 */}
        <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.9 }}
        >
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">10. Monitoring and Evaluation</h2>
        <p className="leading-relaxed">
            YGAK will regularly monitor the implementation of this policy through internal audits, feedback mechanisms, and periodic reviews. Safeguarding indicators will be integrated into program evaluations and organizational performance assessments. Lessons learned from reported cases and investigations will inform policy updates and training content. The Chief Executive Officer will present an annual safeguarding report to the Board, highlighting trends, actions taken, and areas for improvement.
        </p>
        </motion.section>

        {/* Section 11 */}
        <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.0 }}
        >
        <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">11. Effective Date and Approval</h2>
        <p className="leading-relaxed">
            This Policy takes effect upon approval by the YGAK Board of Directors and remains in force until reviewed or amended. All staff, volunteers, and partners are required to acknowledge receipt and understanding of this policy upon engagement with YGAK.
        </p>
        </motion.section>

      </div>
    </div>
  );
};

export default SafeguardingPolicy;
