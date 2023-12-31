import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Box } from "@mui/material";
import ProfileMenu from "./Menu/ProfileMenu";
import ButtonList from "./Buttons/ButtonList";
import "./ProfileButtons.css";

export default function ProfileButtons() {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseUserMenu = (page) => {
    setAnchorElUser(null);
    if (page === "Profile") {
      navigate("/profile");
    }
    if (page === "Logout") {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("userToken");
      toast("Succesffully logged out!");
      navigate("/");
    }
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <Box className="profile-div" sx={{ p: "1rem" }}>
      <ButtonList handleOpenUserMenu={handleOpenUserMenu} />
      <ProfileMenu
        handleCloseUserMenu={handleCloseUserMenu}
        anchorElUser={anchorElUser}
      />
    </Box>
  );
}
