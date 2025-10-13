import React, { useState } from "react";
import { motion } from "framer-motion";

const EventRegistrationForm = ({ eventTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event registration:", formData);
    alert(`You have registered for ${eventTitle}`);
  };

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
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-3 py-2 md:col-span-2"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition md:col-span-2"
        >
          Register
        </button>
      </form>
    </motion.div>
  );
};

export default EventRegistrationForm;
