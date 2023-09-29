import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import LogoAndButtons from "./LogoAndButtons/LogoAndButtons";
import ProfileButtons from "./ProfileButtons/ProfileButtons";
import "./NavBar.css";

function NavBar({ toggleSideBar, footerRef }) {
  return (
    <AppBar
      position="sticky"
      display="flex"
      sx={{ backgroundColor: "var(--secondary)", padding: "0" }}
    >
      <Container maxWidth="100%" sx={{ padding: "0px !important" }}>
        <Toolbar disableGutters>
          <LogoAndButtons toggleSideBar={toggleSideBar} footerRef={footerRef} />
          <ProfileButtons />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
