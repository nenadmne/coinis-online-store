import React, { useState, useContext, useEffect } from "react";
import ProductContext from "../../../store/product-context";
import { useParams } from "react-router-dom";
import SmallImages from "./SmallImages/SmallImages";
import MainImage from "./MainImage/MainImage";
import "./ProductImages.css";

const ProductImages = () => {
  const prodCtx = useContext(ProductContext);
  const { products } = prodCtx;
  const { slug } = useParams();
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(null);
  const [images, setImages] = useState([]);

  const getImages = () => {
    const productImages = products
      .filter((item) => item.slug === slug)
      .map((item) => item.images);
    return productImages[0]
  };

  useEffect(() => {
    if (products.length > 0) {
      setImages(getImages());
    }
    if(images.length >0){
      setLength(images.length)
    }
  }, [products]);

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
