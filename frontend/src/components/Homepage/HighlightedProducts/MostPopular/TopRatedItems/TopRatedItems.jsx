import { Link } from "react-router-dom";
import RatingStars from "./RatingStars/RatingStars";
import "./TopRatedItems.css";

const TopRatedItems = ({ item, selectedOption }) => {
  return (
    <div className="top-rated-item">
      <Link to={`/details/${item.slug}`}>
        <img src={item.thumbnail} />
      </Link>
      <div className="top-rated-content">
        <h2>{item.title}</h2>
        <p> In stock: {item.stock}</p>
        {selectedOption === "Top Rated" ? (
          <RatingStars item={item} />
        ) : (
          <strong className="discount">-{item.discountPercentage}%</strong>
        )}
      </div>
    </div>
  );
};

export default TopRatedItems;
