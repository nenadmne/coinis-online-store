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

  return (
    <div className="filter-by-value">
      <p>
        Filter by Price Range
        <strong>
          ({value[0]} - {maxValue})
        </strong>
      </p>
      <Box sx={{ width: 300 }}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          max={maxValue}
          step={stepValue}
        />
      </Box>
    </div>
  );
}
