import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";
import MpesaDetails from "./MpesaDetails";


const PaymentForm = ({ selectedAmount, paymentMethod, donorDetails, setDonorDetails, onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [mpesaMethod, setMpesaMethod] = useState('stk'); 

  // Mock Card Details State (since we don't process real cards)
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvc: '' });

  // 1. Base Donor details validity (Name, Email, Amount > 0)
  const isBaseValid = donorDetails.name && donorDetails.email && selectedAmount > 0;
  
  // 2. Card validity
  const isCardValid = paymentMethod === 'Card' && isBaseValid && 
                      cardDetails.number.length >= 16 && cardDetails.expiry.length >= 4 && cardDetails.cvc.length >= 3;

  // 3. Mpesa validity
  let isMpesaSpecificValid = false;
  if (paymentMethod === 'Mpesa') {
    if (mpesaMethod === 'stk') {
      isMpesaSpecificValid = donorDetails.phone && donorDetails.phone.length >= 9;
    } else {
      isMpesaSpecificValid = true; 
    }
  }
  const isMpesaValid = paymentMethod === 'Mpesa' && isBaseValid && isMpesaSpecificValid;
  
  const isSubmitEnabled = isCardValid || isMpesaValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading || !isSubmitEnabled) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onSubmit(); // Call the parent handler
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-md font-semibold text-gray-700 pt-2 flex items-center">
        <ArrowRight size={18} className="mr-2 text-green-600" /> Donor Details
      </h3>
      
      {/* Name Input */}
      <input
        type="text"
        placeholder="Full Name"
        value={donorDetails.name}
        onChange={(e) => setDonorDetails({ ...donorDetails, name: e.target.value })}
        className="w-full p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
        required
      />

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email Address"
        value={donorDetails.email}
        onChange={(e) => setDonorDetails({ ...donorDetails, email: e.target.value })}
        className="w-full p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
        required
      />
      
      {/* Card Details Inputs (Mocked for UI completeness) */}
      <AnimatePresence>
        {paymentMethod === 'Card' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 bg-blue-50 p-4 rounded-lg overflow-hidden"
          >
            <input
              type="text"
              placeholder="Card Number (mock: 16 digits)"
              value={cardDetails.number}
              onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              maxLength="16"
              required
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="MM/YY (mock: 01/25)"
                value={cardDetails.expiry}
                onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                className="w-1/2 p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                maxLength="5"
                required
              />
              <input
                type="text"
                placeholder="CVC (mock: 123)"
                value={cardDetails.cvc}
                onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
                className="w-1/2 p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                maxLength="4"
                required
              />
            </div>
            <p className="text-xs text-blue-600 mt-2">
                This transaction is simulated. In a real application, you would be redirected to a secure payment gateway after entering these details.
            </p>
          </motion.div>
        )}
      </AnimatePresence>


      {/* M-Pesa Method Selection (New Component) */}
      <AnimatePresence>
        {paymentMethod === 'Mpesa' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <MpesaDetails
              donorDetails={donorDetails}
              setDonorDetails={setDonorDetails}
              mpesaMethod={mpesaMethod}
              setMpesaMethod={setMpesaMethod}
              selectedAmount={selectedAmount}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Payment Action Button */}
      <button
        type="submit"
        disabled={isLoading || !isSubmitEnabled}
        className={`w-full py-3 rounded-full font-bold text-white flex items-center justify-center transition duration-300 shadow-lg mt-6
          ${isSubmitEnabled && !isLoading
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-gray-400 cursor-not-allowed'
          }`}
      >
        {isLoading ? (
          <>
            <Loader2 size={20} className="animate-spin mr-2" />
            Initiating Payment...
          </>
        ) : (
          `Donate KES ${selectedAmount.toLocaleString()} via ${paymentMethod}`
        )}
      </button>

      {/* Payment Note */}
      <p className="text-xs text-gray-500 text-center pt-2">
        {paymentMethod === 'Card'
          ? "By clicking 'Donate', you agree to be securely redirected to our payment partner to finalize the card transaction."
          : mpesaMethod === 'stk'
            ? "By clicking 'Donate', an STK Push request will be sent to your phone for payment confirmation."
            : "By clicking 'Donate', we record your intent to donate. Please complete the transaction on your M-Pesa menu using the provided details."}
      </p>
    </form>
  );
};

export default PaymentForm;