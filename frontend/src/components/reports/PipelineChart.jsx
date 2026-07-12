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

const PipelineChart = ({
  data = [],
}) => {
  const chartData = {
    labels: data.map(
      (item) => item.status
    ),

    datasets: [
      {
        data: data.map(
          (item) => item.count
        ),

        backgroundColor: [
          "#0d6efd",
          "#198754",
          "#ffc107",
          "#dc3545",
          "#6f42c1",
        ],
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

        <Doughnut
          data={chartData}
        />

      </div>

    </div>
  );
};

export default PipelineChart;