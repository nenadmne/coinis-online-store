import { useState } from "react";
import { Box, Drawer, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../../../assets/logo.png";
import "./LogoAndButtons.css";

const pages = ["Products", "About us", "Support"];

export default function LogoAndButtons({ toggleSideBar, footerRef }) {
  const adminToken = localStorage.getItem("adminToken");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseNavMenu = (page) => {
    console.log(page.target);
    toggleMenu();

    const targetPage = page.target.innerText;
    if (targetPage.toUpperCase() === "PRODUCTS") {
      toggleSideBar();
    } else if (
      targetPage.toUpperCase() === "ABOUT US" ||
      targetPage.toUpperCase() === "SUPPORT"
    ) {
      if (footerRef.current) {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="logo-and-pages">
      {window.innerWidth < 768 && (
        <>
          <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
            <div className="menu">
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() =>
                    handleCloseNavMenu({ target: { innerText: page } })
                  }
                  sx={{
                    width: "100%",
                    justifyContent: "start",
                  }}
                >
                  {page}
                </Button>
              ))}
            </div>
          </Drawer>
          <Button
            onClick={toggleMenu}
            className="drawer"
            sx={{
              color: "white",
            }}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </Button>
        </>
      )}
      <Typography
        className="logo-div"
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: "0.3rem",
          fontSize: "1.5rem",
        }}
      >
        {window.innerWidth >= 768 && "SILKROAD"}

        <img src={logo} alt="Logo" />
      </Typography>

      {window.innerWidth >= 768 && (
        <Box className="pages-div">
          {pages.map((page) => (
            <Button key={page} onClick={handleCloseNavMenu}>
              {page}
            </Button>
          ))}
        </Box>
      )}
    </div>
  );
}
