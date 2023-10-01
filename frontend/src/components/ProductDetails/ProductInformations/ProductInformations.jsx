import { Link } from "react-router-dom";
import RatingStars from "../../Homepage/HighlightedProducts/MostPopular/TopRatedItems/RatingStars/RatingStars";
import "./ProductInformations.css";

const ProductInformations = ({ product }) => {
  return (
    product !== null && (
      <ul className="product-info" key={product}>
        <li className="category">
          <p>
            <Link>{product.category}</Link>
          </p>
        </li>
        <li className="brand">
          <p>
            powered by <span>{product.brand}</span>
          </p>
        </li>
        <li className="title">{product.title}</li>
        <li className="description">{product.description}</li>
        <li className="stock"> In stock: {product.stock}</li>
        <li className="price">
          <span className="prod-old-price">
            $
            {(
              (product.price / (100 - product.discountPercentage)) *
              100
            ).toFixed(2)}
          </span>
          <span className="prod-discount">{`-${product.discountPercentage}%`}</span>
          <span className="prod-price">{`$${product.price}`}</span>
        </li>
        <RatingStars item={product} />
      </ul>
    )
  );
};

export default ProductInformations;
