import { useEffect, useState } from "react";

import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

import {
  STATUS_OPTIONS,
  PRIORITY_OPTIONS,
  SOURCE_OPTIONS,
} from "../../constants/leadOptions";

import leadInitialValues from "../../constants/leadInitialValues";

const LeadForm = ({
  initialValues = leadInitialValues,
  salesAgents = [],
  onSubmit,
  loading = false,
    submitButtonText = "Save Lead",
}) => {
  const [formData, setFormData] = useState(initialValues);

  useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setFormData({
    ...initialValues,
    salesAgent:
      initialValues.salesAgent?._id ||
      initialValues.salesAgent ||
      "",
  });
}, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagChange = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setFormData((prev) => ({
      ...prev,
      tags: values,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
  };

  console.log("LeadForm initialValues:", initialValues);
console.log("LeadForm formData:", formData);

  return (
    <form
      onSubmit={handleSubmit}
      className="card shadow-sm"
    >
      <div className="card-body">

        <div className="row">

          {/* Lead Name */}

          <div className="col-md-6">

            <Input
              label="Lead Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          {/* Source */}

          <div className="col-md-6">

            <Select
              label="Lead Source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              options={SOURCE_OPTIONS}
              required
            />

          </div>

          {/* Sales Agent */}

          <div className="col-md-6">

            <Select
              label="Sales Agent"
              name="salesAgent"
              value={formData.salesAgent}
              onChange={handleChange}
              options={salesAgents.map((agent) => ({
                value: agent._id,
                label: agent.name,
              }))}
              required
            />

          </div>

          {/* Status */}

          <div className="col-md-6">

            <Select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={STATUS_OPTIONS}
            />

          </div>

          {/* Priority */}

          <div className="col-md-6">

            <Select
              label="Priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              options={PRIORITY_OPTIONS}
            />

          </div>

          {/* Time To Close */}

          <div className="col-md-6">

            <Input
              label="Time To Close (Days)"
              type="number"
              name="timeToClose"
              value={formData.timeToClose}
              onChange={handleChange}
            />

          </div>

          {/* Tags */}

          <div className="col-12">

            <label className="form-label">
              Tags
            </label>

            <select
              className="form-select"
              multiple
              value={formData.tags}
              onChange={handleTagChange}
            >
              <option value="High Value">
                High Value
              </option>

              <option value="Follow-up">
                Follow-up
              </option>

              <option value="Urgent">
                Urgent
              </option>

              <option value="Enterprise">
                Enterprise
              </option>

            </select>

          </div>

        </div>

      </div>

      <div className="card-footer text-end">

        <Button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Saving..."
            :  submitButtonText}
        </Button>

      </div>

    </form>
  );
};

export default LeadForm;