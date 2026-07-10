 import { useEffect } from "react";

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
    <div className="container py-4">

      <PageHeader
        title="Reports Dashboard"
        subtitle="CRM Analytics"
      />

      <div className="row">

        <div className="col-lg-6 mb-4">
          <PipelineChart
            data={state.pipeline}
          />
        </div>

        <div className="col-lg-6 mb-4">
          <ClosedLastWeekChart
            data={state.lastWeek}
          />
        </div>

        <div className="col-lg-12">
          <AgentPerformanceChart
            data={state.closedByAgent}
          />
        </div>

      </div>

    </div>
  );
};

export default Reports;