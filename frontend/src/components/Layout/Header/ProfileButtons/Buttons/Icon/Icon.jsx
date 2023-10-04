import IconButton from "@mui/material/IconButton";

export default function Icon({
  className,
  onClick,
  spanClass,
  iClass,
  name,
  quantity,
}) {
  return (
    <IconButton onClick={onClick}>
      <a className={className ? className : "btn btn-app"}>
        {spanClass && <span className={spanClass}>{quantity}</span>}
        <i className={iClass} /> {name}
      </a>
    </IconButton>
  );
}
