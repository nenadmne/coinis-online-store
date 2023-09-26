import { Link } from "react-router-dom";
import Card from "../../../../../UI/Card";
import Button from "../../../../../UI/Button";
import "./ProductItem.css";

const ProductItem = ({ item }) => {
  return (
    <Card className="item-wrapper">
      <Link to={`/details/${item.id}`}>
        <img src={item.thumbnail} />
      </Link>
      <h2> {item.title} </h2>
      <p>
        <span>$</span>
        <strong>{item.price}</strong>
      </p>
      <Button
        name="Add to Cart"
        className="btn btn-block btn-outline-dark btn-xs"
      />
    </Card>
  );
};

export default ProductItem;
