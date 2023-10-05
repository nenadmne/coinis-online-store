import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import LogoAndButtons from "./LogoAndButtons/LogoAndButtons";
import ProfileButtons from "./ProfileButtons/ProfileButtons";
import "./NavBar.css";

function NavBar({ toggleSideBar, footerRef }) {
  return (
    <AppBar
      sx={{ backgroundColor: "var(--secondary)" }}
      className="nav-bar-wrapper"
    >
      <Container
        className="nav-bar"
        maxWidth="100vw"
        sx={{ padding: "0 !important" }}
      >
        <Toolbar disableGutters className="nav-bar-toolbar">
          <LogoAndButtons toggleSideBar={toggleSideBar} footerRef={footerRef} />
          <ProfileButtons />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
