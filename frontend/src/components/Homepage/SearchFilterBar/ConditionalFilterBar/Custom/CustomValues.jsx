import { useEffect, useState } from "react";
import Input from "../../../../../UI/input";
import "./CustomValues.css";

function CustomValues({ customHandler, customValues }) {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [valueIsChanged, setValueIsChanged] = useState(false);

  const changeMaxValueHandler = (event) => {
    setMaxValue(event.target.value);
    setValueIsChanged(!valueIsChanged);
  };

  const changeMinValueHandler = (event) => {
    setMinValue(event.target.value);
    setValueIsChanged(!valueIsChanged);
  };

  useEffect(() => {
    customHandler(+minValue, +maxValue);
  }, [valueIsChanged]);

  useEffect(() => {
    if (customValues === false) {
      setMinValue("");
      setMaxValue("");
    }
  }, [customValues]);

  return (
    <div className="custom-values">
      <p> Enter custom values </p>
      <Input
        input={{
          type: "number",
          placeholder: "$",
          value: minValue,
          onChange: changeMinValueHandler,
        }}
      />
      <Input
        input={{
          type: "number",
          placeholder: "$",
          value: maxValue,
          onChange: changeMaxValueHandler,
        }}
      />
    </div>
  );
}

export default CustomValues;
