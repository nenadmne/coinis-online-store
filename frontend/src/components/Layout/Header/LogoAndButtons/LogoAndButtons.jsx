import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../../assets/logo.png";
import "./LogoAndButtons.css";

const pages = ["Products", "About us", "Support"];

export default function LogoAndButtons({ toggleSideBar, footerRef }) {

  const handleCloseNavMenu = (page) => {
    const targetPage = page.target.innerText;
    if (targetPage === "PRODUCTS") {
      toggleSideBar();
    }
    if (targetPage === "ABOUT US" || targetPage === "SUPPORT") {
      if (footerRef.current) {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
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
        <Menu
          id="menu-appbar"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
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
    </>
  );
}
