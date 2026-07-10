import { useEffect } from "react";

import useLead from "../../hooks/useLead";

import PageHeader from "../../components/common/PageHeader";

const SalesAgentView = () => {
  const {
    state,
    getAllLeads,
  } = useLead();

  useEffect(() => {
    getAllLeads();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const groupedLeads = state.leads.reduce((acc, lead) => {
    const agentName =
      lead.salesAgent?.name || "Unassigned";

    if (!acc[agentName]) {
      acc[agentName] = [];
    }

    acc[agentName].push(lead);

    return acc;
  }, {});

  if (state.loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  return (
    <div className="container py-4">

      <PageHeader
        title="Sales Agent View"
        subtitle="Leads grouped by assigned sales agent"
      />

      <div className="row">

        {Object.entries(groupedLeads).map(
          ([agentName, leads]) => (
            <div
              key={agentName}
              className="col-lg-6 mb-4"
            >
              <div className="card shadow-sm">

                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">
                    {agentName}
                  </h5>
                </div>

                <div className="card-body">

                  {leads.map((lead) => (
                    <div
                      key={lead._id}
                      className="border rounded p-3 mb-3"
                    >
                      <h6>{lead.name}</h6>

                      <p className="mb-1">
                        Status: {lead.status}
                      </p>

                      <p className="mb-1">
                        Priority: {lead.priority}
                      </p>

                      <p className="mb-0">
                        Time To Close: {lead.timeToClose} Days
                      </p>
                    </div>
                  ))}

                </div>

              </div>
            </div>
          )
        )}

      </div>

    </div>
  );
};

export default SalesAgentView;