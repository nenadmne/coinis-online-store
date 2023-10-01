import React, { useState, useEffect } from "react";
import SmallImages from "./SmallImages/SmallImages";
import MainImage from "./MainImage/MainImage";
import "./ProductImages.css";

const ProductImages = ({ product }) => {
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (product !== null) {
      setImages(product.images);
    }
    if (images.length > 0) {
      setLength(images.length);
    }
  }, [product]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="product-images">
      <MainImage
        images={images}
        current={current}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      <SmallImages
        images={images}
        current={current}
        switchImage={(index) => setCurrent(index)}
      />
    </div>
  );
};

export default ProductImages;
