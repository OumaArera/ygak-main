import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { createData } from "../../services/apiService";
import ReCaptchaComponent from "./ReCaptchaComponent";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    preferredContact: "Email",
    heardFrom: "",
    bestTime: "",
    attachment: null,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const [captchaSolved, setCaptchaSolved] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setError(null);
    setSubmitted(false);
  };

  const handleCaptchaVerify = (solved, token) => {
    setCaptchaSolved(solved);
    setCaptchaToken(token);
    setCaptchaError(false); 
    if (!solved) {
        setError("reCAPTCHA check failed or expired. Please try again.");
    } else {
        setError(null);
    }
  };
  
  const handleCaptchaError = (hasError) => {
      setCaptchaError(hasError);
      setCaptchaSolved(false);
      setError("Failed to load reCAPTCHA. Please check your internet connection.");
  }

  const resetForm = () => {
    setFormData({
        firstName: "", lastName: "", email: "", phone: "", company: "",
        subject: "", message: "", preferredContact: "Email",
        heardFrom: "", bestTime: "", attachment: null,
    });
    setCaptchaSolved(false);
    setCaptchaToken(null);
    setCaptchaError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!captchaSolved || captchaError || !captchaToken) {
        setError("Please complete the security challenge before submitting.");
        return;
    }

    setLoading(true);
    setSubmitted(false);

    const payload = new FormData();
    for (const key in formData) {
        if (formData[key] !== null) {
            payload.append(key, formData[key]);
        }
    }
    payload.append("recaptchaToken", captchaToken);

    try {
        const response = await createData("contact-us", payload);

        if (response.success) {
            setSubmitted(true);
            resetForm();
        } else {
            if (response.message.includes("reCAPTCHA")) {
                 setError("Security check failed. Please try the CAPTCHA again.");
            } else {
                 setError(response.message || "Message submission failed. Please try again.");
            }
        }
    } catch (err) {
        setError("An unexpected error occurred. Please check your connection.");
    } finally {
        setLoading(false);
    }
  };

  const inputClass = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1B5E20] focus:ring focus:ring-[#1B5E20]/50 sm:text-base py-3 px-4";
  const fileClass = "mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-[#1B5E20] file:text-white hover:file:bg-[#145A24]";
  const labelClass = "block text-sm font-medium text-gray-700";
  const requiredStar = <span className="text-red-500">*</span>;

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100 space-y-6"
    >
        {submitted && (
            <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg font-semibold">
                Thank you! Your message has been sent successfully.
            </div>
        )}

        {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg font-semibold">
                Error: {error}
            </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label className={labelClass}>First Name {requiredStar}</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className={inputClass}
                />
            </div>
            <div>
                <label className={labelClass}>Last Name {requiredStar}</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className={inputClass}
                />
            </div>
        </div>

        <div>
            <label className={labelClass}>Email Address {requiredStar}</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                required
                className={inputClass}
            />
        </div>

        <div>
            <label className={labelClass}>Phone Number (optional)</label>
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+254 7XX XXX XXX"
                className={inputClass}
            />
        </div>

        <div>
            <label className={labelClass}>Company Name (optional)</label>
            <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Youths for Green Action Kenya"
                className={inputClass}
            />
        </div>

        <div>
            <label className={labelClass}>Subject {requiredStar}</label>
            <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={inputClass}
            >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Partnership">Partnership</option>
                <option value="Media">Media</option>
            </select>
        </div>

        <div>
            <label className={labelClass}>Message {requiredStar}</label>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Type your detailed message here..."
                className={inputClass}
            />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label className={labelClass}>Preferred Contact Method</label>
                <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className={inputClass}
                >
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                </select>
            </div>

            <div>
                <label className={labelClass}>How did you hear about us?</label>
                <input
                    type="text"
                    name="heardFrom"
                    value={formData.heardFrom}
                    onChange={handleChange}
                    placeholder="Social Media, Friend, Search Engine..."
                    className={inputClass}
                />
            </div>

            <div>
                <label className={labelClass}>Best time to contact (for phone)</label>
                <input
                    type="text"
                    name="bestTime"
                    value={formData.bestTime}
                    onChange={handleChange}
                    placeholder="e.g., Weekdays 9 AM - 1 PM EAT"
                    className={inputClass}
                />
            </div>

            <div>
                <label className={labelClass}>Attachment (optional)</label>
                <input
                    type="file"
                    name="attachment"
                    onChange={handleChange}
                    className={fileClass}
                />
            </div>
        </div>

        {/* ReCAPTCHA Component */}
        <ReCaptchaComponent onVerify={handleCaptchaVerify} onError={handleCaptchaError} />

        <button
            type="submit"
            disabled={loading || !captchaSolved || captchaError}
            className="w-full mt-4 bg-[#1B5E20] text-white font-semibold py-3 rounded-full hover:bg-[#145A24] transition flex justify-center items-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
            {loading && <Loader2 size={18} className="animate-spin" />}
            <span>Send Message</span>
        </button>
    </motion.form>
  );
};

export default ContactForm;