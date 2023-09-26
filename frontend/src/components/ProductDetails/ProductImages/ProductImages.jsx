import React, { useState } from "react";
import SmallImages from "./SmallImages/SmallImages";
import MainImage from "./MainImage/MainImage";
import "./ProductImages.css";
import { useParams } from "react-router-dom";

const ProductImages = ({items}) => {
  const { id } = useParams();
  const [current, setCurrent] = useState(0);

  const images = items
    .filter((item) => item.id === +id)
    .map((item) => item.images);

  const length = images[0].length;

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
