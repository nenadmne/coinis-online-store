import HighlightedProducts from "./HighlightedProducts/HighlightedProducts";
import ProductsAndAdds from "./ProductsAndAdds/ProductsAndAdds";
import SearchFilterBar from "./SearchFilterBar/SearchFilterBar";

const Homepage = () => {
  return (
    <main>
      <SearchFilterBar />
      <HighlightedProducts />
      <ProductsAndAdds />
    </main>
  );
};

export default Homepage;
