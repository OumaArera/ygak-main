import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Linkedin,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import logo from "/logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook />, href: "https://facebook.com/", label: "Facebook" },
    { icon: <FaXTwitter />, href: "https://twitter.com/", label: "X (Twitter)" },
    { icon: <Instagram />, href: "https://instagram.com/", label: "Instagram" },
    { icon: <Linkedin />, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: <SiTiktok />, href: "https://tiktok.com/", label: "TikTok" },
  ];



  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Media Center", href: "/media" },
    { name: "Events", href: "/events" },
    { name: "Resources", href: "/resources" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Blogs", href: "/blog" },
  ];

  return (
    <footer className="bg-[#1B5E20] text-white mt-16 relative overflow-hidden">
      {/* Subtle decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#145A24]/90 to-transparent pointer-events-none"></div>

      {/* Top Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo & About */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={logo}
              alt="YFGAK Logo"
              className="w-14 h-14 object-contain rounded-full border border-white/40 shadow-sm"
            />
            <h2 className="font-bold text-lg text-green-100">
              Youths for Green Action Kenya
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-green-100/90">
            Empowering Kenyan youth to lead sustainable environmental action and
            community development across the nation.
          </p>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-lg mb-4 border-b border-white/20 pb-2 text-green-100">
            Quick Links
          </h3>
          <ul className="space-y-2 text-green-50">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-green-200 transition duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3: Contact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-lg mb-4 border-b border-white/20 pb-2 text-green-100">
            Contact Us
          </h3>
          <ul className="space-y-3 text-green-50 text-sm">
            <li className="flex items-start space-x-2">
              <MapPin size={18} className="mt-1 text-yellow-300" />
              <span>Nakuru, Kenya</span>
            </li>
            <li className="flex items-start space-x-2">
              <Phone size={18} className="mt-1 text-yellow-300" />
              <span>+254 748 800 714 / +254 753 472 960</span>
            </li>
            <li className="flex items-start space-x-2">
              <Mail size={18} className="mt-1 text-yellow-300" />
              <span>info@yfgak.org</span>
            </li>
          </ul>
        </motion.div>

        {/* Column 4: Newsletter & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-lg mb-4 border-b border-white/20 pb-2 text-green-100">
            Stay Connected
          </h3>
          <p className="text-sm text-green-50 mb-3">
            Subscribe to receive updates about our environmental initiatives and
            upcoming events.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-white/10 rounded-full overflow-hidden mb-4"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="flex-grow px-3 py-2 bg-transparent text-white placeholder-green-200 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#2E7D32] hover:bg-[#145A24] text-white font-semibold px-4 py-2 rounded-r-full transition duration-300"
            >
              Subscribe
            </button>
          </form>

          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition duration-200 text-green-50"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Bottom Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-green-50">
        <p>
          &copy; {new Date().getFullYear()} Youths for Green Action Kenya. All
          rights reserved.
        </p>
        <p className="mt-2 md:mt-0">
          Developed & Maintained by{" "}
          <a
            href="https://safestack.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 font-semibold hover:underline"
          >
            SafeStack Technologies
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
