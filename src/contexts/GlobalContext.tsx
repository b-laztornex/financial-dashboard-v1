/**
 * This file sets up the global context for the application.
 * It provides global state (including user, cards, transactions, and chart data) from mock JSON data.
 */

import React, { createContext, useState, ReactNode } from "react";
import mockData from "../data/dummyData";

interface GlobalContextProps {
  user: typeof mockData.user;
  cards: typeof mockData.cards;
  transactions: typeof mockData.transactions;
  weeklyActivity: typeof mockData.weeklyActivity;
  expenses: typeof mockData.expenses;
  balanceHistory: typeof mockData.balanceHistory;
  contacts: typeof mockData.contacts;
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(
  undefined
);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state] = useState({
    user: mockData.user,
    cards: mockData.cards,
    transactions: mockData.transactions,
    weeklyActivity: mockData.weeklyActivity,
    expenses: mockData.expenses,
    balanceHistory: mockData.balanceHistory,
    contacts: mockData.contacts,
  });

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};
