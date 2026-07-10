import { useNavigate } from "react-router-dom";

const QuickFilters = () => {
  const navigate = useNavigate();

  const filters = [
    {
      label: "All Leads",
      value: "",
    },
    {
      label: "New",
      value: "New",
    },
    {
      label: "Contacted",
      value: "Contacted",
    },
    {
      label: "Qualified",
      value: "Qualified",
    },
    {
      label: "Proposal Sent",
      value: "Proposal Sent",
    },
    {
      label: "Closed",
      value: "Closed",
    },
  ];

  const handleFilter = (status) => {
    if (!status) {
      navigate("/leads");
      return;
    }

    navigate(`/leads?status=${status}`);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="mb-3">Quick Filters</h5>

        <div className="d-flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.label}
              className="btn btn-outline-primary"
              onClick={() => handleFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickFilters;
