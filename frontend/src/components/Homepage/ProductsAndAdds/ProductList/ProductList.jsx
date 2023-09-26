import { useState, useEffect } from "react";
import ProductListItem from "./ProductListItem/ProductListItem";
import "./ProductList.css";
import Button from "../../../../UI/Button";



const ProductList = ({items, counterHandler}) => {
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
    const newItems = items.slice(startIndex, endIndex);
    if (newItems.length > 0) {
      setDisplayedItems((prevItems) => {
        const uniqueItems = newItems.filter(
          (newItem) => !prevItems.some((prevItem) => prevItem.id === newItem.id)
        );
        return [...prevItems, ...uniqueItems];
      });
    }
  }, [currentPage]);

  return (
    <div className="product-list-wrapper">
      {displayedItems.map((item) => (
        <ProductListItem key={item.id} item={item} />
      ))}
      {displayedItems.length < items.length && (
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
