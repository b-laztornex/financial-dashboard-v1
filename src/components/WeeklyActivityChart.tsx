/**
 * This component renders a bar chart using Chart.js (via react-chartjs-2)
 * to display daily deposit and withdrawal activity for the week.
 */

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export interface WeeklyActivityData {
  day: string;
  deposit: number;
  withdrawal: number;
}

interface WeeklyActivityChartProps {
  data: WeeklyActivityData[];
}

const WeeklyActivityChart: React.FC<WeeklyActivityChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.day),
    datasets: [
      {
        label: "Deposit",
        data: data.map((d) => d.deposit),
        backgroundColor: "#3B82F6", // blue-500
        borderRadius: 6,
        barThickness: 24,
      },
      {
        label: "Withdraw",
        data: data.map((d) => d.withdrawal),
        backgroundColor: "#000000", // black
        borderRadius: 6,
        barThickness: 24,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#374151", // gray-700
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        backgroundColor: "#111827", // gray-900
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        cornerRadius: 6,
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6B7280", // gray-500
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#E5E7EB", // gray-200
        },
        ticks: {
          color: "#6B7280", // gray-500
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="bg-[#F9FAFB] p-6 rounded-xl shadow-md">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Weekly Activity</h2>
      </div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default WeeklyActivityChart;
