/**
 * This component displays card details including balance, cardholder name,
 * masked card number, and card validity. It supports a mobile-first design using Tailwind CSS.
 */

import React from "react";
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
  return (
    <section>
      <h2 className="text-xl font-bold mb-2">My Cards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} className="w-full">
            <MasterCard cardData={card} />
          </div>
        ))}
      </div>
      <button className="mt-4 text-blue-500 hover:underline">See All</button>
    </section>
  );
};

export default Card;
