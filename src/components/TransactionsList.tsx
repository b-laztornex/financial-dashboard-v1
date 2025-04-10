/**
 * This component renders a list of recent transactions
 */

import React from "react";
import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

export interface Transaction {
  id: number;
  description: string;
  date: string;
  amount: number;
  type: string;
}

interface TransactionsListProps {
  transactions: Transaction[];
}

const TransactionsList: React.FC<TransactionsListProps> = ({
  transactions,
}) => {
  return (
    <div className="overflow-y-auto max-h-64">
      <h2 className="text-xl font-bold mb-2">Recent Transactions</h2>

      {transactions.map((tx) => {
        const isCredit = tx.type === "credit";
        const IconComponent = isCredit
          ? ArrowUpCircleIcon
          : ArrowDownCircleIcon;
        const iconBgColor = isCredit ? "bg-green-100" : "bg-red-100";
        const iconColor = isCredit ? "text-green-600" : "text-red-600";
        const amountColor = isCredit ? "text-green-500" : "text-red-500";

        return (
          <div
            key={tx.id}
            className="w-full flex items-center justify-between p-2 border-b last:border-b-0"
          >
            <div className="flex items-center space-x-2 min-w-0">
              <div className={`p-2 rounded-full ${iconBgColor}`}>
                <IconComponent className={`w-5 h-5 ${iconColor}`} />
              </div>
              <div className="min-w-0">
                <div className="font-semibold truncate">{tx.description}</div>
                <div className="text-xs text-gray-500 flex items-center space-x-1 truncate">
                  <CalendarDaysIcon className="w-4 h-4 text-gray-400" />
                  <span>{tx.date}</span>
                </div>
              </div>
            </div>
            <div className={`font-bold ${amountColor}`}>
              {isCredit ? "+" : "-"}${tx.amount}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionsList;
