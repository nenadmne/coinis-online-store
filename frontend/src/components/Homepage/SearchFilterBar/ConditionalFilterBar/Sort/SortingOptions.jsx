import "./SortingOptions.css";
import SouthIcon from "@mui/icons-material/South";
import Button from "../../../../../UI/Button";
import { useState } from "react";

const SortingOptions = () => {
  const options = ["Sort by name", "Sort by price", "Sort by rating"];

  const [rotateStates, setRotateStates] = useState(() =>
    Array(options.length).fill(false)
  );
  const [clickedStates, setClickedStates] = useState(() =>
    Array(options.length).fill(false)
  );

  const rotateHandler = (index) => {
    const newRotateStates = [...rotateStates];
    newRotateStates[index] = !newRotateStates[index];
    setRotateStates(newRotateStates);
  };

  const inputHandler = (index) => {
    const newClickStates = Array(options.length).fill(false);
    newClickStates[index] = true;
    setClickedStates(newClickStates);
  };

  return (
    <div className="sort-wrapper">
      <div className="radio-wrapper">
        {options.map((item, index) => (
          <label key={item}>
            <input
              onClick={() => inputHandler(index)}
              type="radio"
              name="sortOption"
            />
            {item}
            <div
              className={`icon-wrapper ${
                rotateStates[index] ? "rotate" : "rotate-back"
              }`}
            >
              <SouthIcon
                onClick={() => rotateHandler(index)}
                className={clickedStates[index] ? "bump" : ""}
              />
            </div>
          </label>
        ))}
      </div>
      <div className="button-div">
        <Button className="btn btn-block btn-outline-danger" name="cancel" />
        <Button
          className="btn btn-block btn-outline-success"
          name="submit"
          type="submit"
        />
      </div>
    </div>
  );
};

export default SortingOptions;
