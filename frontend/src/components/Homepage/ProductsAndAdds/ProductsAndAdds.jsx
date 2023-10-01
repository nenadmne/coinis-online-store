import { useEffect, useState } from "react";
import Marketing from "./Marketing/Marketing";
import ProductList from "./ProductList/ProductList";
import "./ProductsAndAdds.css";

const ProductsAndAdds = () => {
  const [counter, setCounter] = useState(0);
  const [secondAdd, setSecondAdd] = useState(false);
  const [thirdAdd, setThirdAdd] = useState(false);
  const counterHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    if (counter === 1) {
      setSecondAdd(true);
    } else if (counter === 2) {
      setThirdAdd(true);
    }
  }, [counter]);

  return (
    <section className="product-adds-wrapper">
      <ProductList counterHandler={counterHandler} />
      <div className="marketing-wrapper">
        <Marketing />
        {secondAdd && <Marketing />}
        {thirdAdd && <Marketing />}
      </div>
    </section>
  );
};

export default ProductsAndAdds;
