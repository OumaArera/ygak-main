import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, ArrowLeft, Loader2 } from "lucide-react"; 
import EventRegistrationForm from "../components/events/EventRegistrationForm";
import Notification from "../components/common/Notification"; 
import { getData, createData } from "../services/apiService";


const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [isSubmitting, setIsSubmitting] = useState(false);
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


  const handleRegistrationSubmit = async (formData) => {
    setIsSubmitting(true);
    const endpoint = "events/register";
    const payload = {
      eventId: id,
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    };
    
    try {
      const response = await createData(endpoint, payload);
      
      if (response.success) {
        showNotification(response.message || "Successfully registered for the event!", "success");
      } else {
        const errorMessage = response.message || "Registration failed. Please try again.";
        showNotification(errorMessage, "error");
      }
    } catch (error) {
      console.error("Registration error:", error);
      showNotification("An unexpected error occurred during registration.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };


  const getEvent = async () => {
    try {
      setLoading(true);
      const endpoint = `upcoming-events/${id}`
      const response = await getData(endpoint);
      setEvent(response?.data || null);
    } catch (error) {
      console.error("Error fetching event:", error);
      setEvent(null); 
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getEvent();
  }, [id]); 

  if (loading) {
    return (
      <div className="pt-28 text-center min-h-screen flex flex-col justify-center items-center">
        <Loader2 size={36} className="animate-spin text-green-700 mb-4" />
        <h2 className="text-xl text-gray-700 font-medium">Loading Event Details...</h2>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="pt-28 text-center text-gray-700 min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Event Not Found 😔</h2>
        <Link to="/events" className="text-green-700 hover:underline">
          ← Back to Events
        </Link>
        <Notification 
          message={notification.message}
          type={notification.type}
          isVisible={notification.isVisible}
          onClose={closeNotification}
        />
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <Link
          to="/events"
          className="flex items-center text-green-700 hover:text-green-800 transition font-medium"
        >
          <ArrowLeft size={18} className="mr-1" /> Back to Events
        </Link>
      </div>

      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {event.flyer && (
          <img
            src={event.flyer}
            alt={event.title}
            className="w-full h-auto object-cover"
          />
        )}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-[#1B5E20] mb-2">
            {event.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-4 space-x-4">
            <CalendarDays size={18} />
            <span>{event.date ? new Date(event.date).toDateString() : "Date TBD"}</span> 
            <MapPin size={18} className="ml-4" />
            <span>
              {event.subCounty}, {event.county}
            </span>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {event.description}
          </p>

          {(event.latitude && event.longitude) && (
            <motion.iframe
              key={event.id}
              src={`https://maps.google.com/maps?q=${event.latitude},${event.longitude}&z=14&output=embed`}
              className="w-full h-80 rounded-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            ></motion.iframe>
          )}

          <EventRegistrationForm 
            onSubmit={handleRegistrationSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </section>
      
      <Notification 
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={closeNotification}
      />
    </div>
  );
};

export default EventDetails;