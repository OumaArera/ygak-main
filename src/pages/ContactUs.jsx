import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "../components/home/ContactForm";

const ContactUs = () => {
  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      <section className="relative h-[45vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d160e] text-white -mt-4 sm:-mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-3"
        >
          Contact Us 📧
        </motion.h1>
        <p className="text-white max-w-2xl mx-auto">
          Reach out to Youths for Green Action Kenya for inquiries, partnerships, support, or any questions you may have. We respond promptly.
        </p>
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-20" />
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-[#1B5E20]">Get in Touch</h2>
          <p className="text-gray-700">
            You can contact us via email, phone, or our contact form below. We aim to respond within 24–48 hours.
          </p>

          <div className="space-y-4 text-gray-700 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="text-[#1B5E20]" />
              <span>Nakuru, Kenya</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-[#1B5E20]" />
              <span>+254 111 621 513</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="text-[#1B5E20]" />
              <span>info@ygak.org</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="text-[#1B5E20]" />
              <span>youthsaction31@gmail.com</span>
            </div>
          </div>

          <p className="text-gray-500 text-xs mt-4">
            By submitting this form, you agree to our{" "}
            <a href="/privacy-policy" className="underline text-[#1B5E20]">
              Privacy Policy
            </a>{" "}
            and consent to the collection of your personal data for response purposes.
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;