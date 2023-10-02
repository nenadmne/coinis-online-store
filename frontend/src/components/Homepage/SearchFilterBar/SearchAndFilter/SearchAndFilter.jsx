import { useContext, useEffect } from "react";
import ProductContext from "../../../../store/product-context";
import Input from "../../../../UI/input";
import Button from "../../../../UI/Button";
import useInput from "../../../../hooks/use-input";
import "./SearchAndFilter.css";

function SearchAndFilter({ openHandler }) {
  const prodCtx = useContext(ProductContext);
  const { searchProducts } = prodCtx;

  const { enteredValue: enteredSearch, onChangeHandler: changeSearchHandler } =
    useInput((enteredSearch) => enteredSearch.trim().length > 0);

  useEffect(() => {
    searchProducts(enteredSearch.toLowerCase());
  }, [enteredSearch]);

  return (
    <div className="search-filter">
      <Input
        input={{
          inputClasses: "form-control",
          placeholder: "Search...",
          onChange: changeSearchHandler,
          value: enteredSearch,
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
