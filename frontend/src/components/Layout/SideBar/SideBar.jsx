import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LaptopIcon from "@mui/icons-material/Laptop";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import WeekendIcon from "@mui/icons-material/Weekend";
import "./SideBar.css";

export default function SideBar({ sideBarOpened, toggleSideBar }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    toggleSideBar();
  };

  React.useEffect(() => {
    if (sideBarOpened === true) {
      setState({ ...state, ["left"]: true });
    } else {
      setState({ ...state, ["left"]: false });
    }
  }, [sideBarOpened]);

  const categories = [
    { category: "smartphones", icon: <SmartphoneIcon /> },
    { category: "laptops", icon: <LaptopIcon /> },
    { category: "fragrances", icon: <HourglassBottomIcon /> },
    { category: "skincare", icon: <SelfImprovementIcon /> },
    { category: "groceries", icon: <LocalDiningIcon /> },
    { category: "home-decoration", icon: <WeekendIcon /> },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: "272px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {categories.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={state["left"]}
      onClose={toggleDrawer("left", false)}
      className="sidebar"
    >
      {list("left")}
    </Drawer>
  );
}
