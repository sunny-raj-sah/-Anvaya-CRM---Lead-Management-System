const LeadFilters = ({
  filters,
  onChange,
}) => {
  return (
    <div className="row g-3 mb-4">

      <div className="col-md-3">

        <label className="form-label">
          Status
        </label>

        <select
          className="form-select"
          name="status"
          value={filters.status}
          onChange={onChange}
        >
          <option value="">All</option>

          <option value="New">
            New
          </option>

          <option value="Contacted">
            Contacted
          </option>

          <option value="Qualified">
            Qualified
          </option>

          <option value="Proposal Sent">
            Proposal Sent
          </option>

          <option value="Closed">
            Closed
          </option>

        </select>

      </div>

      <div className="col-md-3">

        <label className="form-label">
          Source
        </label>

        <select
          className="form-select"
          name="source"
          value={filters.source}
          onChange={onChange}
        >
          <option value="">All</option>

          <option value="Website">
            Website
          </option>

          <option value="Referral">
            Referral
          </option>

          <option value="Cold Call">
            Cold Call
          </option>

          <option value="Advertisement">
            Advertisement
          </option>

          <option value="Email">
            Email
          </option>

          <option value="Other">
            Other
          </option>

        </select>

      </div>

      <div className="col-md-3">

        <label className="form-label">
          Priority
        </label>

        <select
          className="form-select"
          name="priority"
          value={filters.priority}
          onChange={onChange}
        >
          <option value="">All</option>

          <option value="High">
            High
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="Low">
            Low
          </option>

        </select>

      </div>

    </div>
  );
};

export default LeadFilters;