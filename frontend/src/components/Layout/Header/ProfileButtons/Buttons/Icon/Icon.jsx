import IconButton from "@mui/material/IconButton";

export default function Icon({ onClick, spanClass, iClass, name, quantity }) {
  return (
    <IconButton onClick={onClick ? onClick : null} sx={{ p: "0" }}>
      <a class="btn btn-app">
        {spanClass && <span class={spanClass}>{quantity}</span>}
        <i class={iClass}></i> {name}
      </a>
    </IconButton>
  );
}
