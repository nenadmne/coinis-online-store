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
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  const slideLeft = () => {
    setStartIndex((prevStartIndex) => {
      const newIndex = prevStartIndex - itemsPerSlide;
      return newIndex < 0
        ? products.length - itemsPerSlide + prevStartIndex
        : newIndex;
    });
    setAutoSlideRight(false);
  };

  const slideRight = () => {
    setStartIndex((prevStartIndex) => {
      const newIndex = prevStartIndex + itemsPerSlide;
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
    const endIndex = startIndex + itemsPerSlide;
    if (endIndex > products.length) {
      return [
        ...products.slice(startIndex, products.length),
        ...products.slice(0, endIndex - products.length),
      ];
    }
    console.log(startIndex, endIndex);
    return products.slice(startIndex, endIndex);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // Display 1 item on smaller screens
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setItemsPerSlide(2); // Display 3 items on screens wider than 768px
      } else if (window.innerWidth >= 1024) {
        setItemsPerSlide(3); //
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
