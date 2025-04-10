/**
 * This component renders a pie chart to visualize the breakdown of expenses
 * by category using Chart.js.
 */

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export interface ExpenseData {
  category: string;
  value: number;
}

interface ExpensePieChartProps {
  data: ExpenseData[];
}

const ExpensePieChart: React.FC<ExpensePieChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.category),
    datasets: [
      {
        data: data.map((d) => d.value),
        backgroundColor: ["#1E2A78", "#3B82F6", "#F97316", "#111111"],
        borderColor: "#ffffff",
        borderWidth: 4,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#111827",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        cornerRadius: 6,
        padding: 10,
      },
    },
  };

  return (
    <div className="bg-[#F9FAFB] p-6 rounded-xl shadow-md h-full flex flex-col justify-between">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Expense Statistics
      </h2>
      <Pie data={chartData} options={chartOptions} className="flex-1" />
    </div>
  );
};

export default ExpensePieChart;
