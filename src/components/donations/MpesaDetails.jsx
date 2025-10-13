import React from "react";

const MpesaDetails = ({ donorDetails, setDonorDetails, mpesaMethod, setMpesaMethod, selectedAmount }) => {
  const mpesaOptions = [
    { key: 'stk', label: 'STK Push (Phone)' },
    { key: 'till', label: 'Buy Goods (Till)' },
    { key: 'paybill', label: 'Pay Bill' }
  ];

  return (
    <div className="space-y-4">
      {/* M-Pesa Method Selection */}
      <h4 className="text-sm font-semibold text-gray-600">Select M-Pesa Flow:</h4>
      <div className="grid grid-cols-3 gap-2">
        {mpesaOptions.map(option => (
          <button
            key={option.key}
            type="button"
            onClick={() => setMpesaMethod(option.key)}
            className={`text-xs py-2 rounded-lg border transition
              ${mpesaMethod === option.key
                ? 'bg-green-600 text-white border-green-700'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50'
              }`
            }
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Conditional Input and Instructions based on Mpesa Method */}
      <div className="bg-green-50 p-4 rounded-lg">
        {mpesaMethod === 'stk' && (
          <>
            <input
              type="tel"
              placeholder="M-Pesa Phone (e.g., 0712345678)"
              value={donorDetails.phone}
              onChange={(e) => setDonorDetails({ ...donorDetails, phone: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
              required
            />
            <p className="text-xs text-gray-600 mt-2">
              An **STK Push** prompt will be sent to this number after you click 'Donate'.
            </p>
          </>
        )}

        {mpesaMethod === 'till' && (
          <>
            <p className="text-sm font-medium text-gray-700 mb-2">
              1. Go to **M-Pesa** Menu &rarr; **Lipa Na M-Pesa** &rarr; **Buy Goods and Services**
            </p>
            <p className="text-sm font-medium text-gray-700 mb-2">
              2. Enter **Till Number**: <span className="font-bold text-green-700">920101</span>
            </p>
            <p className="text-sm font-medium text-gray-700">
              3. Enter amount <span className="font-bold text-green-700">({selectedAmount.toLocaleString()} KES)</span>, PIN, and complete the transaction.
            </p>
            <p className="text-xs text-red-500 mt-3">
                Note: You must complete the payment on your phone *after* you click 'Donate' below to confirm the transaction.
            </p>
          </>
        )}

        {mpesaMethod === 'paybill' && (
          <>
            <p className="text-sm font-medium text-gray-700 mb-2">
              1. Go to **M-Pesa** Menu &rarr; **Lipa Na M-Pesa** &rarr; **Pay Bill**
            </p>
            <p className="text-sm font-medium text-gray-700 mb-2">
              2. Enter **Business No.**: <span className="font-bold text-green-700">522533</span>
            </p>
            <p className="text-sm font-medium text-gray-700 mb-2">
              3. Enter **Account No.**: <span className="font-bold text-green-700">YGA-001</span>
            </p>
            <p className="text-sm font-medium text-gray-700">
              4. Enter amount <span className="font-bold text-green-700">({selectedAmount.toLocaleString()} KES)</span>, PIN, and complete the transaction.
            </p>
            <p className="text-xs text-red-500 mt-3">
                Note: You must complete the payment on your phone *after* you click 'Donate' below to confirm the transaction.
            </p>
          </>
        )}
      </div>
    </div>
  );
}


export default MpesaDetails;