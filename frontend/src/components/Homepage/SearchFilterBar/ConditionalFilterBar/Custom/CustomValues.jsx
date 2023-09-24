import Input from "../../../../../UI/input";
import "./CustomValues.css";

function CustomValues() {
  return (
    <div className="custom-values">
      <p> Enter custom values </p>
      <Input input={{ type: "number", placeholder: "$" }} />
      <Input input={{ type: "number", placeholder: "$" }} />
    </div>
  );
}

export default CustomValues;
