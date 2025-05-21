import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Cloud Spend (ZAR)",
        data: [500, 700, 400, 850, 900, 1000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Cloud Spend Over Time",
      },
    },
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Analytics Chart</h5>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AnalyticsChart;
