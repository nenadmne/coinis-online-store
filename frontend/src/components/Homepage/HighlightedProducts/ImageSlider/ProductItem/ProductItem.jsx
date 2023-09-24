import Card from "../../../../../UI/Card";
import Button from "../../../../../UI/Button";
import "./ProductItem.css";

const ProductItem = ({ item }) => {
  return (
    <Card className="item-wrapper">
      <img src={item.thumbnail} />
      <h2> {item.title} </h2>
      <p>
        <span>$</span>
        <strong>{item.price}</strong>
      </p>
      <Button
        name="Specifications"
        className="btn btn-block btn-outline-dark btn-xs"
      />
    </Card>
  );
};

export default ProductItem;
