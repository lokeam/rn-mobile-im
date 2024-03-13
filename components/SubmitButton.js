import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import colors from '../constants/colors';

const SubmitButton = (props) => {
  const { disabled, title, style: styleProps, onPress } = props;

  return (
    <Pressable
    onPress={disabled ? () => {} : onPress}
      style={[
        styleProps,
        styles.button,
        !disabled && styles.buttonActive
      ]}>
      <Text>{title}</Text>
    </Pressable>
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