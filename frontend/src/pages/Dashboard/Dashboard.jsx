 import { useEffect } from "react";

import PageHeader from "../../components/common/PageHeader";
import StatCard from "../../components/common/StatCard";

import StatusCards from "../../components/dashboard/StatusCards";
import QuickFilters from "../../components/dashboard/QuickFilters";
import RecentLeads from "../../components/dashboard/RecentLeads";

import useLead from "../../hooks/useLead";
import useAgent from "../../hooks/useAgent";

const Dashboard = () => {
  const {
    state,
    getAllLeads,
  } = useLead();

  const {
    state: agentState,
    getAllAgents,
  } = useAgent();

  useEffect(() => {
    getAllLeads();
    getAllAgents();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalLeads = state.leads.length;

  // const newLeads = state.leads.filter(
  //   (lead) => lead.status === "New"
  // ).length;

  const closedLeads = state.leads.filter(
    (lead) => lead.status === "Closed"
  ).length;

  const pipelineLeads = state.leads.filter(
    (lead) => lead.status !== "Closed"
  ).length;

  return (
    <div className="container py-4">

      <PageHeader
        title="Dashboard"
        subtitle="Welcome to Anvaya CRM"
      />

      {/* Statistics */}

      <div className="row mb-4">

        <StatCard
          title="Total Leads"
          value={totalLeads}
        />

        <StatCard
          title="Pipeline Leads"
          value={pipelineLeads}
        />

        <StatCard
          title="Closed Leads"
          value={closedLeads}
        />

        <StatCard
          title="Sales Agents"
          value={agentState.agents.length}
        />

      </div>

      {/* Lead Status Overview */}

      <div className="mb-4">

        <StatusCards
          leads={state.leads}
        />

      </div>

      {/* Quick Filters */}

      <div className="mb-4">

        <QuickFilters />

      </div>

      {/* Recent Leads */}

      <RecentLeads
        leads={state.leads.slice(0, 5)}
      />

    </div>
  );
};

export default Dashboard;