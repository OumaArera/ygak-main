import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Users, ArrowDownCircle, Loader2 } from "lucide-react"; 
import DonateModal from "../components/home/DonateModal";
import Notification from '../components/common/Notification'; 
import VolunteerFormModal from "../components/home/VolunteerFormModal";
import { createData } from "../services/apiService";

const GetInvolved = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [isVolunteerSubmitting, setIsVolunteerSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });

  const showNotification = (message, type = "success") => {
    setNotification({
      isVisible: true,
      message,
      type,
    });
  };

  const closeNotification = () => {
    setNotification({ ...notification, isVisible: false });
  };

  const handleVolunteerSubmit = async (formData) => {
    setIsVolunteerSubmitting(true);
    const endpoint = "volunteers"; 

    try {
      const response = await createData(endpoint, formData);
      console.log("Response: ", JSON.stringify(response));
      console.log("Payload", JSON.stringify(formData))
      
      if (response.success) {
        showNotification("Your volunteer application has been submitted successfully!", "success");
        setShowVolunteerModal(false);
      } else {
        if (response.error === "Validation error" && Array.isArray(response.details) && response.details.length > 0) {
          
          const firstDetail = response.details[0];
          let userMessage = `Error in ${firstDetail.field}: ${firstDetail.message}.`;
          
          if (firstDetail.field === "phoneNumber" && firstDetail.message.includes("unique")) {
             userMessage = "This phone number is already registered. Please check the number or use a different one.";
          } 
          else if (response.details.length > 1) {
              userMessage = `Multiple errors found: ${response.details.length} fields failed validation. Please review your input.`;
          }

          showNotification(userMessage, "error");

        } else {
          const errorMessage = response.message || "Submission failed. Please check your data and try again.";
          showNotification(errorMessage, "error");
        }
      }
    } catch (error) {
      console.error("Volunteer submission error:", error);
      showNotification("An unexpected error occurred. Please check your connection and try again.", "error");
    } finally {
      setIsVolunteerSubmitting(false);
    }
};

  return (
    <div className="bg-gray-50 min-h-screen relative">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#1B5E20] text-white -mt-4 sm:-mt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
            Get Involved — Be the Change 🌍
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-green-100 mb-6">
            Your participation fuels climate action. Contribute, volunteer, and help us
            restore Kenya’s natural ecosystems — one community at a time.
          </p>
          <ArrowDownCircle className="mx-auto animate-bounce" size={36} />
        </motion.div>
        <div className="absolute inset-0 bg-[url('/background.JPG')] bg-cover bg-center opacity-20" />
      </section>

      {/* Interactive Action Cards */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10">
        {/* Donate Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-10 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 z-10" />
          
          <div className="relative z-20">
            <Heart
              size={60}
              className="mx-auto text-green-600 mb-4 group-hover:text-green-700 transition"
            />
            <h2 className="text-3xl font-bold text-[#1B5E20] mb-4">Donate</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Your donation directly supports reforestation, environmental education,
              and youth-led sustainable development programs across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => setShowDonateModal(true)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
              >
                Quick Donate
              </button>
            </div>
          </div>
        </motion.div>

        {/* Volunteer Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-10 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 z-10" />
          
          <div className="relative z-20">
            <Users
              size={60}
              className="mx-auto text-green-600 mb-4 group-hover:text-green-700 transition"
            />
            <h2 className="text-3xl font-bold text-[#1B5E20] mb-4">Volunteer</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Join our growing network of youth volunteers. Participate in tree planting,
              clean-ups, and environmental leadership programs.
            </p>
            <button
              onClick={() => setShowVolunteerModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
              disabled={isVolunteerSubmitting}
            >
              {isVolunteerSubmitting ? (
                <div className="flex items-center space-x-2">
                  <Loader2 size={20} className="animate-spin" />
                  <span>Submitting...</span>
                </div>
              ) : (
                "Register Now"
              )}
            </button>
          </div>
        </motion.div>
      </section>

      {/* Donation Tiers Section */}
      <section id="donation-tiers" className="max-w-5xl mx-auto text-center mb-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#1B5E20] mb-8"
        >
          Donation Tiers 🌱
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Plant 10 Trees", amount: "KES 500" },
            { title: "Plant 50 Trees", amount: "KES 2,500" },
            { title: "Plant 100 Trees", amount: "KES 5,000" },
          ].map((tier, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-green-800 mb-2">{tier.title}</h3>
              <p className="text-green-600 font-bold mb-4">{tier.amount}</p>
              <button
                onClick={() => setShowDonateModal(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-medium transition"
              >
                Donate
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Modals === */}
      {showDonateModal && (
        <DonateModal
          isOpen={showDonateModal}
          onClose={() => setShowDonateModal(false)}
        />
      )}

      {showVolunteerModal && (
        <VolunteerFormModal
          isOpen={showVolunteerModal}
          onClose={() => setShowVolunteerModal(false)}
          onSubmit={handleVolunteerSubmit} 
          isSubmitting={isVolunteerSubmitting} 
        />
      )}

      {/* Notification Component */}
      <Notification 
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={closeNotification}
      />
    </div>
  );
};

export default GetInvolved;