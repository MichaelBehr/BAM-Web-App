export default function formValid(formErrors) {
  // if any value for the form error fields is > 0, set valid to false;
  for (var key in Object(formErrors)) {
    if (formErrors[key].length > 0) {
      return false;
    }
  }

  return true;
}
