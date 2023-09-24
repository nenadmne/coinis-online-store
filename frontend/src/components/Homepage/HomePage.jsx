import HighlightedProducts from "./HighlightedProducts/HighlightedProducts";
import SearchFilterBar from "./SearchFilterBar/SearchFilterBar";

const Homepage = () => {
  return (
    <main>
      <SearchFilterBar />
      <HighlightedProducts />
    </main>
  );
};

export default Homepage;
