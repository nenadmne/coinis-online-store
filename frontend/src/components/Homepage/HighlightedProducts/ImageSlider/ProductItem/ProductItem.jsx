import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../../../../store/product-context";
import Card from "../../../../../UI/Card";
import Button from "../../../../../UI/Button";
import "./ProductItem.css";

const ProductItem = ({ item }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      title: item.title,
      thumbnail: item.thumbnail,
      price: item.price,
      amount: 1,
    });
  };

  return (
    <Card className="item-wrapper">
      <Link to={`/details/${item.slug}`}>
        <img src={item.thumbnail} />
      </Link>
      <h2> {item.title} </h2>
      <p>
        <strong>{`$${item.price}`}</strong>
      </p>
      <Button
        name="Add to Cart"
        className="btn btn-block btn-outline-dark btn-xs"
        function={() => addToCartHandler(item)}
      />
    </Card>
  );
};

export default ProductItem;
