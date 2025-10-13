import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const institutionsSample = [
  {
    id: "1",
    name: "Egerton University",
    county: "Nakuru",
    subCounty: "Njoro",
    type: "university",
    ownership: "public",
  },
  {
    id: "2",
    name: "Technical University of Kenya",
    county: "Nairobi",
    subCounty: "Starehe",
    type: "university",
    ownership: "public",
  },
  {
    id: "3",
    name: "Rift Valley Institute of Science and Technology",
    county: "Nakuru",
    subCounty: "Nakuru Town West",
    type: "TVET",
    ownership: "public",
  },
];

const VolunteerFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    otherNames: "",
    sex: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    nextOfKinName: "",
    nextOfKinPhoneNumber: "",
    nextOfKinEmail: "",
    isStudent: false,
    institutionId: "",
    schoolRegNumber: "",
    identificationNumber: "",
    countyOfResidence: "",
    subCountyOfResidence: "",
    nationality: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer Data:", formData);
    alert("Volunteer data logged successfully!");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl relative flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-green-700 transition"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="px-6 pt-6 pb-2 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-center text-green-800">
                Join as a Volunteer 🌿
              </h2>
              <p className="text-sm text-center text-gray-600 mt-2">
                Fill out the form below to be part of the YGAK movement.
              </p>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto px-6 py-4 space-y-4 flex-1">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Personal Info */}
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  name="otherNames"
                  placeholder="Other Names"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
                <select
                  name="sex"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option value="">Select Sex</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <input
                  type="date"
                  name="dateOfBirth"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />

                {/* Contact Info */}
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />

                {/* Next of Kin */}
                <input
                  type="text"
                  name="nextOfKinName"
                  placeholder="Next of Kin Name"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  name="nextOfKinPhoneNumber"
                  placeholder="Next of Kin Phone Number"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
                <input
                  type="email"
                  name="nextOfKinEmail"
                  placeholder="Next of Kin Email (Optional)"
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 md:col-span-2"
                />

                {/* Student Check */}
                <label className="flex items-center space-x-2 md:col-span-2">
                  <input
                    type="checkbox"
                    name="isStudent"
                    checked={formData.isStudent}
                    onChange={handleChange}
                  />
                  <span className="text-gray-700">I am a student</span>
                </label>

                {/* Conditional Fields */}
                {formData.isStudent ? (
                  <>
                    <select
                      name="institutionId"
                      required
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg px-3 py-2 md:col-span-2"
                    >
                      <option value="">Select Institution</option>
                      {institutionsSample.map((inst) => (
                        <option key={inst.id} value={inst.id}>
                          {inst.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="schoolRegNumber"
                      placeholder="School Registration Number"
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg px-3 py-2 md:col-span-2"
                    />
                  </>
                ) : (
                  <input
                    type="text"
                    name="identificationNumber"
                    placeholder="Identification Number (ID/Passport)"
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 md:col-span-2"
                  />
                )}

                {/* Location */}
                <input
                  type="text"
                  name="countyOfResidence"
                  placeholder="County of Residence"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  name="subCountyOfResidence"
                  placeholder="Sub-County of Residence"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  name="nationality"
                  placeholder="Nationality"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
              </form>
            </div>

            {/* Sticky Footer Button */}
            <div className="border-t border-gray-200 bg-white p-4 rounded-b-2xl">
              <button
                onClick={handleSubmit}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Submit Volunteer Form
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VolunteerFormModal;
