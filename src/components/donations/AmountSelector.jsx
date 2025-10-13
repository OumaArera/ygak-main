import React, { useState } from "react";
import { DollarSign} from "lucide-react";

const AmountSelector = ({ selectedAmount, setSelectedAmount }) => {
  const predefinedAmounts = [500, 1000, 2500, 5000];
  const [customAmount, setCustomAmount] = useState("");

  const handleCustomChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(parseInt(value) || 0);
  };

  const handleButtonClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const isCustomActive = customAmount !== "" && selectedAmount === parseInt(customAmount);

  return (
    <div className="mb-6">
      <h3 className="text-md font-semibold text-gray-700 mb-3 flex items-center">
        <DollarSign size={18} className="mr-2 text-green-600" /> Choose Amount (KES)
      </h3>
      
      {/* Predefined Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        {predefinedAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => handleButtonClick(amount)}
            className={`py-3 rounded-xl transition duration-200 font-medium text-sm
              ${selectedAmount === amount && !isCustomActive
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-green-50'
              }`
            }
          >
            {amount.toLocaleString()}
          </button>
        ))}
      </div>

      {/* Custom Input */}
      <input
        type="number"
        placeholder="Enter Custom Amount"
        value={customAmount}
        onChange={handleCustomChange}
        className={`w-full p-3 border-2 rounded-xl text-center text-lg font-bold transition duration-200
          ${isCustomActive ? 'border-green-500 ring-4 ring-green-100' : 'border-gray-200 focus:border-green-500'}`
        }
        min="100"
      />
    </div>
  );
};

export default AmountSelector;