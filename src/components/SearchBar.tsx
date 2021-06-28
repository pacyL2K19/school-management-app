import React, { useState } from "react";
import { StyleSheet, Image, Text, View, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { bgTextInputColor, whiteColor } from "../core";
import { Dimensions } from "react-native";
import ResultSearch from "./Students/ResultSearch";

const SearchBar: React.FC = () => {
  const [listUser, setListUser] = useState(null);
  const [keyword, setKeyword] = useState("");
  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    setKeyword(e.nativeEvent.text)
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Rechercher rapidement"
        value={keyword}
        onChange={handleChange}
      />
      <ResultSearch listUser={listUser} />
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
