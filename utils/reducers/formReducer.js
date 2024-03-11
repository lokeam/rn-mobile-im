export const formReducer = (state, action) => {
  const {validationResult, inputId, inputValue} = action;

  const updatedValues = {
    ...state.inputValues,
    [inputId]: inputValue
  };

  const updatedValidities = {
    ...state.inputValidities,
    [inputId]: validationResult
  };

  let updatedFormIsValid = true;

  for (let key in updatedValidities) {
    if (updatedValidities[key] !== undefined) {
      updatedFormIsValid = false;
      break;
    }
  }

  return {
    inputValidities: updatedValidities,
    inputValues: updatedValues,
    formIsValid: updatedFormIsValid,
  };
};