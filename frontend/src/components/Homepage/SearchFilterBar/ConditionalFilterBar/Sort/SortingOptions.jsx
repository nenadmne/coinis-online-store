import { useState } from "react";
import SouthIcon from "@mui/icons-material/South";
import Button from "../../../../../UI/Button";
import "./SortingOptions.css";

const SortingOptions = ({ submitHandler, clickHandler, open }) => {
  const options = ["Sort by name", "Sort by price", "Sort by rating"];
  const [selectedOption, setSelectedOption] = useState("price");

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
    if (index === 0) {
      setSelectedOption("title");
    } else if (index === 1) {
      setSelectedOption("price");
    } else if (index === 2) {
      setSelectedOption("rating");
    }
    setClickedStates(newClickStates);
  };

  const cancelHandler = () => {
    clickHandler();
  };

  return (
    <div className="sort-wrapper">
      <div className="radio-wrapper">
        {open &&
          options.map((item, index) => (
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
        <Button
          className="btn btn-block btn-outline-danger"
          name="cancel"
          function={cancelHandler}
        />
        <Button
          className="btn btn-block btn-outline-success"
          name="submit"
          function={() => submitHandler(selectedOption)}
        />
      </div>
    </div>
  );
};

export default SortingOptions;
