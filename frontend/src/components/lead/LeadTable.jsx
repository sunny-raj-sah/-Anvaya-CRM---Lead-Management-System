import Button from "../common/Button";

const LeadTable = ({ leads = [], onView, onEdit, onDelete }) => {
  if (leads.length === 0) {
    return <div className="alert alert-info text-center">No Leads Found</div>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered align-middle">
        <thead className="table-dark">
          <tr>
            <th>Name</th>

            <th>Source</th>

            <th>Sales Agent</th>

            <th>Status</th>

            <th>Priority</th>

            <th>Time To Close</th>

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>
              <td>{lead.name}</td>

              <td>{lead.source}</td>

              <td>{lead.salesAgent?.name || "--"}</td>

              <td>
                <span
                  className={`badge ${
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
                  className={`badge ${
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

              <td>
                <div className="fw-semibold">{lead.timeToClose} Days</div>

                <small className="text-muted">
                  Created {new Date(lead.createdAt).toLocaleDateString()}
                </small>
              </td>

              <td>
                <div className="d-flex gap-2">
                  <Button variant="primary" onClick={() => onView(lead)}>
                    View
                  </Button>

                  <Button variant="warning" onClick={() => onEdit(lead)}>
                    Edit
                  </Button>

                  <Button variant="danger" onClick={() => onDelete(lead._id)}>
                    Delete
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
