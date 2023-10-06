import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./ProfileMenu.css";

const adminToken = localStorage.getItem("adminToken");
const userToken = localStorage.getItem("userToken");

export default function ProfileMenu({ handleCloseUserMenu, anchorElUser }) {
  const userSettings = ["Profile", "Logout"];
  const adminSettings = ["Logout"];

  return (
    <Menu
      sx={{ mt: "3rem" }}
      id="menu-appbar"
      anchorEl={() => anchorElUser}
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
      {userToken
        ? userSettings.map((item) => (
            <MenuItem key={item} onClick={() => handleCloseUserMenu(item)}>
              <Typography textAlign="center">{item}</Typography>
            </MenuItem>
          ))
        : adminToken
        ? adminSettings.map((item) => (
            <MenuItem key={item} onClick={() => handleCloseUserMenu(item)}>
              <Typography textAlign="center">{item}</Typography>
            </MenuItem>
          ))
        : null}
    </Menu>
  );
}
