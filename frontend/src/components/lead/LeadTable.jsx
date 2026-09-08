import Button from "../common/Button";

const LeadTable = ({ leads = [], onView, onEdit, onDelete }) => {
  if (leads.length === 0) {
    return (
      <div className="alert alert-info text-center mb-0">
        No Leads Found
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered align-middle mb-0">

        <thead className="table-dark">
          <tr>
            <th className="text-nowrap">Name</th>

            <th className="text-nowrap">Source</th>

            <th className="text-nowrap">Sales Agent</th>

            <th className="text-nowrap">Status</th>

            <th className="text-nowrap">Priority</th>

            <th className="text-nowrap">Time To Close</th>

            <th className="text-nowrap">Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>

              <td className="text-nowrap">
                {lead.name}
              </td>

              <td className="text-nowrap">
                {lead.source}
              </td>

              <td className="text-nowrap">
                {lead.salesAgent?.name || "--"}
              </td>

              <td>
                <span
                  className={`badge text-nowrap ${
                    lead.status === "Closed"
                      ? "bg-success"
                      : lead.status === "New"
                        ? "bg-primary"
                        : "bg-warning text-dark"
                  }`}
                >
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
                <div className="fw-semibold">
                  {lead.timeToClose} Days
                </div>

                <small className="text-muted">
                  Created{" "}
                  {new Date(lead.createdAt).toLocaleDateString()}
                </small>
              </td>

              <td>
                <div className="d-flex gap-1 gap-md-2">

                  <Button
                    variant="primary"
                    onClick={() => onView(lead)}
                  >
                    <span className="d-none d-sm-inline">
                      View
                    </span>
                    <span className="d-sm-none">
                      View
                    </span>
                  </Button>

                  <Button
                    variant="warning"
                    onClick={() => onEdit(lead)}
                  >
                    <span className="d-none d-sm-inline">
                      Edit
                    </span>
                    <span className="d-sm-none">
                      Edit
                    </span>
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => onDelete(lead._id)}
                  >
                    <span className="d-none d-sm-inline">
                      Delete
                    </span>
                    <span className="d-sm-none">
                      Delete
                    </span>
                  </Button>

                </div>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default LeadTable;
