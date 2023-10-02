import { useState } from "react";

const useInput = (validateValue) => {
  const [isTouched, setIsTouched] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const isValid = validateValue(enteredValue);
  const hasError = !isValid && isTouched;

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const resetHandler = () => {
    setIsTouched(false);
    setEnteredValue("");
  };

  return {
    enteredValue,
    isValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    resetHandler,
  };
};

export default useInput;
