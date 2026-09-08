 import { useNavigate } from "react-router-dom";

const RecentLeads = ({ leads = [] }) => {
  const navigate = useNavigate();

  const recentLeads = leads.slice(0, 5);

  return (
    <div className="card shadow-sm h-100">

      {/* Header */}
      <div className="card-header d-flex justify-content-between align-items-center gap-2">

        <h5 className="mb-0 text-nowrap">
          Recent Leads
        </h5>

        <button
          className="btn btn-sm btn-outline-primary text-nowrap"
          onClick={() => navigate("/leads")}
        >
          View All
        </button>

      </div>

      {/* Body */}
      <div className="card-body p-0">

        {recentLeads.length === 0 ? (

          <div className="text-center p-4 text-muted">
            No recent leads available
          </div>

        ) : (

          <div className="table-responsive">

            <table className="table table-hover mb-0 align-middle">

              <thead className="table-light">

                <tr>
                  <th className="text-nowrap">
                    Name
                  </th>

                  <th className="text-nowrap">
                    Agent
                  </th>

                  <th className="text-nowrap">
                    Status
                  </th>

                  <th className="text-nowrap">
                    Priority
                  </th>

                  <th className="text-nowrap">
                    Close In
                  </th>
                </tr>

              </thead>

              <tbody>

                {recentLeads.map((lead) => (

                  <tr key={lead._id}>

                    <td className="text-nowrap">
                      {lead.name}
                    </td>

                    <td className="text-nowrap">
                      {lead.salesAgent?.name || "--"}
                    </td>

                    <td>
                      <span className="badge bg-primary text-nowrap">
                        {lead.status}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`badge text-nowrap ${
                          lead.priority === "High"
                            ? "bg-danger"
                            : lead.priority === "Medium"
                            ? "bg-warning text-dark"
                            : "bg-secondary"
                        }`}
                      >
                        {lead.priority}
                      </span>
                    </td>

                    <td className="text-nowrap">
                      {lead.timeToClose} Days
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
};

export default RecentLeads;