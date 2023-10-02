const Input = (props) => {
  const {
    label,
    value,
    type,
    placeholder,
    onChange,
    onBlur,
    onClick,
    onKeyUp,
    inputClasses,
    disabled,
  } = props.input;

  return (
    <div className={props.className}>
      {label && <label>{label}</label>}
      <input
        className={inputClasses || "form-control"}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        required
      />
      {inputClasses === "form-control is-invalid" && (
        <p className="error-message"> Please enter valid value! </p>
      )}
    </div>
  );
};

export default Input;
