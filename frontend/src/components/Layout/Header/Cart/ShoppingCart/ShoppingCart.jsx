import "@fortawesome/fontawesome-free/css/all.min.css";
import { useContext } from "react";
import ProductContext from "../../../../../store/product-context";
import PayOptions from "./PayOptions/PayOptions";
import Summary from "./Summary/Summary";
import CartItem from "./CartItem/CartItem";
import { Box } from "@mui/material";
import "./ShoppingCart.css";

export default function ShopingCart() {
  const cartCtx = useContext(ProductContext);
  const { cartItems } = cartCtx;
  const totalQuantity = cartItems.reduce(
    (total, cartItem) => total + cartItem.amount,
    0
  );

  return (
    <section className="gradient-custom">
      <div className="left-column">
        {cartItems.length > 0 && (
          <div className="cart-item-box">
            <h2 className="cart-amount">Cart - {totalQuantity}</h2>
            <div className="cart-item-list">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
        <PayOptions />
      </div>
      <Summary />
    </section>
  );
}
