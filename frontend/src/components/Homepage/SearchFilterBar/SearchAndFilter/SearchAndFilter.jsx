import Input from "../../../../UI/input";
import Button from "../../../../UI/Button";
import "./SearchAndFilter.css";

function SearchAndFilter({ openHandler }) {
  return (
    <div className="search-filter">
      <Input
        input={{ inputClasses: "form-control", placeholder: "Search..." }}
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
