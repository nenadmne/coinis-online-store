import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./FilterSlider.css";

function valuetext(value) {
  return value;
}

export default function FilterSlider({
  sliderHandler,
  stepValue,
  maxValue,
  sliderValues,
}) {
  const [value, setValue] = useState([0, maxValue]);
  const [valueIsChanged, setValueIsChanged] = useState(false);
  const handleChange = (event, newValue) => {
    setValueIsChanged(!valueIsChanged);
    setValue(newValue);
  };
  const text = `Filter by Price Range `;

  useEffect(() => {
    sliderHandler(value[0], value[1]);
  }, [valueIsChanged]);

  useEffect(() => {
    if (sliderValues === false) {
      setValue([0, maxValue]);
    }
  }, [sliderValues]);

  return (
    <div className="filter-by-value">
      <p>
        {text}
        <strong>
          $({value[0]} - {value[1]})
        </strong>
      </p>
      <Box className="slider-box" sx={{ padding: "0" }}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          max={maxValue}
          step={stepValue}
          className="price-range-slider"
        />
      </Box>
    </div>
  );
}
