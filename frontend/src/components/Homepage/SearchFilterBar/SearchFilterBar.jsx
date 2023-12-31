import { useState } from "react";
import ConditionalFilterBar from "./ConditionalFilterBar/ConditionalFilterBar";
import SearchAndFilter from "./SearchAndFilter/SearchAndFilter";
import "./SearchFilterBar.css";

function SearchFilterBar() {
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <section className="section-wrapper">
      <SearchAndFilter openHandler={clickHandler} />
      <ConditionalFilterBar open={open} clickHandler={clickHandler} />
    </section>
  );
}

export default SearchFilterBar;
