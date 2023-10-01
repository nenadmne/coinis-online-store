import IconButton from "@mui/material/IconButton";

export default function Icon({ onClick, spanClass, iClass, name, quantity }) {
  return (
    <IconButton onClick={onClick} sx={{ p: "0" }}>
      <a className="btn btn-app">
        {spanClass && <span className={spanClass}>{quantity}</span>}
        <i className={iClass} /> {name}
      </a>
    </IconButton>
  );
}
