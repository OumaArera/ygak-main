import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2, AlertTriangle, Users } from "lucide-react";
import Notification from '../components/common/Notification'; 
import { createData, getData } from "../services/apiService"; 

const VolunteerRegisterPage = () => {
  const [institutions, setInstitutions] = useState([]);
  const [loadingInstitutions, setLoadingInstitutions] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [notification, setNotification] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });

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
    nationality: "Kenyan", // Default for convenience
  });

  // --- Notification Handlers ---
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

  // --- Data Fetching ---
  // Fetch institutions on component mount
  useEffect(() => {
    const fetchInstitutions = async () => {
      setLoadingInstitutions(true);
      try {
        const endpoint = "institutions";
        const response = await getData(endpoint);
        setInstitutions(response?.data || []);
      } catch (error) {
        console.error("Error fetching institutions:", error);
        setInstitutions([]);
      } finally {
        setLoadingInstitutions(false);
      }
    };
    fetchInstitutions();
  }, []);

  // --- Form Handlers ---
  const handleChange = (e) => {
    setValidationError("");
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      const newData = {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };

      // Logic to clear conditional fields when switching student status
      if (name === 'isStudent') {
        if (!checked) {
          newData.institutionId = "";
          newData.schoolRegNumber = "";
        } else {
          newData.identificationNumber = "";
        }
      }
      return newData;
    });
  };

  // Custom validation function for international phone format
  const validatePhone = (phone) => {
    const phoneRegex = /^\+[0-9\s-]{7,20}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationError("");

    // --- Phone Number Validation ---
    if (!validatePhone(formData.phoneNumber)) {
      setValidationError("Please enter your phone number in international format (e.g., +254712345678).");
      return;
    }
    if (formData.nextOfKinPhoneNumber && !validatePhone(formData.nextOfKinPhoneNumber)) {
      setValidationError("Please enter the Next of Kin phone number in international format (e.g., +254712345678).");
      return;
    }

    // --- Payload Cleaning: Conditionally include/exclude fields ---
    const payload = { ...formData };

    // 1. Handle optional Next of Kin Email
    if (!payload.nextOfKinEmail || payload.nextOfKinEmail.trim() === "") {
      delete payload.nextOfKinEmail;
    }

    // 2. Handle conditional Student/Non-Student fields
    if (payload.isStudent) {
      delete payload.identificationNumber;

      if (!payload.institutionId || !payload.schoolRegNumber) {
        setValidationError("Please select your institution and enter your registration number.");
        return;
      }
    } else {
      delete payload.institutionId;
      delete payload.schoolRegNumber;

      if (!payload.identificationNumber) {
        setValidationError("Please enter your Identification Number (ID/Passport).");
        return;
      }
    }

    // --- Submission Logic (from GetInvolved.js) ---
    setIsSubmitting(true);
    const endpoint = "volunteers";

    try {
      const response = await createData(endpoint, payload);

      if (response.success) {
        showNotification("Your volunteer application has been submitted successfully! We'll be in touch soon.", "success");
        // Optionally reset form data on success
        setFormData({
            firstName: "", otherNames: "", sex: "", dateOfBirth: "", phoneNumber: "", email: "",
            nextOfKinName: "", nextOfKinPhoneNumber: "", nextOfKinEmail: "", isStudent: false,
            institutionId: "", schoolRegNumber: "", identificationNumber: "",
            countyOfResidence: "", subCountyOfResidence: "", nationality: "Kenyan",
        });
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
      setIsSubmitting(false);
    }
  };

  // --- Render ---
  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center text-green-700 mb-3">
              <Users size={40} className="mr-2" />
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B5E20]">
                Volunteer Registration 🌿
              </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our movement! Fill out the form below to register as a volunteer and contribute to climate action.
          </p>
        </motion.header>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10"
        >
          {/* Validation Error Display */}
          {validationError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center space-x-2 mb-6"
            >
              <AlertTriangle size={20} />
              <p className="text-sm font-medium">{validationError}</p>
            </motion.div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <h3 className="text-xl font-semibold text-green-800 md:col-span-2 border-b pb-2 mb-2">Personal Information</h3>
            {/* Personal Info */}
            <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} value={formData.firstName} className="border border-gray-300 rounded-lg px-4 py-3" />
            <input type="text" name="otherNames" placeholder="Other Names" required onChange={handleChange} value={formData.otherNames} className="border border-gray-300 rounded-lg px-4 py-3" />
            <select name="sex" required onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-3" value={formData.sex}>
              <option value="">Select Sex</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input type="date" name="dateOfBirth" required onChange={handleChange} value={formData.dateOfBirth} className="border border-gray-300 rounded-lg px-4 py-3" />

            <h3 className="text-xl font-semibold text-green-800 md:col-span-2 border-b pb-2 mt-4 mb-2">Contact Details</h3>
            {/* Contact Info */}
            <input type="tel" name="phoneNumber" placeholder="Phone Number (e.g. +2547...)" required onChange={handleChange} value={formData.phoneNumber} className={`border rounded-lg px-4 py-3 ${validationError.includes("phone number in international format") ? "border-red-500" : "border-gray-300"}`} />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} value={formData.email} className="border border-gray-300 rounded-lg px-4 py-3" />

            <h3 className="text-xl font-semibold text-green-800 md:col-span-2 border-b pb-2 mt-4 mb-2">Next of Kin</h3>
            {/* Next of Kin */}
            <input type="text" name="nextOfKinName" placeholder="Next of Kin Name" required onChange={handleChange} value={formData.nextOfKinName} className="border border-gray-300 rounded-lg px-4 py-3" />
            <input type="tel" name="nextOfKinPhoneNumber" placeholder="Next of Kin Phone (e.g. +2547...)" required onChange={handleChange} value={formData.nextOfKinPhoneNumber} className={`border rounded-lg px-4 py-3 ${validationError.includes("Next of Kin phone number in international format") ? "border-red-500" : "border-gray-300"}`} />
            <input type="email" name="nextOfKinEmail" placeholder="Next of Kin Email (Optional)" onChange={handleChange} value={formData.nextOfKinEmail} className="border border-gray-300 rounded-lg px-4 py-3 md:col-span-2" />

            <h3 className="text-xl font-semibold text-green-800 md:col-span-2 border-b pb-2 mt-4 mb-2">Student/ID Information</h3>
            {/* Student Check */}
            <label className="flex items-center space-x-2 md:col-span-2 mb-2">
              <input type="checkbox" name="isStudent" checked={formData.isStudent} onChange={handleChange} className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
              <span className="text-gray-700 font-medium">I am a student</span>
            </label>

            {/* Conditional Fields */}
            {formData.isStudent ? (
              <>
                <div className="md:col-span-2 relative">
                    <select
                        name="institutionId"
                        required={formData.isStudent}
                        onChange={handleChange}
                        value={formData.institutionId}
                        className="border border-gray-300 rounded-lg px-4 py-3 w-full appearance-none"
                        disabled={loadingInstitutions}
                    >
                        <option value="">
                            {loadingInstitutions ? "Loading Institutions..." : "Select Institution"}
                        </option>
                        {!loadingInstitutions && institutions.length > 0 && institutions.map((inst) => (
                            <option key={inst.id} value={inst.id}>
                                {inst.name}
                            </option>
                        ))}
                        {!loadingInstitutions && institutions.length === 0 && (
                            <option value="" disabled>No institutions found</option>
                        )}
                    </select>
                    {loadingInstitutions && (
                        <div className="absolute inset-0 flex items-center justify-start bg-white/70 rounded-lg p-3">
                            <Loader2 size={16} className="animate-spin mr-2 text-green-700" />
                            <span className="text-sm text-green-700">Fetching institution list...</span>
                        </div>
                    )}
                </div>

                <input type="text" name="schoolRegNumber" placeholder="School Registration Number" required={formData.isStudent} onChange={handleChange} value={formData.schoolRegNumber} className="border border-gray-300 rounded-lg px-4 py-3 md:col-span-2" />
              </>
            ) : (
              <input type="text" name="identificationNumber" placeholder="Identification Number (ID/Passport)" required={!formData.isStudent} onChange={handleChange} value={formData.identificationNumber} className="border border-gray-300 rounded-lg px-4 py-3 md:col-span-2" />
            )}

            <h3 className="text-xl font-semibold text-green-800 md:col-span-2 border-b pb-2 mt-4 mb-2">Location & Nationality</h3>
            {/* Location */}
            <input type="text" name="countyOfResidence" placeholder="County of Residence" required onChange={handleChange} value={formData.countyOfResidence} className="border border-gray-300 rounded-lg px-4 py-3" />
            <input type="text" name="subCountyOfResidence" placeholder="Sub-County of Residence" required onChange={handleChange} value={formData.subCountyOfResidence} className="border border-gray-300 rounded-lg px-4 py-3" />
            <input type="text" name="nationality" placeholder="Nationality" required onChange={handleChange} value={formData.nationality} className="border border-gray-300 rounded-lg px-4 py-3" />

            {/* Submit Button */}
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition disabled:bg-green-400 disabled:cursor-wait flex items-center justify-center space-x-2 shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  "Submit Volunteer Registration"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Notification Component (Fixed to the corner) */}
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={closeNotification}
      />
    </div>
  );
};

export default VolunteerRegisterPage;