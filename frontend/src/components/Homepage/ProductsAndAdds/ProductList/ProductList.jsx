import { useState, useContext } from "react";
import ProductContext from "../../../../store/product-context";
import ProductListItem from "./ProductListItem/ProductListItem";
import Button from "../../../../UI/Button";
import "./ProductList.css";

const ProductList = ({ counterHandler }) => {
  const prodCtx = useContext(ProductContext);
  const { searchedProducts } = prodCtx;
  const [itemsToShow, setItemsToShow] = useState(10);

  const handleShowMore = () => {
    setItemsToShow((prevItems) => prevItems + 10);
    counterHandler();
  };

  const hasMoreItemsToShow = itemsToShow < searchedProducts.length;

  return (
    <div className="product-list-wrapper">
      {searchedProducts.slice(0, itemsToShow).map((item) => (
        <ProductListItem key={item.slug} item={item} />
      ))}

      {hasMoreItemsToShow && searchedProducts.length > 10 && (
        <Button
          className="btn btn-block btn-outline-success btn-sm show-more-btn"
          name="Show More"
          function={handleShowMore}
        />
      )}
    </div>
  );
};

export default ProductList;
