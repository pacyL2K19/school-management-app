import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { getRemarkStore } from "../ApiClient";
import { MyGlobalContext } from "../context";

const Remark: React.FC = () => {
  const [details, setDetails] = useState(null);
  const [remarks, setRemarks] = useState([]);
  const [comment, setComment] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState(null);
  const { accountInfo, setAccountInfo } = useContext(MyGlobalContext);

  useEffect(() => {
    getRemarkStore(accountInfo?.teachearId, accountInfo?.token)
      .then((res) => {
        if (res.success) {
          const optionsRmk = [];
          res.remarks.forEach((rmk) => {
            optionsRmk.push(rmk.Category);
          });
          setRemarks(optionsRmk);
        }
      })
      .catch();
  }, []);
  return (
    <View style={styles.header}>
      <Text style={{ marginVertical: 10 }}>Annee Academique</Text>
      <ModalDropdown
        options={["2020-2021", "2019-2020"]}
        defaultValue="2020-2021"
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
        }}
        textStyle={{
          fontSize: 14,
        }}
        dropdownStyle={{
          width: 100,
        }}
        dropdownTextStyle={{
          fontSize: 12,
        }}
      />
      <Text style={{ marginVertical: 10 }}>Type de faute</Text>
      <ModalDropdown
        options={remarks}
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
        }}
        defaultValue="Veuillez selectionner la faute"
        textStyle={{
          fontSize: 14,
        }}
        dropdownStyle={{
          width: 100,
        }}
        dropdownTextStyle={{
          fontSize: 12,
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
