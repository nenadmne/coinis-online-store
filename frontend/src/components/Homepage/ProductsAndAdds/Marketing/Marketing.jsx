import { useState, useEffect, useContext } from "react";
import ProductContext from "../../../../store/product-context";
import "./Marketing.css";

const Marketing = () => {
  const [key, setKey] = useState(0);
  const prodCtx = useContext(ProductContext);
  const { products } = prodCtx;

  const getRandomAd = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  };

  const [currentAd, setCurrentAd] = useState();

  useEffect(() => {
    if (products.length > 0 && currentAd === undefined) {
      setCurrentAd(getRandomAd());
    }
    const intervalId = setInterval(() => {
      setCurrentAd(getRandomAd());
      setKey((prevKey) => prevKey + 1);
    }, 10 * 1000);
    return () => clearInterval(intervalId);
  }, [products]);

  return (
    <div key={key} className="add-wrapper">
      {currentAd !== undefined &&
        currentAd.images.map((item, index) => (
          <img key={index} src={item} alt="Ad" />
        ))}
    </div>
  );
};
export default Marketing;
