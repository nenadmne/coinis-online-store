import { useState, useEffect } from "react";
import ProductItem from "./ProductItem/ProductItem";
import SliderArrows from "./SliderArrows/SliderArrows";
import "./ImageSlider.css";

const ImageSlider = ({items}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [autoSlideRight, setAutoSlideRight] = useState(true);

  const slideLeft = () => {
    setStartIndex((prevStartIndex) => {
      const newIndex = prevStartIndex - 3;
      return newIndex < 0 ? items.length - 3 + prevStartIndex : newIndex;
    });
    setAutoSlideRight(false);
  };

  const slideRight = () => {
    setStartIndex((prevStartIndex) => {
      const newIndex = prevStartIndex + 3;
      return newIndex >= items.length ? newIndex - items.length : newIndex;
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
    if (endIndex > items.length) {
      return [
        ...items.slice(startIndex, items.length),
        ...items.slice(0, endIndex - items.length),
      ];
    }
    return items.slice(startIndex, endIndex);
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
