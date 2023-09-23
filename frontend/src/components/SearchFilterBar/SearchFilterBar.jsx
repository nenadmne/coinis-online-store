import Input from "../../UI/input";
import Button from "../../UI/Button";
import "./SearchFilterBar.css";
import FilterBar from "./Filter/FilterBar";
import { useState } from "react";

function SearchFilterBar() {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open)
  };

  return (
    <section className="section-wrapper">
      <div className="search-filter">
        <Input
          input={{ inputClasses: "form-control", placeholder: "Search..." }}
        />
        <Button
          className="btn btn-block btn-outline-success btn-sm"
          name="Filter"
          function={clickHandler}
        />
      </div>
      <FilterBar open={open}/>
    </section>
  );
}

export default SearchFilterBar;
