import ImageSlider from "./ImageSlider/ImageSlider";
import MostPopular from "./MostPopular/MostPopular";
import "./HighlightedProducts.css";

const HighlightedProducts = ({products}) => {
  return (
    <section className="highlighted-products">
      <ImageSlider products={products}/>
      <MostPopular />
    </section>
  );
};

export default HighlightedProducts;

