import { useParams, Link } from "react-router-dom";
import "./ProductInformations.css";
import RatingStars from "../../Homepage/HighlightedProducts/MostPopular/TopRatedItems/RatingStars/RatingStars";

const ProductInformations = ({ items }) => {
  const { id } = useParams();
  const product = items.filter((item) => item.id === +id);

  return product.map((item) => (
    <ul className="product-info" key={item}>
      <li className="category">
        <p>
          <Link>{item.category}</Link>
        </p>
      </li>
      <li className="brand">
        <p>
          powered by <span>{item.brand}</span>
        </p>
      </li>
      <li className="title">{item.title}</li>
      <li className="description">{item.description}</li>
      <li className="stock"> In stock: {item.stock}</li>
      <li className="price">
        <span className="prod-old-price">
          ${((item.price / (100 - item.discountPercentage)) * 100).toFixed(2)}
        </span>
        <span className="prod-discount">{`-${item.discountPercentage}%`}</span>
        <span className="prod-price">{`$${item.price}`}</span>
      </li>
      <RatingStars item={item} />
    </ul>
  ));
};

export default ProductInformations;
