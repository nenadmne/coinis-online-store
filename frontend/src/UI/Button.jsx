const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.function}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
};

export default Button;
