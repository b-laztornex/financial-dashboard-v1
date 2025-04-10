import React from "react";

interface CardData {
  balance: string;
  cardholder: string;
  validThru: string;
  cardNumber: string;
}

interface MasterCardProps {
  cardData: CardData;
}

const MasterCard: React.FC<MasterCardProps> = ({ cardData }) => {
  return (
    <div className="relative w-full max-w-[350px] min-h-[235px] rounded-[20px] bg-gradient-to-tr from-[#2f2f3a] to-[#1c1c22] p-4 md:p-5 text-white font-sans overflow-hidden shadow-md">
      <div className="text-[10px] md:text-[12px] text-[#ccc]">Balance</div>
      <div className="text-[20px] md:text-[24px] font-bold mb-5">
        {cardData.balance}
      </div>

      <div className="absolute bg-white top-5 right-5 w-[30px] h-[30px] rounded-[6px]" />

      <div className="flex justify-between mt-5 text-[10px] md:text-[12px] text-[#aaa]">
        <div>
          CARD HOLDER
          <span className="block font-semibold text-white mt-1">
            {cardData.cardholder}
          </span>
        </div>
        <div>
          VALID THRU
          <span className="block font-semibold text-white mt-1">
            {cardData.validThru}
          </span>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 text-[16px] md:text-[18px] font-bold tracking-[2px]">
        {cardData.cardNumber}
      </div>

      <div className="absolute bottom-5 right-5 flex items-end justify-end">
        <div className="flex">
          <div className="w-[30px] h-[30px] rounded-full opacity-60 bg-[#eb001b]" />
          <div className="w-[30px] h-[30px] rounded-full opacity-60 bg-[#f79e1b] -ml-[15px]" />
        </div>
      </div>
    </div>
  );
};

export default MasterCard;
