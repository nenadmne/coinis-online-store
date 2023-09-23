import "./FilterBar.css";
import FilterSlider from "./Slider/FilterSlider";

function FilterBar({ open }) {
  return (
    <div
      className={open ? "filter-wrapper slide-down" : "filter-wrapper slide-up"}
    >
      <div className="slider-wrapper">
        <FilterSlider stepValue={10} maxValue={100} />
        <FilterSlider stepValue={50} maxValue={1000} />
      </div>
    </div>
  );
}

export default FilterBar;
