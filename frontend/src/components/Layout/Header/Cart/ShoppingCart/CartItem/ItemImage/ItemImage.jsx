import "./ItemImage.css";

export default function ItemImage({ thumbnail }) {
  return (
    <div className="cart-item-image">
      <img src={thumbnail} />
    </div>
  );
}
