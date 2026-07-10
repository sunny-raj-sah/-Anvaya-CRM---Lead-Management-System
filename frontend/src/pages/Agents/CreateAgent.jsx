import { useNavigate } from "react-router-dom";

import useAgent from "../../hooks/useAgent";

import PageHeader from "../../components/common/PageHeader";
import AgentForm from "../../components/agent/AgentForm";

const CreateAgent = () => {
  const navigate = useNavigate();

  const {
    state,
    addAgent,
  } = useAgent();

  const handleSubmit = async (formData) => {
    await addAgent(formData);

    navigate("/agents");
  };

  return (
    <div className="container py-4">

      <PageHeader
        title="Create Sales Agent"
        subtitle="Add a new sales representative"
      />

      <AgentForm
        onSubmit={handleSubmit}
        loading={state.loading}
        submitButtonText="Create Agent"
      />

    </div>
  );
};

export default CreateAgent;