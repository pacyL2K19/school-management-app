import React from "react";
import { StyleSheet, Image, Text, View, TextInput } from "react-native";
import { bgTextInputColor, whiteColor } from "../core";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Dimensions } from "react-native";

const SearchBar: React.FC = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Rechercher rapidement" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: whiteColor,
  },
  icon: {
    position: "absolute",
    zIndex: 101,
    width: 25,
    height: 25,
    left: 35,
    top: 12,
  },
  input: {
    width: Dimensions.get("window").width - 80,
    left: 20,
    backgroundColor: bgTextInputColor,
    height: 50,
    borderRadius: 10,
    elevation: 5,
    paddingHorizontal: 20,
  },
});

export default SearchBar;
