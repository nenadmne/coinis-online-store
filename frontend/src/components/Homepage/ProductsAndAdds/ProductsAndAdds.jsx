import { Fragment, useEffect, useState } from "react";
import Marketing from "./Marketing/Marketing";
import ProductList from "./ProductList/ProductList";
import "./ProductsAndAdds.css";

const ProductsAndAdds = () => {
  const [counter, setCounter] = useState(0);
  const [marketingComponents, setMarketingComponents] = useState([]);
  const counterHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    if (window.innerWidth >= 768 && counter > 0) {
      const marketingComponents = [];
      for (let i = 1; i <= counter; i++) {
        marketingComponents.push(<Marketing key={i} />);
      }
      setMarketingComponents(marketingComponents);
    }
  }, [counter]);

  return (
    <section className="product-adds-wrapper">
      <ProductList counterHandler={counterHandler} />
      <div className="marketing-wrapper">
        <Marketing />
        {marketingComponents.map((component, index) => (
          <Fragment key={index}>{component}</Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProductsAndAdds;
