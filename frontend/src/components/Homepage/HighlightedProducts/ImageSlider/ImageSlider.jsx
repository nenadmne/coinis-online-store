import { useState, useEffect, useContext } from "react";
import ProductContext from "../../../../store/product-context";
import ProductItem from "./ProductItem/ProductItem";
import SliderArrows from "./SliderArrows/SliderArrows";
import "./ImageSlider.css";

const ImageSlider = () => {
  const prodCtx = useContext(ProductContext);
  const { products } = prodCtx;

  const [startIndex, setStartIndex] = useState(0);
  const [autoSlideRight, setAutoSlideRight] = useState(true);

  const slideLeft = () => {
    setStartIndex((prevStartIndex) => {
      const newIndex = prevStartIndex - 3;
      return newIndex < 0 ? products.length - 3 + prevStartIndex : newIndex;
    });
    setAutoSlideRight(false);
  };

  const slideRight = () => {
    setStartIndex((prevStartIndex) => {
      const newIndex = prevStartIndex + 3;
      return newIndex >= products.length
        ? newIndex - products.length
        : newIndex;
    });
    setAutoSlideRight(true);
  };

  const autoSlide = () => {
    if (autoSlideRight) {
      slideRight();
    } else {
      slideLeft();
    }
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 5000);
    return () => clearInterval(interval);
  }, [autoSlideRight]);

  function getVisibleItems() {
    const endIndex = startIndex + 3;
    if (endIndex > products.length) {
      return [
        ...products.slice(startIndex, products.length),
        ...products.slice(0, endIndex - products.length),
      ];
    }
    return products.slice(startIndex, endIndex);
  }

  const visibleItems = getVisibleItems();

  return (
    <div className="image-slider-wrapper">
      <div className="displayed-products">
        {visibleItems.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
      <SliderArrows
        slideLeft={slideLeft}
        slideRight={slideRight}
        autoSlide={autoSlideRight}
      />
    </div>
  );
};

export default ImageSlider;
