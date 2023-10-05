import { useContext, useEffect, useState } from "react";
import ProductContext from "../../../../store/product-context";
import { useDebounce } from "@uidotdev/usehooks";
import Input from "../../../../UI/input";
import Button from "../../../../UI/Button";
import searchProduct from "../../../../api/apiCalls/searchProduct";
import "./SearchAndFilter.css";

function SearchAndFilter({ openHandler }) {
  const prodCtx = useContext(ProductContext);
  const { filterHandler, products } = prodCtx;

  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const searchHN = async () => {
      let results = [];
      if (debouncedSearchTerm) {
        const data = await searchProduct(debouncedSearchTerm);
        results = data || [];
      }
      setResults(results);
    };
    searchHN();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (searchTerm === "") {
      filterHandler(products);
    } else {
      filterHandler(results);
    }
  }, [results]);

  return (
    <div className="search-filter">
      <Input
        input={{
          inputClasses: "form-control",
          placeholder: "Search...",
          onChange: handleChange,
          value: searchTerm,
        }}
      />
      <Button
        className="btn btn-block btn-outline-success btn-sm"
        name="Filter"
        function={openHandler}
      />
    </div>
  );
}

export default SearchAndFilter;
