import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "./ProductImages/ProductImages";
import ProductInformations from "./ProductInformations/ProductInformations";
import getSingleProduct from "../../api/apiCalls/getSingleProduct";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const productData = await getSingleProduct(`/${slug}`);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="product-details-wrapper">
      <ProductImages product={product} />
      <ProductInformations product={product} />
    </div>
  );
};

export default ProductDetails;
