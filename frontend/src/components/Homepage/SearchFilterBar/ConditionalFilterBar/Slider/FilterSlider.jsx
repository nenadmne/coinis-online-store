import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./FilterSlider.css";

function valuetext(value) {
  return value;
}

export default function FilterSlider({ stepValue, maxValue }) {
  const [value, setValue] = React.useState([0, maxValue]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const text = `Filter by Price Range `;

  return (
    <div className="filter-by-value">
      <p>
        {text}
        <strong>
          $({value[0]} - {value[1]})
        </strong>
      </p>
      <Box sx={{ width: 300, padding: "0" }}>
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
