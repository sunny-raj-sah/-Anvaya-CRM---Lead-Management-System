//  import Input from "../common/Input";
import Select from "../common/Select";
import { STATUS_OPTIONS, PRIORITY_OPTIONS } from "../../constants/leadOptions";

const LeadFilters = ({ filters, onChange }) => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="row">
          {/* Search */}

          <div className="col-md-4">
            {/* <Input
              label="Search"
              name="search"
              placeholder="Search Lead..."
              value={filters.search}
              onChange={onChange}
            /> */}
            <div className="col-md-3">
              <label className= "form-label fw-semibold">Search</label>
              <input
                className="form-control"
                type="text"
                name="search"
                placeholder="Search Lead..."
                value={filters.search}
                onChange={onChange}
              />
            </div>
          </div>

          {/* Status */}

          <div className="col-md-4">
            <Select
              label="Status"
              name="status"
              value={filters.status}
              onChange={onChange}
              options={STATUS_OPTIONS}
            />
            <Select
              label="Priority"
              name="priority"
              value={filters.priority}
              onChange={onChange}
              options={PRIORITY_OPTIONS}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadFilters;
