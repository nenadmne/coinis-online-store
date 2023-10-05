import "@fortawesome/fontawesome-free/css/all.min.css";
import { useContext } from "react";
import ProductContext from "../../../../../store/product-context";
import PayOptions from "./PayOptions/PayOptions";
import Summary from "./Summary/Summary";
import CartItem from "./CartItem/CartItem";
import "./ShoppingCart.css";

export default function ShopingCart({handleClose}) {
  const prodCtx = useContext(ProductContext);
  const { cartItems } = prodCtx;
  const totalQuantity = cartItems.reduce(
    (total, cartItem) => total + cartItem.amount,
    0
  );

  return (
    <section className="gradient-custom">
      <div className="left-column">
        {cartItems.length > 0 && (
          <div className="cart-item-box">
            <h2 className="cart-amount">Cart - {totalQuantity} products</h2>
            <div className="cart-item-list">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
        <PayOptions />
      </div>
      <Summary handleClose={handleClose}/>
    </section>
  );
}
