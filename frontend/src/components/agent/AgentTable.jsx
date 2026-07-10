const AgentTable = ({
  agents = [],
}) => {
  if (agents.length === 0) {
    return (
      <div className="alert alert-info">
        No Sales Agents Found.
      </div>
    );
  }

  return (
    <div className="table-responsive">

      <table className="table table-hover table-bordered">

        <thead className="table-dark">

          <tr>

            <th>Name</th>

            <th>Email</th>

            <th>Created</th>

          </tr>

        </thead>

        <tbody>

          {agents.map((agent) => (
            <tr key={agent._id}>

              <td>{agent.name}</td>

              <td>{agent.email}</td>

              <td>
                {new Date(
                  agent.createdAt
                ).toLocaleDateString()}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default AgentTable;