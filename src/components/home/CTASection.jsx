import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DonateModal from "./DonateModal";
import VolunteerFormModal from "./VolunteerFormModal";

const CTASection = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const navigate = useNavigate()

  return (
    <section className="relative py-16 bg-[#145A24] text-center overflow-hidden">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800/50 via-green-700/30 to-green-800/50 text-white"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Join Our Movement
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-100">
          Together, we can restore our planet — one action, one youth at a time.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Volunteer Button */}
          <button
            onClick={() => navigate("/get-involved/volunteer")}
            className="bg-white text-[#145A24] hover:bg-green-50 px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Become a Volunteer
          </button>

          {/* Donate Button */}
          <button
            onClick={()=> navigate("/get-involved/donate")}
            className="bg-yellow-400 hover:bg-yellow-500 text-[#145A24] px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Modals */}
      <DonateModal
        isOpen={showDonateModal}
        onClose={() => setShowDonateModal(false)}
      />
      <VolunteerFormModal
        isOpen={showVolunteerModal}
        onClose={() => setShowVolunteerModal(false)}
      />
    </section>
  );
};

export default CTASection;
