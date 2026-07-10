const PriorityBadge = ({ priority }) => {
  const priorityClasses = {
    High: "bg-danger",
    Medium: "bg-warning text-dark",
    Low: "bg-secondary",
  };

  return (
    <span
      className={`badge ${priorityClasses[priority] || "bg-dark"}`}
    >
      {priority}
    </span>
  );
};

export default PriorityBadge;