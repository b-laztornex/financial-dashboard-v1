import React, { useState } from "react";
import MasterCard from "./MasterCard";

export interface CardProps {
  cards: {
    balance: string;
    cardholder: string;
    validThru: string;
    cardNumber: string;
  }[];
}

const Card: React.FC<CardProps> = ({ cards }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">My Cards</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-blue-500 hover:underline"
        >
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.slice(0, 2).map((card, idx) => (
          <div key={idx} className="w-full">
            <MasterCard cardData={card} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">All Cards</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              {cards.map((card, idx) => (
                <div key={idx} className="w-full">
                  <MasterCard cardData={card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Card;
