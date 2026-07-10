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

const PipelineChart = ({ data = [] }) => {
  const chartData = {
    labels: data.map((item) => item.status),

    datasets: [
      {
        label: "Pipeline Leads",

        data: data.map((item) => item.count),
      },
    ],
  };

  return (
    <div className="card shadow-sm">

      <div className="card-header">

        <h5 className="mb-0">
          Pipeline by Status
        </h5>

      </div>

      <div className="card-body">

        <Bar data={chartData} />

      </div>

    </div>
  );
};

export default PipelineChart;