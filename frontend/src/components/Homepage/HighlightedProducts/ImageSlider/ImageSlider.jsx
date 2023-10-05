import { useState, useEffect, useContext, useRef } from "react";
import ProductContext from "../../../../store/product-context";
import ProductItem from "./ProductItem/ProductItem";
import SliderArrows from "./SliderArrows/SliderArrows";
import "./ImageSlider.css";

const ImageSlider = () => {
  const prodCtx = useContext(ProductContext);
  const { products } = prodCtx;
  const [startIndex, setStartIndex] = useState(0);
  const [autoSlideRight, setAutoSlideRight] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  function getItemsPerSlide() {
    if (window.innerWidth < 768) {
      return 1;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      return 2;
    } else if (window.innerWidth >= 1024) {
      return 3;
    }
  }

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
  }, [autoSlideRight, itemsPerSlide]);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageSliderWrapperRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        slideLeft();
      } else if (e.key === "ArrowRight") {
        slideRight();
      }
    };

    const handleMouseEnter = () => {
      window.addEventListener("keydown", handleKeyDown);
    };

    const handleMouseLeave = () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

    const imageSliderWrapper = imageSliderWrapperRef.current;
    if (imageSliderWrapper) {
      imageSliderWrapper.addEventListener("mouseenter", handleMouseEnter);
      imageSliderWrapper.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (imageSliderWrapper) {
        imageSliderWrapper.removeEventListener("mouseenter", handleMouseEnter);
        imageSliderWrapper.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  function getVisibleItems() {
    if (autoSlideRight) {
      const endIndex = (startIndex + itemsPerSlide) % products.length;
      if (endIndex < startIndex) {
        return [
          ...products.slice(startIndex, products.length),
          ...products.slice(0, endIndex),
        ];
      } else return [...products.slice(startIndex, endIndex)];
    } else {
      const endIndex =
        (startIndex - itemsPerSlide + products.length) % products.length;
      if (endIndex > startIndex) {
        return [
          ...products.slice(endIndex, products.length),
          ...products.slice(0, startIndex),
        ];
      } else {
        return [...products.slice(endIndex, startIndex)];
      }
    }
  }
  const visibleItems = getVisibleItems();

  return (
    <div className="image-slider-wrapper" ref={imageSliderWrapperRef}>
      <div className="displayed-products">
        {visibleItems.map((item) => (
          <ProductItem key={item.id} item={item} autoSlideRight={autoSlideRight}/>
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
