/**
 * This component renders the UI for quick transfers.
 * It displays a list of frequent contacts and includes an input field and a send button.
 * (Note: UI-only; no actual API call is implemented.)
 */

import React, { useState } from "react";

interface Contact {
  profilePicture: string;
  name: string;
  role: string;
}

interface QuickTransferProps {
  contacts: Contact[];
}

const QuickTransfer: React.FC<QuickTransferProps> = ({ contacts }) => {
  const [amount, setAmount] = useState<string>("");

  const handleSend = () => {
    alert(`Sending $${amount}`);
    setAmount("");
  };

  return (
    <div className="bg-[#F9FAFB] p-6 rounded-xl shadow-md h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Quick Transfer
        </h3>
        <div className="flex overflow-x-auto space-x-4 mb-4">
          {contacts.map((contact, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={contact.profilePicture}
                alt={contact.name}
                className="rounded-full w-12 h-12 mb-1"
              />
              <span className="text-sm text-gray-600">{contact.role}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-auto">
        <input
          type="number"
          placeholder="Enter amount"
          className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white rounded-r-md px-4 text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;
