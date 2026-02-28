import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, AlertTriangle } from "lucide-react";
import { getData } from "../../services/apiService";
import ReCaptchaComponent from "./ReCaptchaComponent";

const VolunteerFormModal = ({ isOpen, onClose, onSubmit, isSubmitting }) => {
  const [institutions, setInstitutions] = useState([]);
  const [loadingInstitutions, setLoadingInstitutions] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [captchaSolved, setCaptchaSolved] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);

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

  const resetForm = () => {
    setFormData({
        firstName: "", otherNames: "", sex: "", dateOfBirth: "", phoneNumber: "", email: "",
        nextOfKinName: "", nextOfKinPhoneNumber: "", nextOfKinEmail: "", isStudent: false,
        institutionId: "", schoolRegNumber: "", identificationNumber: "",
        countyOfResidence: "", subCountyOfResidence: "", nationality: "",
    });
    setValidationError("");
    resetCaptcha();
  };

  const resetCaptcha = () => {
    setCaptchaSolved(false);
    setCaptchaToken(null);
    setCaptchaError(false);
  };
  
  useEffect(() => {
    if (isOpen) {
      const fetchInstitutions = async () => {
        setLoadingInstitutions(true);
        try {
          const endpoint = "institutions";
          const response = await getData(endpoint);
          setInstitutions(response?.data || []);
        } catch (error) {
          setInstitutions([]);
        } finally {
          setLoadingInstitutions(false);
        }
      };
      fetchInstitutions();
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setValidationError("");
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      const newData = {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
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
  
  const handleCaptchaVerify = (solved, token) => {
    setCaptchaSolved(solved);
    setCaptchaToken(token);
    setCaptchaError(false);
    setValidationError(""); 
    
    if (!solved) {
        setValidationError("Security check failed or expired. Please re-verify the reCAPTCHA.");
        setCaptchaToken(null);
    }
  };

  const handleCaptchaError = (hasError) => {
      setCaptchaError(hasError);
      setCaptchaSolved(false);
      setCaptchaToken(null);
      setValidationError("Failed to load security check. Please check your internet connection.");
  }
  
  const validatePhone = (phone) => {
      const phoneRegex = /^\+[0-9\s-]{7,20}$/; 
      return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError("");

    if (!validatePhone(formData.phoneNumber)) {
        setValidationError("Please enter your phone number in international format (e.g., +254712345678).");
        return;
    }
    if (formData.nextOfKinPhoneNumber && !validatePhone(formData.nextOfKinPhoneNumber)) {
        setValidationError("Please enter the Next of Kin phone number in international format (e.g., +254712345678).");
        return;
    }
    
    if (!captchaSolved || captchaError || !captchaToken) {
        setValidationError("Please complete the security challenge before submitting.");
        return;
    }

    const payload = { ...formData, recaptchaToken: captchaToken };
    
    if (!payload.nextOfKinEmail || payload.nextOfKinEmail.trim() === "") {
        delete payload.nextOfKinEmail;
    }
    
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
    
    onSubmit(payload, resetCaptcha, resetForm);
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
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl relative flex flex-col max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-green-700 transition z-10 p-2"
            >
              <X size={24} />
            </button>

            <div className="px-6 pt-6 pb-2 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-center text-green-800">
                Join as a Volunteer 🌿
              </h2>
              <p className="text-sm text-center text-gray-600 mt-2">
                Fill out the form below to be part of the YGAK movement.
              </p>
            </div>

            <div className="overflow-y-auto px-6 py-4 space-y-4 flex-1">
              {validationError && (
                  <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center space-x-2 md:col-span-2"
                  >
                      <AlertTriangle size={20} />
                      <p className="text-sm font-medium">{validationError}</p>
                  </motion.div>
              )}

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                  value={formData.firstName}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  name="otherNames"
                  placeholder="Other Names"
                  required
                  onChange={handleChange}
                  value={formData.otherNames}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
                <select
                  name="sex"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                  value={formData.sex}
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
                  value={formData.dateOfBirth}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />

                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number (e.g. +254...)"
                  required
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  className={`border rounded-lg px-3 py-2 ${
                      validationError.includes("phone number in international format") ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  value={formData.email}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />

                <input
                  type="text"
                  name="nextOfKinName"
                  placeholder="Next of Kin Name"
                  required
                  onChange={handleChange}
                  value={formData.nextOfKinName}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
                <input
                  type="tel"
                  name="nextOfKinPhoneNumber"
                  placeholder="Next of Kin Phone (e.g. +254...)"
                  required
                  onChange={handleChange}
                  value={formData.nextOfKinPhoneNumber}
                  className={`border rounded-lg px-3 py-2 ${
                      validationError.includes("Next of Kin phone number in international format") ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <input
                  type="email"
                  name="nextOfKinEmail"
                  placeholder="Next of Kin Email (Optional)"
                  onChange={handleChange}
                  value={formData.nextOfKinEmail}
                  className="border border-gray-300 rounded-lg px-3 py-2 md:col-span-2"
                />

                <label className="flex items-center space-x-2 md:col-span-2">
                  <input
                    type="checkbox"
                    name="isStudent"
                    checked={formData.isStudent}
                    onChange={handleChange}
                  />
                  <span className="text-gray-700 font-medium">I am a student</span>
                </label>

                {formData.isStudent ? (
                  <>
                    <select
                      name="institutionId"
                      required={formData.isStudent}
                      onChange={handleChange}
                      value={formData.institutionId}
                      className="border border-gray-300 rounded-lg px-3 py-2 md:col-span-2 relative appearance-none"
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
                        <div className="md:col-span-2 flex items-center justify-start text-sm text-green-700">
                            <Loader2 size={16} className="animate-spin mr-2" />
                            Fetching institution list...
                        </div>
                    )}

                    <input
                      type="text"
                      name="schoolRegNumber"
                      placeholder="School Registration Number"
                      required={formData.isStudent}
                      onChange={handleChange}
                      value={formData.schoolRegNumber}
                      className="border border-gray-300 rounded-lg px-3 py-2 md:col-span-2"
                    />
                  </>
                ) : (
                  <input
                    type="text"
                    name="identificationNumber"
                    placeholder="Identification Number (ID/Passport)"
                    required={!formData.isStudent}
                    onChange={handleChange}
                    value={formData.identificationNumber}
                    className="border border-gray-300 rounded-lg px-3 py-2 md:col-span-2"
                  />
                )}

                <input
                  type="text"
                  name="countyOfResidence"
                  placeholder="County of Residence"
                  required
                  onChange={handleChange}
                  value={formData.countyOfResidence}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  name="subCountyOfResidence"
                  placeholder="Sub-County of Residence"
                  required
                  onChange={handleChange}
                  value={formData.subCountyOfResidence}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  name="nationality"
                  placeholder="Nationality"
                  required
                  onChange={handleChange}
                  value={formData.nationality}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
              </form>
            </div>

            <div className="border-t border-gray-200 bg-white p-4 rounded-b-2xl">
              <div className="mb-4">
                <ReCaptchaComponent onVerify={handleCaptchaVerify} onError={handleCaptchaError} />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting || !captchaSolved || captchaError}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition disabled:bg-gray-400 disabled:cursor-wait flex items-center justify-center space-x-2 shadow-lg"
              >
                {isSubmitting ? (
                    <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>Submitting...</span>
                    </>
                ) : (
                    "Submit Volunteer Form"
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VolunteerFormModal;