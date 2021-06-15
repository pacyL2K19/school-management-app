/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { bgTextInputColor, blackTextColor } from "../core/theme/colors";

interface TextFieldProps {
  placeholder: string;
  isSecure?: boolean;
  onTextChange: (text: string) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  isSecure = false,
  onTextChange,
}) => {
  const [isPassword, setIsPassword] = useState(false);

  useEffect(() => {
    setIsPassword(isSecure);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        autoCapitalize="none"
        secureTextEntry={isPassword}
        onChangeText={(text) => onTextChange(text)}
        style={styles.textField}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    borderRadius: 10,
    backgroundColor: bgTextInputColor,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 20,
    paddingRight: 10,
  },
  textField: {
    flex: 1,
    height: 50,
    fontSize: 14,
    color: blackTextColor,
  },
});
