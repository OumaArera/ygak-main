import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const detectCountryAndCode = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    if (data && data.country_code && data.country_calling_code) {
      return {
        detectedCountry: data.country_code.toLowerCase(), 
        countryCode: data.country_calling_code,          
      };
    } else {
      throw new Error("Invalid geolocation data");
    }
  } catch (error) {
    console.error("Country detection failed:", error);
    return {
      detectedCountry: "us",
      countryCode: "+1",
    };
  }
};

const EventRegistrationForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [countryInfo, setCountryInfo] = useState({
    detectedCountry: "",
    countryCode: "",
  });

  const [isDetecting, setIsDetecting] = useState(true);

  useEffect(() => {
    (async () => {
      setIsDetecting(true);
      const info = await detectCountryAndCode();
      setCountryInfo(info);
      setIsDetecting(false);
    })();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phoneNumber: `+${value}`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phoneNumber } = formData;

    const payload = {
      fullName,
      email,
      phoneNumber,
    };

    onSubmit(payload);
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
    })
  };

  const { detectedCountry } = countryInfo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-green-50 p-6 rounded-lg shadow-inner"
    >
      <h2 className="text-xl font-semibold text-[#1B5E20] mb-4">
        Register for this Event
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-3 py-2"
          disabled={isSubmitting}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-3 py-2"
          disabled={isSubmitting}
        />

        {/* International Phone Number Input */}
        <div className="md:col-span-2">
          <label className="text-xs font-medium text-gray-500 block mb-1">
            Phone Number{" "}
            {isDetecting
              ? "(Detecting location...)"
              : detectedCountry
              ? `(Detected: ${detectedCountry.toUpperCase()})`
              : "(Could not detect country)"}
          </label>

          <PhoneInput
            country={detectedCountry || undefined}
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            inputProps={{
              name: "phoneNumber",
              required: true,
              disabled: isSubmitting || isDetecting,
            }}
            inputStyle={{
              width: "100%",
              height: "42px",
              borderRadius: "8px",
              borderColor: "#d1d5db",
            }}
            dropdownStyle={{
              borderRadius: "8px",
            }}
            containerClass="w-full"
            enableSearch
            priority={
              detectedCountry
                ? {
                    [detectedCountry]: 1, 
                  }
                : {}
            }
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition md:col-span-2 flex items-center justify-center space-x-2"
          disabled={isSubmitting || isDetecting}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              <span>Registering...</span>
            </>
          ) : isDetecting ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              <span>Detecting Country...</span>
            </>
          ) : (
            <span>Register</span>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default EventRegistrationForm;
