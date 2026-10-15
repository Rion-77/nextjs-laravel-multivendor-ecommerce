function InputField({
  label,
  type = "text",
  name,
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
      <input
        className="form-control"
        type={type}
        id={name}
        name={name}
        required={required}
        autoComplete={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <small className="text-danger">{errors && errors[`${name}`]}</small>
    </div>
  );
}

export default InputField;
