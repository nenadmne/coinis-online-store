export default function getInputClasses(isValid, hasError) {
  if (hasError) {
    return "form-control is-invalid";
  } else if (isValid) {
    return "form-control is-valid";
  } else {
    return "";
  }
}
