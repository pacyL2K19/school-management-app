import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import ModalDropdown from "react-native-modal-dropdown";

const Remark: React.FC = () => {
  return (
    <View style={styles.header}>
      <ModalDropdown options={['option 1', 'option 2']}/>
      {/* <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "Football", value: "football" },
          { label: "Baseball", value: "baseball" },
          { label: "Hockey", value: "hockey" },
        ]}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 25,
  },
  header: {
    paddingTop: 200,
    paddingHorizontal: 20,
  },
});

export default Remark;
