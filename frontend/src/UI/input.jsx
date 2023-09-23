const Input = (props) => {
  const {
    label,
    value,
    placeholder,
    onChange,
    onBlur,
    onClick,
    onKeyUp,
    hasError,
    inputClasses,
    disabled,
  } = props.input;

  return (
    <div className={props.className}>
      {label && (
        <label>
          {label} {props.sup && <sup>*</sup>}
        </label>
      )}
      <input
        className={inputClasses || "form-control"}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        required
      />
      {hasError && (
        <p className="error-message"> Uneseni podatak nije validan! </p>
      )}
    </div>
  );
};

export default Input;
