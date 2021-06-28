import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { bgTextInputColor, whiteColor } from "../core";
import { Dimensions } from "react-native";
import ResultSearch from "./Students/ResultSearch";
import { search } from "../ApiClient";
import { MyGlobalContext } from "../context";

const SearchBar: React.FC = () => {
  const [listUser, setListUser] = useState(null);
  const [keyword, setKeyword] = useState("");
  const { accountInfo, setAccountInfo } = useContext(MyGlobalContext);
  const handleChange = async (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setKeyword(e.nativeEvent.text);
    if (keyword === "") {
      setListUser(null);
      setKeyword(" ")
    } else {
      setTimeout(() => {
        search(accountInfo?.teachearId, keyword, accountInfo?.token)
          .then((res) => {
            if (res.success) {
              const newUsers = [];
              res.students.forEach((l) => {
                newUsers.push({
                  id: l.id,
                  name: l.FNamr + " " + l.LName + " " + l.MName,
                });
              });
              setListUser(newUsers);
            } else {
              console.log(res);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1000);
    }
  };
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
