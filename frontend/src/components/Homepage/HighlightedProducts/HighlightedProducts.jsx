import ImageSlider from "./ImageSlider/ImageSlider";
import MostPopular from "./MostPopular/MostPopular";
import "./HighlightedProducts.css";

const HighlightedProducts = () => {
  return (
    <section className="highlighted-products">
      <ImageSlider />
      <MostPopular />
    </section>
  );
};

export default HighlightedProducts;
