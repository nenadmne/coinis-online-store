import { useContext } from "react";
import CartContext from "../../../../../../../store/product-context";
import Icon from "../../../../ProfileButtons/Buttons/Icon/Icon";
import "./ItemProduct.css";

export default function ItemProduct({ item }) {
  const cartCtx = useContext(CartContext);
  const { cartItems, removeItem } = cartCtx;

  const amount = cartItems
    .filter((prod) => prod.id === item.id)
    .map((item) => item.amount);

  return (
    <div className="cart-item-info">
      <h2>
        <strong>{item.title}</strong>
      </h2>
      <p>
        Amount: <strong>{amount}</strong>
      </p>
      <p style={{ color: "var(--green-light)", fontWeight: "700" }}>
        ${item.price}
      </p>
      <Icon
        iClass="fas fa-trash"
        className="trash-button"
        onClick={() => removeItem(item.id, amount)}
      />
    </div>
  );
}
