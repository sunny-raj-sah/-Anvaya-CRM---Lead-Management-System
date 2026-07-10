import LeadStatusBadge from "./LeadStatusBadge";
import PriorityBadge from "./PriorityBadge";

const LeadInfoCard = ({ lead }) => {
  return (
    <div className="card shadow-sm mb-4">

      <div className="card-header">
        <h4 className="mb-0">
          Lead Information
        </h4>
      </div>

      <div className="card-body">

        <div className="row">

          <div className="col-md-6 mb-3">
            <strong>Lead Name</strong>

            <p>{lead.name}</p>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Lead Source</strong>

            <p>{lead.source}</p>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Sales Agent</strong>

            <p>{lead.salesAgent?.name}</p>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Status</strong>

            <div>
              <LeadStatusBadge
                status={lead.status}
              />
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Priority</strong>

            <div>
              <PriorityBadge
                priority={lead.priority}
              />
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Time To Close</strong>

            <p>
              {lead.timeToClose} Days
            </p>
          </div>

          <div className="col-12">

            <strong>Tags</strong>

            <div className="mt-2">

              {lead.tags?.length ? (
                lead.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge bg-primary me-2"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <p>No Tags</p>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LeadInfoCard;