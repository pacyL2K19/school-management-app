/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { primaryButtonColor, whiteColor } from "../../core";

interface ButtonProps {
  onTap: () => void;
  width: number;
  height: number;
  title: string;
  isNoBg?: boolean;
}

const ButtonWithTitle: React.FC<ButtonProps> = ({
  onTap,
  width,
  height,
  title,
  isNoBg = false,
}) => {
  if (isNoBg) {
    return (
      // eslint-disable-next-line react-native/no-color-literals
      <TouchableOpacity
        style={[styles.btn, { width, height, backgroundColor: "transparent" }]}
        onPress={() => onTap()}
      >
        <Text style={{ fontSize: 16, color: primaryButtonColor }}>{title}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={[styles.btn, { width, height, elevation: 20 }]}
        onPress={() => onTap()}
      >
        <Text style={{ fontSize: 16, color: whiteColor }}>{title}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    display: "flex",
    maxHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: primaryButtonColor,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
  },
});

export { ButtonWithTitle };
