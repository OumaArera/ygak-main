import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import DonateModal from "../components/home/DonateModal";
import logo from "/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Main navigation items — only "Home" has a direct href
  const navItems = [
    {
      name: "Home",
      href: "/",
      subItems: [],
    },
    {
      name: "About Us",
      base: "/about",
      subItems: [
        { name: "Our Story", path: "/our-story" },
        { name: "Our Team", path: "/management-team" },
        { name: "Our Donors & Partners", path: "/donors-and-partners" },
        { name: "Our Impact Stories", path: "/impact-stories" },
      ],
    },
    {
      name: "What we do",
      base: "/activities",
      subItems: [
        { name: "Projects", path: "/projects" },
        { name: "Programs", path: "/programs" },
        { name: "Initiatives", path: "/inititives" },
        { name: "Events", path: "/events" },
      ],
    },
    {
      name: "Media Center",
      base: "/media",
      subItems: [
        { name: "Press", path: "/press" },
        { name: "Newsletters", path: "/newsletters" },
        { name: "Photos", path: "/photos" },
        { name: "Videos", path: "/videos" },
        
      ],
    },
    {
      name: "Resources",
      base: "/resources",
      subItems: [
        // { name: "Publications", path: "/publications" },
        { name: "Reports", path: "/reports" },
        { name: "Policy Briefs", path: "/policy-briefs" },
        { name: "Corporate Documents", path: "/corporate-documents" },
        { name: "Platform Websites", path: "/platform-websites" },
        { name: "Blogs", path: "/blogs" },
        { name: "Conflict of Interest Policy", path: "/conflict-of-interest" },
        { name: "Anti-Bribery and Anti-Fraud Policy", path: "/anti-bribery-and-anti-fraud" },
        { name: "Whistle Blower Protection Policy", path: "/whistle-blower-protection" },
        { name: "Safeguarding Policy", path: "/safeguarding-policy" },
        { name: "Donor and Partner Statement", path: "/donor-and-partner-statement" },
      ],
    },
    {
      name: "Get Involved",
      base: "/get-involved",
      subItems: [
        { name: "Join as Volunteer", path: "/volunteer" },
        { name: "Donate", path: "/donate" },
        { name: "Partner with Us", path: "/partner" },
        { name: "Contact Us", path: "/contact-us" },
      ],
    },
  ];

  const handleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-[#1c4b28]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="flex items-center space-x-3 cursor-pointer md:-ml-6 lg:-ml-10"
>
  <Link to="/" className="flex items-center space-x-3">
    <img
      src={logo}
      alt="YFGAK Logo"
      className="w-14 h-14 object-contain rounded-full border-2 border-white/50 shadow-sm"
    />
    <div>
      <h1
        className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
          scrolled ? "text-[#1c4b28]" : "text-white"
        }`}
      >
        Youths for Green Action Kenya
      </h1>
      <p
        className={`text-xs font-medium tracking-wide transition-colors duration-300 ${
          scrolled ? "text-gray-600" : "text-gray-100"
        }`}
      >
        Action for Sustainable Development
      </p>
    </div>
  </Link>
</motion.div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center relative">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() =>
                  item.subItems.length > 0 && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* If Home → direct link, else → dropdown trigger */}
                {item.name === "Home" ? (
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 text-sm font-medium transition duration-300 ${
                      scrolled
                        ? "text-[#1c4b28] hover:text-[#2E7D32]"
                        : "text-gray-50 hover:text-green-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleDropdown(item.name)}
                    className={`flex items-center gap-1 text-sm font-medium transition duration-300 ${
                      scrolled
                        ? "text-[#1c4b28] hover:text-[#2E7D32]"
                        : "text-gray-50 hover:text-green-200"
                    }`}
                  >
                    {item.name}
                    <ChevronDown size={14} />
                  </button>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.subItems.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-52"
                    >
                      {item.subItems.map((sub, idx) => (
                        <Link
                          key={idx}
                          to={`${item.base}${sub.path}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#1c4b28] transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Donate Button */}
            <motion.button
              onClick={() => setShowDonateModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2E7D32] hover:bg-[#145A24] text-white px-5 py-2 rounded-full shadow-md font-semibold transition duration-300"
            >
              Donate
            </motion.button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled ? "text-[#1c4b28]" : "text-white"
              } focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-xl border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {/* Home routes directly, others toggle submenus */}
                  {item.name === "Home" ? (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-[#1c4b28] font-medium hover:text-[#2E7D32] transition duration-200"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => handleDropdown(item.name)}
                        className="flex justify-between w-full text-left text-[#1c4b28] font-medium hover:text-[#2E7D32] transition duration-200"
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Expandable Subitems */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-2 space-y-1"
                          >
                            {item.subItems.map((sub, idx) => (
                              <Link
                                key={idx}
                                to={`${item.base}${sub.path}`}
                                onClick={() => setIsOpen(false)}
                                className="block text-sm text-gray-700 hover:text-[#2E7D32] transition"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}

              {/* Donate Button */}
              <button
                onClick={() => {
                  setShowDonateModal(true);
                  setIsOpen(false);
                }}
                className="block w-full text-center bg-[#2E7D32] hover:bg-[#145A24] text-white font-semibold py-2 rounded-full transition duration-300"
              >
                Donate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Donate Modal */}
      <DonateModal
        isOpen={showDonateModal}
        onClose={() => setShowDonateModal(false)}
      />
    </header>
  );
};

export default Header;
