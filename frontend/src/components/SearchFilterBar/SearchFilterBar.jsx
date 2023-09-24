import { useState } from "react";
import ConditionalFilterBar from "./ConditionalFilter/ConditionalFilterBar";
import SearchAndFilter from "./SearchAndFilter/SearchAndFilter";
import "./SearchFilterBar.css";

function SearchFilterBar() {
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <section className="section-wrapper">
      <SearchAndFilter openHandler={clickHandler}/>
      <ConditionalFilterBar open={open} />
    </section>
  );
}

export default SearchFilterBar;
