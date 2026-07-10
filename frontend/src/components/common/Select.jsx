 const Select = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select",
  disabled = false,
  required = false,
  error = "",
}) => {
  return (
    <div className="mb-3">
      {label && (
        <label className="form-label fw-semibold">
          {label}
          {required && (
            <span className="text-danger ms-1">*</span>
          )}
        </label>
      )}

      <select
        className={`form-select ${
          error ? "is-invalid" : ""
        }`}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <div className="invalid-feedback">
          {error}
        </div>
      )}
    </div>
  );
};

export default Select;