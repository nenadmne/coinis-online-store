import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import CartModal from "../.././Cart/CartModal";
import Icon from ".././Buttons/Icon/Icon";
import InboxModal from "../../Inbox/InboxModal";
import OrdersModal from "../../OrderedCart/OrdersModal";

export default function ButtonList({ handleOpenUserMenu }) {
  const handleOrders = () => {};

  const [cartOpen, setCartOpen] = useState(false);
  const handleCartOpen = () => setCartOpen(true);
  const handleCartClose = () => setCartOpen(false);

  const [inboxOpen, setInboxOpen] = useState(false);
  const handleInboxOpen = () => setInboxOpen(true);
  const handleInboxClose = () => setInboxOpen(false);

  const [ordersOpen, setOrdersOpen] = useState(false);
  const handleOrdersOpen = () => setOrdersOpen(true);
  const handleOrdersClose = () => setOrdersOpen(false);

  return (
    <>
      <Tooltip>
        <Icon
          onClick={handleOrdersOpen}
          spanClass="badge bg-teal"
          quantity="67"
          iClass="fas fa-inbox"
          name="Orders"
        />
        <OrdersModal open={ordersOpen} handleClose={handleOrdersClose} />
      </Tooltip>
      <Tooltip>
        <Icon
          onClick={handleInboxOpen}
          spanClass="badge bg-info"
          quantity="12"
          iClass="fas fa-envelope"
          name="Inbox"
        />
        <InboxModal open={inboxOpen} handleClose={handleInboxClose} />
      </Tooltip>
      <Tooltip>
        <Icon
          onClick={handleCartOpen}
          spanClass="badge bg-info"
          quantity="12"
          iClass="fas fa-shopping-cart"
          name="Cart"
        />
        <CartModal open={cartOpen} handleClose={handleCartClose} />
      </Tooltip>
      <Tooltip>
        <Icon
          onClick={handleOpenUserMenu}
          iClass="fas fa-user-circle"
          name="Profile"
        />
      </Tooltip>
    </>
  );
}
