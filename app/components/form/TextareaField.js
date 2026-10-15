function TextareaField({
  label,
  name,
  rows = "2",
  className = "col-md-6",
  placeholder = "",
  required = false,
  value,
  onChange,
  errors = null
}) {
  return (
    <div className={className}>
      <label className="l" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="form-control"
        id={name}
        name={name}
        rows={rows}
        required={required}
        autoComplete={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      >
      </textarea>
      <small className="text-danger">{errors && errors[`${name}`]}</small>
    </div>
  );
}

export default TextareaField;
