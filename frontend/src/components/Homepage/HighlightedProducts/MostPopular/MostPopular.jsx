import { useState, useContext } from "react";
import ProductContext from "../../../../store/product-context";
import TopRatedItems from "./TopRatedItems/TopRatedItems";
import "./MostPopular.css";

const MostPopular = () => {
  const prodCtx = useContext(ProductContext);
  const { products } = prodCtx;

  const [selectedOption, setSelectedOption] = useState("Top Rated");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const sortItems = () => {
    if (selectedOption === "Top Rated") {
      return products.slice().sort((a, b) => b.rating - a.rating);
    } else if (selectedOption === "Discount") {
      return products
        .slice()
        .sort((a, b) => b.discountPercentage - a.discountPercentage);
    }
    return products;
  };

  const topItems = sortItems().slice(0, 3);

  return (
    <div className="most-popular">
      <select
        className="custom-select"
        onChange={handleChange}
        value={selectedOption}
      >
        <option> Top Rated </option>
        <option> Discount </option>
      </select>
      {topItems.map((item) => (
        <TopRatedItems
          key={item.id}
          item={item}
          selectedOption={selectedOption}
        />
      ))}
    </div>
  );
};

export default MostPopular;
