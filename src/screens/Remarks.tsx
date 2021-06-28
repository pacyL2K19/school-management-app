import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

const Remark: React.FC = () => {
  const [details, setDetails] = useState(null);
  return (
    <View style={styles.header}>
      <Text style={{marginVertical: 10}}>Annee Academique</Text>
      <ModalDropdown 
        options={["2020-2021", "2019-2020"]}
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5
        }}
        textStyle={{
          fontSize: 14
        }}
        dropdownStyle={{
          width: 100
        }}
        dropdownTextStyle={{
          fontSize: 12
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 25,
  },
  header: {
    paddingHorizontal: 20,
  },
});

export default Remark;
