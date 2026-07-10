import { useNavigate } from "react-router-dom";

import PageHeader from "../../components/common/PageHeader";
import LeadForm from "../../components/lead/LeadForm";

import useLead from "../../hooks/useLead";

const CreateLead = () => {
  const navigate = useNavigate();

  const {
    state,
    addLead,
  } = useLead();

  const handleSubmit = async (formData) => {
    await addLead(formData);

    navigate("/leads");
  };

  return (
    <div className="container py-4">

      <PageHeader
        title="Create Lead"
        subtitle="Add a new Lead"
      />

      <LeadForm
        salesAgents={state.salesAgents}
        onSubmit={handleSubmit}
        loading={state.loading}
      />

    </div>
  );
};

export default CreateLead;