import React, { useCallback, useReducer } from 'react';
import { StyleSheet } from 'react-native';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { validateInput } from '../utils/formValidation';
import { formReducer } from '../utils/reducers/formReducer';
import { signUpValidator } from '../utils/authValidation';

const initialState = {
  inputValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  inputValidities: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },
  formIsValid: false
};

const SignUpForm = (props) => {

  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const inputHandler = useCallback((inputId, inputValue) => {
    const result = validateInput(inputId, inputValue);

    dispatchFormState({
      inputId,
      validationResult: result,
      inputValue
    });
  },[dispatchFormState]);

  const authorizationHandler = () => {
    signUpValidator(
      formState.inputValues.firstName,
      formState.inputValues.lastName,
      formState.inputValues.email,
      formState.inputValues.password,
    )
  }

  return (
    <>
      <Input
        id="firstName"
        errorText={formState.inputValidities["firstName"]}
        label="First name"
        onInputChanged={inputHandler}
        style={styles.textLabel}
      />
      <Input
        id="lastName"
        errorText={formState.inputValidities["lastName"]}
        label="Last name"
        onInputChanged={inputHandler}
        style={styles.textLabel}
      />
      <Input
        autoCapitalize="none"
        id="email"
        errorText={formState.inputValidities["email"]}
        inputMode="email"
        label="Email"
        onInputChanged={inputHandler}
        style={styles.textLabel}
      />
      <Input
        autoCapitalize="none"
        errorText={formState.inputValidities["password"]}
        id="password"
        label="Password"
        onInputChanged={inputHandler}
        secureTextEntry
        style={styles.textLabel}
      />
      <SubmitButton
        onPress={authorizationHandler}
        style={{ marginTop: 20 }}
        title="Sign up"
        disabled={!formState.formIsValid}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a3942'
  },
  textLabel: {
    placeholder: "white",
  }
});

export default SignUpForm;
