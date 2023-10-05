import { useContext } from "react";
import ProductContext from "../../../../../../../store/product-context";
import Icon from "../../../../ProfileButtons/Buttons/Icon/Icon";
import "./ItemProduct.css";

export default function ItemProduct({ item }) {
  const prodCtx = useContext(ProductContext);
  const { cartItems, removeItem } = prodCtx;

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
