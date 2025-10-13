import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Smartphone, CreditCard, Loader2, ArrowRight } from "lucide-react";
import AmountSelector from "../donations/AmountSelector";
import PaymentForm from "../donations/PaymentForm";


const DonateModal = ({ isOpen, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState(500); 
  const [paymentMethod, setPaymentMethod] = useState('Card'); 
  const [donorDetails, setDonorDetails] = useState({ name: '', email: '', phone: '' });

  const handleSuccessfulDonation = useCallback(() => {
    const message = `Success! Thank you, ${donorDetails.name}, for your generous KES ${selectedAmount.toLocaleString()} donation via ${paymentMethod}. We are restoring Kenya's ecosystems because of people like you!`;
    
    // Create and show success message box (existing logic)
    const messageBox = document.createElement('div');
    messageBox.className = 'fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4';
    messageBox.innerHTML = `
      <div class="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center">
        <h3 class="text-2xl font-bold text-green-700 mb-4">Donation Received! 🎉</h3>
        <p class="text-gray-700 mb-6">${message}</p>
        <button id="close-message" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition">Close</button>
      </div>
    `;
    document.body.appendChild(messageBox);
    
    document.getElementById('close-message').onclick = () => {
      document.body.removeChild(messageBox);
      onClose();
    };

    onClose(); // Close the modal immediately
  }, [selectedAmount, paymentMethod, donorDetails, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            // 🛠️ ADDED SCROLLING CLASSES HERE 🛠️
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-green-700 transition p-2"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <h2 className="text-3xl font-bold text-green-800 text-center mb-1">
              Invest in a Greener Future
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Your contribution is 100% committed to youth-led climate action.
            </p>

            {/* Step 1: Amount Selection */}
            <AmountSelector
              selectedAmount={selectedAmount}
              setSelectedAmount={setSelectedAmount}
            />

            {/* Step 2: Payment Method Selection */}
            <h3 className="text-md font-semibold text-gray-700 mb-3 flex items-center pt-4">
              <Smartphone size={18} className="mr-2 text-green-600" /> Select Payment Method
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* Card Option */}
              <button
                onClick={() => setPaymentMethod('Card')}
                className={`flex items-center justify-center p-4 rounded-xl border-2 transition duration-200
                  ${paymentMethod === 'Card'
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-blue-300'
                  }`}
              >
                <CreditCard size={24} className="mr-2 text-blue-600" />
                <span className="font-semibold text-gray-800">Card (Global)</span>
              </button>
              
              {/* M-Pesa Option */}
              <button
                onClick={() => setPaymentMethod('Mpesa')}
                className={`flex items-center justify-center p-4 rounded-xl border-2 transition duration-200
                  ${paymentMethod === 'Mpesa'
                    ? 'border-green-500 bg-green-50 shadow-md'
                    : 'border-gray-200 hover:border-green-300'
                  }`}
              >
                <img 
                    src="https://placehold.co/24x24/ffffff/4CCF2A?text=M-P"
                    alt="M-Pesa Icon"
                    className="mr-2"
                    style={{backgroundColor: '#4CCF2A', borderRadius: '4px'}}
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/24x24/4CCF2A/ffffff?text=M-P" }}
                />
                <span className="font-semibold text-gray-800">M-Pesa (Kenya)</span>
              </button>
            </div>

            {/* Step 3: Payment Form (Conditionally Rendered) */}
            {paymentMethod && (
              <PaymentForm
                selectedAmount={selectedAmount}
                paymentMethod={paymentMethod}
                donorDetails={donorDetails}
                setDonorDetails={setDonorDetails}
                onSubmit={handleSuccessfulDonation}
              />
            )}
            
            {/* Footer */}
            <p className="text-xs text-gray-500 text-center mt-6">
              All transactions are secured and processed by our trusted payment partners.
            </p>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DonateModal;