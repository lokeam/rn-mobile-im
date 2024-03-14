import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { ActivityIndicator, Alert, StyleSheet } from 'react-native';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { validateInput } from '../utils/formValidation';
import { formReducer } from '../utils/reducers/formReducer';
import { signUpValidator } from '../utils/authValidation';
import colors from '../constants/colors';

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const inputHandler = useCallback((inputId, inputValue) => {
    const result = validateInput(inputId, inputValue);

    dispatchFormState({
      inputId,
      validationResult: result,
      inputValue
    });
  },[dispatchFormState]);

  useEffect(() => {
    if (error) {
      Alert.alert(error.message);
    }
  }, [error]);

  const authorizationHandler = async () => {
    try {
      setIsLoading(true);
      await signUpValidator(
        formState.inputValues.firstName,
        formState.inputValues.lastName,
        formState.inputValues.email,
        formState.inputValues.password,
      );
      setError(null);
    } catch(error) {
      setError(error);
      setIsLoading(false);
      console.log('sign up validation error: ', error);
    }
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
      { isLoading ? (
          <ActivityIndicator
            color={colors.messageSendButtonColor}
            size={"small"}
          />
        ) : (
          <SubmitButton
            onPress={authorizationHandler}
            style={{ marginTop: 20 }}
            title="Sign up"
            disabled={!formState.formIsValid}
          />
        )
      }
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
