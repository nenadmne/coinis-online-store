import ProductImages from "./ProductImages/ProductImages";
import ProductInformations from "./ProductInformations/ProductInformations";
import "./ProductDetails.css";

const ProductDetails = () => {
  return (
    <div className="product-details-wrapper">
      <ProductImages />
      <ProductInformations />
    </div>
  );
};

export default ProductDetails;
