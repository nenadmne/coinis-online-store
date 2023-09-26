import { Link } from "react-router-dom";
import Button from "../../../../../UI/Button";
import Card from "../../../../../UI/Card";
import "./ProductListItem.css";

const ProductListItem = ({ item }) => {
  return (
    <Card className="list-item-wrapper">
      <img src={item.thumbnail} />
      <h2> {item.title} </h2>
      <p>
        <span>$</span>
        <strong>{item.price}</strong>
      </p>
      <Link to={`/details/${item.id}`}>
        <Button
          name="Specifications"
          className="btn btn-block btn-outline-dark btn-xs"
        />
      </Link>
    </Card>
  );
};

export default ProductListItem;
