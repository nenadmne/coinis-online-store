import { useContext, useEffect, useState } from "react";
import FilterSlider from "./Slider/FilterSlider";
import CustomValues from "./Custom/CustomValues";
import SortingOptions from "./Sort/SortingOptions";
import filterProduct from "../../../../api/apiCalls/filterProducts";
import "./ConditionalFilterBar.css";
import ProductContext from "../../../../store/product-context";

function ConditionalFilterBar({ open, clickHandler }) {
  const prodCtx = useContext(ProductContext);
  const { filterHandler } = prodCtx;

  const [values, setValues] = useState([0, 10000]);
  const [sliderValues, setSliderValues] = useState(false);
  const [customValues, setCustomValues] = useState(false);

  const sliderHandler = (minValue, maxValue) => {
    setValues([minValue, maxValue]);
    setSliderValues(true);
    setCustomValues(false);
  };

  const customHandler = (minValue, maxValue) => {
    setValues([minValue, maxValue]);
    setSliderValues(false);
    setCustomValues(true);
  };

  useEffect(() => {
    if (sliderValues === false && customValues === false) {
      setValues([0, 10000]);
    }
  }, [sliderValues, customValues]);

  const submitHandler = async (order) => {
    const result = await filterProduct(values[0], values[1], order);
    filterHandler(result);
    setSliderValues(false);
    setCustomValues(false);
    clickHandler()
  };

  const filterBarClass = open
    ? "filter-wrapper slide-down"
    : "filter-wrapper slide-up";

  return (
    <div className={filterBarClass}>
      <div className="slider-wrapper">
        <FilterSlider
          stepValue={50}
          maxValue={1000}
          sliderValues={sliderValues}
          sliderHandler={sliderHandler}
        />
        <CustomValues
          customValues={customValues}
          customHandler={customHandler}
        />
      </div>
      <SortingOptions
        open={open}
        clickHandler={clickHandler}
        submitHandler={submitHandler}
      />
    </div>
  );
}

export default ConditionalFilterBar;
