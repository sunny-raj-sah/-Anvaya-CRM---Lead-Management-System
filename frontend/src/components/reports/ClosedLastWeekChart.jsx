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

const ClosedLastWeekChart = ({
  data = [],
}) => {
  const chartData = {
    labels: data.map((lead) => lead.name),

    datasets: [
      {
        label: "Closed Leads",

        data: data.map(() => 1),
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

        <Bar data={chartData} />

      </div>

    </div>
  );
};

export default ClosedLastWeekChart;