import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../constants/colors';

const SubmitButton = (props) => {
  const { title, style: styleProps } = props;
  // hardcode form validation for testing
  const formValidated = true;

  return (
    <TouchableOpacity
      style={[
        styleProps,
        styles.button,
        formValidated && styles.buttonActive
      ]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.borderUIColor,
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: colors.messageSendButtonColor,
  },

});

export default SubmitButton;