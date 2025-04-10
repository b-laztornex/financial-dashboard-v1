/**
 * This page composes the main dashboard, displaying:
 *  - Cards
 *  - Recent transactions
 *  - Weekly activity chart
 *  - Expense pie chart
 *  - Quick transfer UI
 *  - Balance history chart
 */

import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Card from "../components/Card";
import TransactionsList from "../components/TransactionsList";
import WeeklyActivityChart from "../components/WeeklyActivityChart";
import ExpensePieChart from "../components/ExpensePieChart";
import BalanceHistoryChart from "../components/BalanceHistoryChart";
import QuickTransfer from "../components/QuickTransfer";
import SplitLayout from "../layouts/SplitLayout";

const DashboardPage: React.FC = () => {
  const globalContext = useContext(GlobalContext);

  if (!globalContext) return <div>Loading...</div>;

  const {
    cards,
    transactions,
    weeklyActivity,
    expenses,
    balanceHistory,
    user,
    contacts,
  } = globalContext;

  return (
    <div className="p-4 space-y-6">
      <SplitLayout
        left={<Card cards={cards} />}
        right={<TransactionsList transactions={transactions} />}
        switchSides={false}
      />

      <SplitLayout
        left={<WeeklyActivityChart data={weeklyActivity} />}
        right={<ExpensePieChart data={expenses} />}
        switchSides={false}
      />

      <SplitLayout
        left={<BalanceHistoryChart data={balanceHistory} />}
        right={<QuickTransfer contacts={contacts} />}
        switchSides={true}
      />
    </div>
  );
};

export default DashboardPage;
