 import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const PipelineChart = ({ data = [] }) => {
  const chartData = {
    labels: data.map((item) => item.status),

    datasets: [
      {
        data: data.map((item) => item.count),

        backgroundColor: [
          "#0d6efd",
          "#198754",
          "#ffc107",
          "#dc3545",
          "#6f42c1",
        ],

        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-header">
        <h5 className="mb-0">Pipeline by Status</h5>
      </div>

      <div className="card-body">
        <div className="chart-container">
          <Doughnut data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PipelineChart;