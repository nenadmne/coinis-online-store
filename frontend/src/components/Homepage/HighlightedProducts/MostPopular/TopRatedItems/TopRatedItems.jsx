import RatingStars from "./RatingStars/RatingStars";
import "./TopRatedItems.css";

const TopRatedItems = ({ item, selectedOption }) => {
  return (
    <div className="top-rated-item">
      <img src={item.thumbnail} />
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
