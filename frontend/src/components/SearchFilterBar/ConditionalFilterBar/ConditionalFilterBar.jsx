import FilterSlider from "./Slider/FilterSlider";
import SortingOptions from "./Sort/SortingOptions";
import Input from "../../../UI/input";
import "./ConditionalFilterBar.css";

function ConditionalFilterBar({ open }) {

  const filterBarClass = open ? "filter-wrapper slide-down" : "filter-wrapper slide-up";

  return (
    <div className={filterBarClass}>
      <div className="slider-wrapper">
        <FilterSlider stepValue={10} maxValue={100} />
        <FilterSlider stepValue={50} maxValue={1000} />
        <div className="custom-values">
          <p> Enter custom values </p>
          <Input input={{ type: "number", placeholder: "$" }} />
          <Input input={{ type: "number", placeholder: "$" }} />
        </div>
      </div>
      <SortingOptions />
    </div>
  );
}

export default ConditionalFilterBar;
