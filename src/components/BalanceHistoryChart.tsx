/**
 * This component renders a line chart to illustrate the balance trend
 * over the past few months using Chart.js.
 */

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

export interface BalanceHistoryData {
  month: string;
  balance: number;
}

interface BalanceHistoryChartProps {
  data: BalanceHistoryData[];
}

const BalanceHistoryChart: React.FC<BalanceHistoryChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.month),
    datasets: [
      {
        label: "Balance",
        data: data.map((d) => d.balance),
        borderColor: "#2563EB",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 250);
          gradient.addColorStop(0, "rgba(37, 99, 235, 0.2)");
          gradient.addColorStop(1, "rgba(37, 99, 235, 0)");
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
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
    scales: {
      x: {
        grid: {
          color: "#E5E7EB",
        },
        ticks: {
          color: "#6B7280",
        },
      },
      y: {
        grid: {
          color: "#E5E7EB",
        },
        ticks: {
          color: "#6B7280",
        },
      },
    },
  };

  return (
    <div className="bg-[#F9FAFB] p-6 rounded-xl shadow-md w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 underline underline-offset-4 decoration-blue-500">
        Balance History
      </h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default BalanceHistoryChart;
