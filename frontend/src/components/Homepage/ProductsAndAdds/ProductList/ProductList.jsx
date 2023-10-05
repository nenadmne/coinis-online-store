import { useState, useContext, useEffect } from "react";
import ProductContext from "../../../../store/product-context";
import ProductListItem from "./ProductListItem/ProductListItem";
import Button from "../../../../UI/Button";
import "./ProductList.css";

const ProductList = ({ counterHandler }) => {
  const prodCtx = useContext(ProductContext);
  const { filteredProducts } = prodCtx;
  const [itemsToShow, setItemsToShow] = useState(6);

  const handleShowMore = () => {
    if (window.innerWidth <= 768) {
      setItemsToShow((prevItems) => prevItems + 6);
    } else if (window.innerWidth >= 1024 && window.innerWidth < 1200) {
      setItemsToShow((prevItems) => prevItems + 8);
    } else if (window.innerWidth >= 1200) {
      setItemsToShow((prevItems) => prevItems + 10);
    }

    counterHandler();
  };

  const hasMoreItemsToShow = itemsToShow < filteredProducts.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(6);
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1200) {
        setItemsToShow(8);
      } else if (window.innerWidth >= 1200) {
        setItemsToShow(10);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="product-list-wrapper">
      <div className="product-list">
        {filteredProducts.slice(0, itemsToShow).map((item) => (
          <ProductListItem key={item.slug} item={item} />
        ))}
      </div>

      {hasMoreItemsToShow && filteredProducts.length > itemsToShow && (
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
