import ItemImage from "./ItemImage/ItemImage";
import ItemProduct from "./ItemProduct/ItemProduct";
import ItemQuantity from "./ItemQuantity/ItemQuantity";
import "./CartItem.css";

export default function CartItem({ item }) {
  return (
    <div className="cart-item-wrapper">
      <div className="cart-item">
        <ItemImage thumbnail={item.thumbnail} />
        <ItemProduct item={item} />
      </div>
      <ItemQuantity item={item} />
    </div>
  );
}
