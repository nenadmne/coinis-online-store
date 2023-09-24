import FilterSlider from "./Slider/FilterSlider";
import CustomValues from "./Custom/CustomValues";
import SortingOptions from "./Sort/SortingOptions";
import "./ConditionalFilterBar.css";


function ConditionalFilterBar({ open }) {
  const filterBarClass = open
    ? "filter-wrapper slide-down"
    : "filter-wrapper slide-up";

  return (
    <div className={filterBarClass}>
      <div className="slider-wrapper">
        <FilterSlider stepValue={10} maxValue={100} />
        <FilterSlider stepValue={50} maxValue={1000} />
        <CustomValues />
      </div>
      <SortingOptions />
    </div>
  );
}

export default ConditionalFilterBar;
