import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ term, onChangeText, keyType, mask }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={(newTerm) => onChangeText(newTerm)}
      value={term}
      keyboardType={keyType}
      placeholder={mask}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "80%",
    marginTop: 12,
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    maxWidth: 400,
  },
});

export default Input;
