import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import CartModal from "../.././Cart/CartModal";
import Icon from ".././Buttons/Icon/Icon";

export default function ButtonList({handleOpenUserMenu}) {

  const handleOrders = () => {};
  const handleInbox = () => {};

  const [cartOpen, setCartOpen] = useState(false);
  const handleCartOpen = () => setCartOpen(true);
  const handleCartClose = () => setCartOpen(false);

  return (
    <>
      <Tooltip title="Open orders">
        <Icon
          onClick={handleOrders}
          spanClass="badge bg-teal"
          quantity="67"
          iClass="fas fa-inbox"
          name="Orders"
        />
      </Tooltip>
      <Tooltip title="Open inbox">
        <Icon
          onClick={handleInbox}
          spanClass="badge bg-info"
          quantity="12"
          iClass="fas fa-envelope"
          name="Inbox"
        />
      </Tooltip>
      <Tooltip title="Open Cart">
        <Icon
          onClick={handleCartOpen}
          spanClass="badge bg-info"
          quantity="12"
          iClass="fas fa-shopping-cart"
          name="Cart"
        />
        <CartModal open={cartOpen} handleClose={handleCartClose} />
      </Tooltip>
      <Tooltip title="Open settings">
        <Icon
          onClick={handleOpenUserMenu}
          iClass="fas fa-user-circle"
          name="Profile"
        />
      </Tooltip>
    </>
  );
}
