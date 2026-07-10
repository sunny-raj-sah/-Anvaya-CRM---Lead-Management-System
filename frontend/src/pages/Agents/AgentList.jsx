 import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAgent from "../../hooks/useAgent";

import PageHeader from "../../components/common/PageHeader";
import AgentTable from "../../components/agent/AgentTable";

const AgentList = () => {
  const navigate = useNavigate();

  const {
    state,
    getAllAgents,
  } = useAgent();

  useEffect(() => {
    getAllAgents();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container py-4">

      <PageHeader
        title="Sales Agents"
        subtitle="Manage your sales team"
        buttonText="Add Agent"
        onClick={() =>
          navigate("/agents/new")
        }
      />

      {state.loading ? (
        <div className="text-center">

          <div className="spinner-border text-primary"></div>

        </div>
      ) : (
        <AgentTable
          agents={state.agents}
        />
      )}

    </div>
  );
};

export default AgentList;