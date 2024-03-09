import React, {useCallback, useReducer} from 'react';
import { StyleSheet } from 'react-native';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { validateInput } from '../utils/formValidation';
import { formReducer } from '../utils/reducers/formReducer';

const initialState = {
  inputValidities: {
    email: false,
    password: false,
  },
  formIsValid: false
};

const SignInForm = () => {
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const inputHandler = useCallback((inputId, inputValue) => {
    const validationResult = validateInput(inputId, inputValue);

    dispatchFormState({
      inputId,
      validationResult
    });
  },[dispatchFormState]);

  return (
    <>
      <Input
        autoCapitalize="none"
        id="email"
        errorText=""
        keyboardType="email-address"
        label="Email"
        onInputChanged={inputHandler}
        style={styles.textLabel}
      />
      <Input
        autoCapitalize="none"
        errorText=""
        id="password"
        label="Password"
        onInputChanged={inputHandler}
        secureTextEntry
        style={styles.textLabel}
      />
      <SubmitButton
        onPress={() => console.log('Submit button pressed')}
        style={{ marginTop: 20 }}
        title="Sign in"
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

export default SignInForm;
