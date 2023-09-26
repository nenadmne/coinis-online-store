import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import "./NavBar.css";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const pages = ["Products", "About us", "Support"];
const settings = ["Profile", "Logout"];

function NavBar({ toggleSideBar, footerRef }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    const targetPage = page.target.innerText;
    setAnchorElNav(null);
    if (targetPage === "PRODUCTS") {
      toggleSideBar();
    }
    if (targetPage === "ABOUT US" || targetPage === "SUPPORT") {
      if (footerRef.current) {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleCart = () => {};

  const handleCloseUserMenu = (page) => {
    setAnchorElUser(null);
    if (page === "Profile") {
      navigate("/profile");
    }
  };

  return (
    <AppBar
      position="sticky"
      display="flex"
      sx={{ backgroundColor: "var(--secondary)", padding: "0" }}
    >
      <Container maxWidth="100%" sx={{ padding: "0px !important" }}>
        <Toolbar disableGutters>
          <Typography
            className="logo-div"
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              fontSize: "1.5rem",
              color: "inherit",
              padding: "0.75rem 2rem",
              textDecoration: "none",
              backgroundColor: "var(--primary)",
            }}
          >
            SILKROAD
            <img src={logo} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((item) => (
                <MenuItem
                  key={item}
                  onClick={() => {
                    handleCloseNavMenu(item);
                  }}
                >
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            className="logo-div"
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".25rem",
              padding: "0.75rem 0",
              fontSize: "1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SILKROAD
            <img src={logo} />
          </Typography>
          <Box
            className="pages-div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "white",
                  display: "block",
                  fontWeight: "500",
                  letterSpacing: "0.2rem",
                  border: "1px solid white",
                  boxShadow: "0.1rem 0.1rem 0.1rem grey",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box className="profile-div" sx={{ flexGrow: 0, p: "1rem" }}>
            <Tooltip title="Open Cart">
              <IconButton onClick={handleCart} sx={{ p: "0" }}>
                <Badge badgeContent={1} color="primary" className="badge">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: "0", fontSize: "1rem" }}
              >
                <Avatar
                  className="avatar"
                  sx={{ border: "1px solid white", objectFit: "cover" }}
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "3rem" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
