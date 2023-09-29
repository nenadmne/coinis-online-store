import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const settings = ["Profile", "Logout"];

export default function ProfileMenu({ handleCloseUserMenu, anchorElUser }) {

  return (
    <Menu
      sx={{ mt: "3rem" }}
      id="menu-appbar"
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((item) => (
        <MenuItem key={item} onClick={() => handleCloseUserMenu(item)}>
          <Typography textAlign="center">{item}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}
