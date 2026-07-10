import { useNavigate } from "react-router-dom";


const RecentLeads = ({
  leads = [],
}) => {

  const navigate = useNavigate();


  const recentLeads = leads.slice(0, 5);


  return (
    <div className="card shadow-sm">

      <div className="card-header d-flex justify-content-between align-items-center">

        <h5 className="mb-0">
          Recent Leads
        </h5>


        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => navigate("/leads")}
        >
          View All
        </button>

      </div>


      <div className="card-body p-0">

        {
          recentLeads.length === 0 ? (

            <div className="text-center p-4 text-muted">
              No recent leads available
            </div>

          ) : (

            <div className="table-responsive">

              <table className="table table-hover mb-0">

                <thead className="table-light">

                  <tr>

                    <th>
                      Name
                    </th>

                    <th>
                      Agent
                    </th>

                    <th>
                      Status
                    </th>

                    <th>
                      Priority
                    </th>

                    <th>
                      Close In
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {
                    recentLeads.map((lead) => (

                      <tr key={lead._id}>

                        <td>
                          {lead.name}
                        </td>


                        <td>
                          {
                            lead.salesAgent?.name ||
                            "--"
                          }
                        </td>


                        <td>

                          <span
                            className="badge bg-primary"
                          >
                            {lead.status}
                          </span>

                        </td>


                        <td>

                          <span
                            className={
                              `badge ${
                                lead.priority === "High"
                                  ? "bg-danger"
                                  : lead.priority === "Medium"
                                  ? "bg-warning text-dark"
                                  : "bg-secondary"
                              }`
                            }
                          >
                            {lead.priority}
                          </span>

                        </td>


                        <td>
                          {lead.timeToClose} Days
                        </td>


                      </tr>

                    ))
                  }

                </tbody>

              </table>

            </div>

          )
        }

      </div>

    </div>
  );
};


export default RecentLeads;