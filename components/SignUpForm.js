import React from 'react';
import { StyleSheet } from 'react-native';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';

const SignUpForm = () => {
  return (
    <>
      <Input
        styles={styles.textLabel}
        label="First name"
        errorText=""
      />
      <Input
        styles={styles.textLabel}
        label="Last name"
        errorText=""
      />
      <Input
        styles={styles.textLabel}
        label="Email"
        errorText=""
      />
      <Input
        styles={styles.textLabel}
        label="Password"
        errorText=""
      />
      <SubmitButton
        onPress={() => console.log('Submit button pressed')}
        style={{ marginTop: 20 }}
        title="Sign up"
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
