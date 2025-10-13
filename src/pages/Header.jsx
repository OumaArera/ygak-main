import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DonateModal from "../components/home/DonateModal";
import logo from "/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Media Center", href: "/media" },
    { name: "Events", href: "/events" },
    { name: "Resources", href: "/resources" },
    { name: "Blogs", href: "/blog" },
    { name: "Get Involved", href: "/get-involved" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-[#1B5E20]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Organization Name */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3 cursor-pointer"
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
                    scrolled ? "text-[#1B5E20]" : "text-white"
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
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition duration-300 ${
                  scrolled
                    ? "text-[#1B5E20] hover:text-[#2E7D32]"
                    : "text-gray-50 hover:text-green-200"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Donate Button triggers modal */}
            <motion.button
              onClick={() => setShowDonateModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2E7D32] hover:bg-[#145A24] text-white px-5 py-2 rounded-full shadow-md font-semibold transition duration-300"
            >
              Donate
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled ? "text-[#1B5E20]" : "text-white"
              } focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-xl border-t border-gray-100"
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-[#1B5E20] font-medium hover:text-[#2E7D32] transition duration-200"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Donate Button triggers modal */}
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

      {/* Donate Modal */}
      <DonateModal
        isOpen={showDonateModal}
        onClose={() => setShowDonateModal(false)}
      />
    </header>
  );
};

export default Header;
