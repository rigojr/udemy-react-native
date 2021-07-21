import React from "react";
import { TextInput, StyleSheet, StyleProp, ViewStyle, TextInputComponent, TextInputProps } from "react-native";

interface IInputProps extends TextInputProps {
  customStyle?: StyleProp<ViewStyle>;
}

const Input: React.FC<IInputProps> = ({customStyle = {}, ...props}) => {
  return <TextInput {...props} style={[styles.input, customStyle]} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
