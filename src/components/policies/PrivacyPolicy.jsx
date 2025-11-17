import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 pb-16">
      {/* Hero / Header */}
      <section className="relative h-[40vh] flex items-center justify-center text-center bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Privacy Policy
        </motion.h1>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-30"></div>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-12 space-y-8">
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Youths for Green Action Kenya (“YGAK”, “we”, “us” or “our”) is committed to protecting the privacy
            and personal data of all individuals (“you”, “your”) who interact with our website, services, and
            initiatives. This Privacy Policy describes how we collect, use, disclose, and safeguard your information,
            and your rights under Kenya’s Data Protection Act, 2019.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">2. Information We Collect</h2>

          <h3 className="text-lg font-medium mt-4">2.1. Personal Data You Provide</h3>
          <p className="leading-relaxed text-gray-700">
            When you use our contact forms, sign up for newsletters, donate, partner with us, or otherwise
            communicate with us, we may collect:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>Full name (first and last name)</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Company or organization name (if applicable)</li>
            <li>Subject or reason for inquiry</li>
            <li>Message content</li>
            <li>Preferred contact method</li>
            <li>How you heard about us</li>
            <li>Best time to contact you</li>
            <li>Attachments (e.g., pitch decks, documents)</li>
          </ul>

          <h3 className="text-lg font-medium mt-4">2.2. Automatically Collected Data</h3>
          <p className="leading-relaxed text-gray-700">
            When you visit our website, we may automatically collect certain technical and usage information including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URL</li>
            <li>Pages you visited and actions taken</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3 className="text-lg font-medium mt-4">2.3. Cookies & Tracking</h3>
          <p className="leading-relaxed text-gray-700">
            We use cookies, web beacons, and similar technologies to improve your experience, analyze usage, and
            provide personalized services. You may control cookies through your browser settings, but disabling
            some cookies may affect the functionality of our website.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">3. How We Use Your Information</h2>
          <p className="leading-relaxed text-gray-700">
            We process personal data for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>To respond to inquiries, partnership requests, and messages you send us.</li>
            <li>To send newsletters, updates, and communications if you subscribe.</li>
            <li>To facilitate donations or program participation.</li>
            <li>To analyze website usage and improve our services.</li>
            <li>To comply with legal obligations, prevent fraud, and protect our rights.</li>
            <li>To enforce our terms of service and ensure security.</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">4. Legal Basis for Processing</h2>
          <p className="leading-relaxed text-gray-700">
            Under Kenya’s Data Protection Act, 2019, we rely on various legal bases to process personal data:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li><strong>Consent:</strong> When you voluntarily provide your data (e.g., via contact form or subscription).</li>
            <li><strong>Legitimate Interests:</strong> For improving our website, communicating updates, and running programs.</li>
            <li><strong>Legal Obligation:</strong> Where required by law, to maintain records, or prevent unlawful activity.</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">5. Sharing and Disclosure of Your Data</h2>
          <p className="leading-relaxed text-gray-700">
            We may share your personal information with:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>Third-party service providers (e.g., email platforms, analytics tools) on a need-to-know basis.</li>
            <li>Our partners, sponsors, and collaborators when you request partnership or program participation.</li>
            <li>Legal authorities or regulators where required by Kenyan law (e.g., fraud prevention, compliance).</li>
            <li>Any successor organization in the event of a merger, acquisition, or sale of our assets (with safeguards).</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">6. Data Retention</h2>
          <p className="leading-relaxed text-gray-700">
            We retain your personal data only for as long as necessary for the purposes for which it was collected,
            including to meet legal, regulatory, or tax obligations. When your data is no longer needed, we will
            securely delete or anonymize it.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">7. Your Rights Under Kenyan Law</h2>
          <p className="leading-relaxed text-gray-700">
            Under Kenya’s Data Protection Act, 2019, you have the following rights:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li><strong>Right of Access:</strong> Request a copy of your personal data that we hold.</li>
            <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data.</li>
            <li><strong>Right to Erasure (“Right to be Forgotten”):</strong> Ask us to delete your personal data.</li>
            <li><strong>Right to Restrict Processing:</strong> Limit how we use your data.</li>
            <li><strong>Right to Object:</strong> Object to processing for certain purposes (e.g., direct marketing).</li>
            <li><strong>Data Portability:</strong> Receive a machine-readable copy of your data.</li>
            <li><strong>Right to Withdraw Consent:</strong> You may withdraw consent at any time (for processing based on consent).</li>
          </ul>
          <p className="text-gray-700 mt-4 leading-relaxed">
            To exercise any of these rights, please contact us using the contact details provided below.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">8. Data Security</h2>
          <p className="leading-relaxed text-gray-700">
            We use appropriate technical and organizational measures to protect your personal data, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>Encryption (HTTPS) in transit.</li>
            <li>Access controls and authentication for sensitive systems.</li>
            <li>Regular security assessments and audits.</li>
            <li>Policies for secure data storage and disposal.</li>
            <li>Training for our staff on data protection best practices.</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">9. Third‑Party Links</h2>
          <p className="leading-relaxed text-gray-700">
            Our website may contain links to third‑party sites and services. We are not responsible for their privacy practices.
            We encourage you to read their privacy policies before providing any personal data to them.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">10. Children’s Data</h2>
          <p className="leading-relaxed text-gray-700">
            Our website is not intended for use by children under 18 without parental or guardian consent. 
            We do not knowingly collect personal data from minors. If you believe we have collected such data, please
            contact us immediately so that we can delete it.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">11. International Transfers</h2>
          <p className="leading-relaxed text-gray-700">
            In some cases, your personal data may be transferred to or stored on servers outside Kenya. 
            Where this happens, we will ensure that appropriate safeguards are in place to protect your data,
            in line with Kenya’s Data Protection Act and industry best practices.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">12. Updates to This Policy</h2>
          <p className="leading-relaxed text-gray-700">
            We may update this Privacy Policy from time to time (e.g., when laws change or we introduce new features).
            When we do, we will revise the “Last Updated” date and notify users of major changes via our website or email.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-2xl font-semibold text-[#1B5E20] mb-4">13. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions, requests to exercise your data protection rights, or concerns about your
            privacy, you can contact us at:
          </p>
          <ul className="list-none mt-4 text-gray-700 space-y-2">
            <li><strong>Email:</strong> <a href="mailto:info@yfgak.org" className="text-[#1B5E20] hover:underline">info@yfgak.org</a></li>
            <li><strong>Address:</strong> Nakuru, Kenya</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <p className="text-xs text-gray-500 italic">
            <strong>Last Updated:</strong> November 17, 2025<br />
            This Privacy Policy is governed by the laws of the Republic of Kenya, including the Data Protection Act, 2019.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
