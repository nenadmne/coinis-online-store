import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ProductContext from "../../../store/product-context";
import RatingStars from "../../Homepage/HighlightedProducts/MostPopular/TopRatedItems/RatingStars/RatingStars";
import "./ProductInformations.css";

const ProductInformations = () => {
  const { slug } = useParams();
  const prodCtx = useContext(ProductContext);
  const { products } = prodCtx;
  const product = products.filter((item) => item.slug === slug);

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
