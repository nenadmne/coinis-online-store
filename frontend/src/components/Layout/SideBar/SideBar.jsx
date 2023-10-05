import { useState, useEffect, useContext } from "react";
import ProductContext from "../../../store/product-context";
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
import getProductsByCategory from "../../../api/apiCalls/getProductsByCategory";
import getCategories from "../../../api/apiCalls/getCategories";
import "./SideBar.css";

export default function SideBar({ sideBarOpened, toggleSideBar }) {
  const [categories, setCategories] = useState(null);
  const prodCtx = useContext(ProductContext);
  const { filterHandler } = prodCtx;

  const [state, setState] = useState({
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

  useEffect(() => {
    async function fetchData() {
      const response = await getCategories();
      setCategories(response);
    }

    if (sideBarOpened === true) {
      setState({ ...state, ["left"]: true });
    } else {
      setState({ ...state, ["left"]: false });
    }
    fetchData();
  }, [sideBarOpened]);

  const categoriesToMap =
    categories !== null
      ? [
          { category: categories[0].name, icon: <SmartphoneIcon /> },
          { category: categories[1].name, icon: <LaptopIcon /> },
          { category: categories[2].name, icon: <HourglassBottomIcon /> },
          { category: categories[3].name, icon: <SelfImprovementIcon /> },
          { category: categories[4].name, icon: <LocalDiningIcon /> },
          { category: categories[5].name, icon: <WeekendIcon /> },
        ]
      : null;

  const categoryHandler = (category) => {
    async function fetchData() {
      try {
        const fetchedData = await getProductsByCategory(
          `/categories/${category}`
        );
        filterHandler(fetchedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchData();
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "272px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {categoriesToMap !== null &&
          categoriesToMap.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => categoryHandler(item.category)}>
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
