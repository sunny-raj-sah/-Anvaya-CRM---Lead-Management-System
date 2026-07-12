 import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const ClosedLastWeekChart = ({
  data = [],
}) => {

  const chartData = {

    labels: data.map(
      (lead) =>
        new Date(
          lead.closedAt
        ).toLocaleDateString()
    ),

    datasets: [
      {
        label: "Closed Leads",

        data: data.map(() => 1),

        borderColor: "#198754",

        backgroundColor:
          "#198754",

        tension: 0.4,
      },
    ],
  };

  return (
    <div className="card shadow-sm">

      <div className="card-header">

        <h5 className="mb-0">
          Closed Last Week
        </h5>

      </div>

      <div className="card-body">

        <Line data={chartData} />

      </div>

    </div>
  );
};

export default ClosedLastWeekChart;