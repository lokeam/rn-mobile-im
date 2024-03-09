import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../constants/colors";

const Input = (props) => {
  const { errorText } = props;

  const onChangeText = text => {
    props.onInputChanged(props.id, text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textBox}>{props.label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          style={styles.textBox}
          onChangeText={onChangeText}
        />
      </View>

      {
        errorText ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorText}</Text>
          </View>
        ) : null
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
      width: '100%'
  },
  errorContainer: {
    marginVertical: 5
  },
  errorText: {
    color: '#f15c6d',
    fontSize: 13,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 2,
    backgroundColor: '#2a3942'
  },
  textBox: {
    color: colors.messageTextColor
  }
});

export default Input;