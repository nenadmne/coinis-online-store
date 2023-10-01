import { useState, useEffect, useContext } from "react";
import ProductContext from "../../../../store/product-context";
import ProductListItem from "./ProductListItem/ProductListItem";
import Button from "../../../../UI/Button";
import "./ProductList.css";

const ProductList = ({ counterHandler }) => {
  const prodCtx = useContext(ProductContext);
  const { products } = prodCtx;
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedItems, setDisplayedItems] = useState([]);

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    counterHandler();
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newItems = products.slice(startIndex, endIndex);
    if (newItems.length > 0) {
      setDisplayedItems((prevItems) => {
        const uniqueItems = newItems.filter(
          (newItem) => !prevItems.some((prevItem) => prevItem.id === newItem.id)
        );
        return [...prevItems, ...uniqueItems];
      });
    }
  }, [currentPage, products]);

  return (
    <div className="product-list-wrapper">
      {displayedItems.map((item) => (
        <ProductListItem key={item.id} item={item} />
      ))}
      {displayedItems.length < products.length && (
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
