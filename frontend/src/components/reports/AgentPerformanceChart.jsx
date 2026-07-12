 import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AgentPerformanceChart = ({
  data = [],
}) => {
  const chartData = {
    labels: data.map(
      (agent) => agent.name
    ),

    datasets: [
      {
        label: "Closed Leads",

        data: data.map(
          (agent) => agent.totalClosed
        ),

        backgroundColor: "#0d6efd",

        borderRadius: 8,

        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,

    indexAxis: "y",

    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: false,
      },
    },

    scales: {
      x: {
        beginAtZero: true,

        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="card shadow-sm">

      <div className="card-header">

        <h5 className="mb-0">
          Closed Leads by Agent
        </h5>

      </div>

      <div className="card-body">

        <Bar
          data={chartData}
          options={options}
        />

      </div>

    </div>
  );
};

export default AgentPerformanceChart;