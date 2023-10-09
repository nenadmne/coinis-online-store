import { useLoaderData } from "react-router-dom";
import getProducts from "../../api/apiCalls/getProducts";
import HighlightedProducts from "./HighlightedProducts/HighlightedProducts";
import ProductsAndAdds from "./ProductsAndAdds/ProductsAndAdds";
import SearchFilterBar from "./SearchFilterBar/SearchFilterBar";

const Homepage = () => {
  const fetchedData = useLoaderData();

  return (
    <main>
      <SearchFilterBar />
      <HighlightedProducts products={fetchedData} />
      <ProductsAndAdds />
    </main>
  );
};

export default Homepage;

export const HomepageLoader = async () => {
  return await getProducts();
};
