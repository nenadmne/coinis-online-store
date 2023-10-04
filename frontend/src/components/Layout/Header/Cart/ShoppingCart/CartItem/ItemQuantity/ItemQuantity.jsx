import { useState, useContext } from "react";
import CartContext from "../../../../../../../store/product-context";
import Input from "../../../../../../../UI/input";
import Icon from "../../../../ProfileButtons/Buttons/Icon/Icon";
import "./ItemQuantity.css";

export default function ItemQuantity({ item }) {
  const [value, setValue] = useState(1);
  const valueHandler = (event) => {
    setValue(event.target.value);
  };
  const cartCtx = useContext(CartContext);
  const { addItem, removeItem } = cartCtx;

  return (
    <div className="cart-quantity-wrapper">
      <Icon
        className="quantity-btn"
        onClick={() => removeItem(item.id, value)}
        iClass="fas fa-minus"
      />
      <Input
        input={{ value: value, onChange: valueHandler, min: 1, type: "number" }}
      />
      <Icon
        className="quantity-btn"
        onClick={() => addItem({ ...item, amount: +value })}
        iClass="fas fa-plus"
      />
    </div>
  );
}
