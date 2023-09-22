import { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";


function Layout() {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpened(!sidebarOpened);
  };

  return (
    <>
      <>
        <NavBar toggleSidebar={toggleSidebar} />
        <Outlet />
        <Footer />
      </>
      <SideBar sidebarOpened={sidebarOpened} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Layout;
