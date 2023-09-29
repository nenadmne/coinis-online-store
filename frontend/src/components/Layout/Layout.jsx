import { useState, useRef } from "react";
import NavBar from "./Header/NavBar";
import SideBar from "./SideBar/SideBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

function Layout() {
  const footerRef = useRef(null);
  const [sideBarOpened, setSideBarOpened] = useState(false);

  const toggleSidebar = () => {
    setSideBarOpened(!sideBarOpened);
  };

  return (
    <>
      <>
        <NavBar footerRef={footerRef} toggleSideBar={toggleSidebar} />
        <Outlet />
        <Footer footerRef={footerRef} />
      </>
      <SideBar sideBarOpened={sideBarOpened} toggleSideBar={toggleSidebar} />
    </>
  );
}

export default Layout;
