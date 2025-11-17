import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Youtube,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import logo from "/logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook />, href: "https://facebook.com/profile.php?id=61577276630292", label: "Facebook" },
    { icon: <FaXTwitter />, href: "https://x.com/yfga_kenya/", label: "X (Twitter)" },
    { icon: <Instagram />, href: "https://instagram.com/yfga.kenya", label: "Instagram" },
    { icon: <Linkedin />, href: "https://linkedin.com/company/youths-action-kenya/", label: "LinkedIn" },
    { icon: <SiTiktok />, href: "https://tiktok.com/@yfga_kenya?_t=8ihw0upibvp&_r=1", label: "TikTok" },
    { icon: <Youtube />, href: "https://youtube.com/channel/UCCj64RtH5_JqoZLt-SZSm2w?sub_confirmation=1", label: "YouTube" },
  ];

  const quickLinks = [
    {
      section: "About Us",
      links: [
        { name: "Our Story", href: "/about/our-story" },
        { name: "Our Team", href: "/about/management-team" },
        { name: "Donors & Partners", href: "/about/donors-and-partners" },
        { name: "Impact Stories", href: "/about/impact-stories" },
      ],
    },
    {
      section: "Activities",
      links: [
        { name: "Projects", href: "/activities/projects" },
        { name: "Programs", href: "/activities/programs" },
        { name: "Initiatives", href: "/activities/inititives" },
        { name: "Events", href: "/activities/events" },
      ],
    },
    {
      section: "Media Center",
      links: [
        { name: "Press", href: "/media/press" },
        { name: "Newsletters", href: "/media/newsletters" },
        { name: "Photos", href: "/media/photos" },
        { name: "Videos", href: "/media/videos" },
      ],
    },
    {
      section: "Resources",
      links: [
        { name: "Publications", href: "/resources/publications" },
        { name: "Reports", href: "/resources/reports" },
        { name: "Policy Briefs", href: "/resources/policy-briefs" },
        { name: "Corporate Documents", href: "/resources/policy-briefs" },
        { name: "Platform Websites", href: "/resources/platform-websites" },
        { name: "Blogs", href: "/resources/blogs" },
      ],
    },
    {
      section: "Get Involved",
      links: [
        { name: "Join as Volunteer", href: "/get-involved/volunteer" },
        { name: "Donate", href: "/get-involved/donate" },
        { name: "Partner with Us", href: "/get-involved/partner" },
        { name: "Contact Us", href: "/get-involved/contact-us" },
      ],
    },
    {
      section: "Policies",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Donor & Partner Policies", href: "/resources/donor-and-partner-statement" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1B5E20] text-white mt-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#145A24]/90 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
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
            community development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-center text-lg mb-4 border-b border-white/20 pb-2 text-green-100">
            Quick Links
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {quickLinks.map((section) => (
              <div key={section.section}>
                <h4 className="font-medium text-green-100 mb-2">{section.section}</h4>
                <ul className="space-y-1 text-green-50 text-sm">
                  {section.links.map((link) => (
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
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-center text-lg mb-4 border-b border-white/20 pb-2 text-green-100">
            Contact Us
          </h3>
          <ul className="space-y-3 text-green-50 text-sm">
            <li className="flex items-start space-x-2">
              <MapPin size={18} className="mt-1 text-yellow-300" />
              <span>Nakuru, Kenya</span>
            </li>
            <li className="flex items-start space-x-2">
              <Phone size={18} className="mt-1 text-yellow-300" />
              <span>+254 111 621 513 (Phone & WhatsApp)</span>
            </li>
            <li className="flex items-start space-x-2">
              <Mail size={18} className="mt-1 text-yellow-300" />
              <span>info@yfgak.org</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-center text-lg mb-4 border-b border-white/20 pb-2 text-green-100">
            Stay Connected
          </h3>
          <p className="text-sm text-green-50 mb-3">
            Subscribe for updates on our projects and events.
          </p>

          {/* MOBILE-FRIENDLY FIX: ensure input can shrink and button keeps a minimum width */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-white/10 rounded-full mb-4 w-full"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="flex-grow min-w-0 px-3 py-2 bg-transparent text-white placeholder-green-200 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#2E7D32] hover:bg-[#145A24] text-white font-semibold px-4 py-2 rounded-full ml-2 transition duration-300 whitespace-nowrap min-w-[110px]"
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

      <div className="border-t border-white/10"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-green-50">
        <p>
          &copy; {new Date().getFullYear()} Youths for Green Action Kenya. All
          rights reserved.
        </p>
        <p className="mt-2 md:mt-0">
          Developed & Maintained by{" "}
          <a
            href="https://zafrika.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 font-semibold hover:underline"
          >
            Zafrika
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
