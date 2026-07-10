const LeadStatusBadge = ({ status }) => {
  const statusClasses = {
    New: "bg-primary",
    Contacted: "bg-info",
    Qualified: "bg-warning text-dark",
    "Proposal Sent": "bg-secondary",
    Closed: "bg-success",
  };

  return (
    <span
      className={`badge ${statusClasses[status] || "bg-dark"}`}
    >
      {status}
    </span>
  );
};

export default LeadStatusBadge;