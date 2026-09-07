 import { useEffect } from "react";
import   "../../App.css"
import useReport from "../../hooks/useReport";

import PageHeader from "../../components/common/PageHeader";

import PipelineChart from "../../components/reports/PipelineChart";
import ClosedLastWeekChart from "../../components/reports/ClosedLastWeekChart";
import AgentPerformanceChart from "../../components/reports/AgentPerformanceChart";

const Reports = () => {
  const {
    state,
    fetchPipeline,
    fetchLastWeek,
    fetchClosedByAgent,
  } = useReport();

  useEffect(() => {
    fetchPipeline();
    fetchLastWeek();
    fetchClosedByAgent();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state.loading) {
    return (
      <div className="text-center mt-5">

        <div className="spinner-border text-primary"></div>

      </div>
    );
  }

  return (
    <div className="container-fluid py-4">

  <PageHeader
    title="Reports Dashboard"
    subtitle="CRM Analytics"
  />

  <div className="row g-3 g-md-4">

    {/* Pipeline */}
    <div className="col-12 col-md-6 col-xl-4 d-flex">
      <PipelineChart
        data={state.pipeline}
      />
    </div>

    {/* Closed Last Week */}
    <div className="col-12 col-md-6 col-xl-4 d-flex">
      <ClosedLastWeekChart
        data={state.lastWeek}
      />
    </div>

    {/* Agent Performance */}
    <div className="col-12 col-md-6 col-xl-4 d-flex">
      <AgentPerformanceChart
        data={state.closedByAgent}
      />
    </div>

  </div>

</div>
  );
};

export default Reports;