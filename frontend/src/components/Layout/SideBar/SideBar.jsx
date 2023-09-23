import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CategoryIcon from "@mui/icons-material/Category";
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

  const list = (anchor) => (
    <Box
      sx={{ width: "272px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Men's clothing", "Jewelery", "Electronics", "Women's clothing"].map(
          (text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
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
