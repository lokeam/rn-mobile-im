import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../constants/colors';

const SubmitButton = (props) => {
  const { disabled, title, style: styleProps } = props;

  return (
    <TouchableOpacity
      style={[
        styleProps,
        styles.button,
        !disabled && styles.buttonActive
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