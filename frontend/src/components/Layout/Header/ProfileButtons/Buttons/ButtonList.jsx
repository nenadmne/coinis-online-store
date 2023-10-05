import { useState, useContext } from "react";
import ProductContext from "../../../../../store/product-context";
import CartModal from "../.././Cart/CartModal";
import Icon from ".././Buttons/Icon/Icon";
import InboxModal from "../../Inbox/InboxModal";
import OrdersModal from "../../OrderedCart/OrdersModal";
import "./ButtonList.css";

export default function ButtonList({ handleOpenUserMenu }) {
  const [cartOpen, setCartOpen] = useState(false);
  const handleCartOpen = () => setCartOpen(true);
  const handleCartClose = () => setCartOpen(false);

  const [inboxOpen, setInboxOpen] = useState(false);
  const handleInboxOpen = () => setInboxOpen(true);
  const handleInboxClose = () => setInboxOpen(false);

  const [ordersOpen, setOrdersOpen] = useState(false);
  const handleOrdersOpen = () => setOrdersOpen(true);
  const handleOrdersClose = () => setOrdersOpen(false);

  const prodCtx = useContext(ProductContext);
  const { cartItems } = prodCtx;
  const productQuantity = cartItems.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  return (
    <div className="icon-wrapper">
      <CartModal open={cartOpen} handleClose={handleCartClose} />
      <InboxModal open={inboxOpen} handleClose={handleInboxClose} />
      <OrdersModal open={ordersOpen} handleClose={handleOrdersClose} />
      <Icon
        onClick={handleOrdersOpen}
        spanClass="badge bg-teal"
        quantity="67"
        iClass="fas fa-inbox"
        name="Orders"
      />
      <Icon
        onClick={handleInboxOpen}
        spanClass="badge bg-info"
        quantity="12"
        iClass="fas fa-envelope"
        name="Inbox"
      />
      <Icon
        onClick={handleCartOpen}
        spanClass="badge bg-info"
        quantity={productQuantity}
        iClass="fas fa-shopping-cart"
        name="Cart"
      />
      <Icon
        onClick={handleOpenUserMenu}
        iClass="fas fa-user-circle"
        name="Profile"
      />
    </div>
  );
}
