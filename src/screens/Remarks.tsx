import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { getRemarkStore } from "../ApiClient";
import { MyGlobalContext } from "../context";
import { Picker } from "@react-native-picker/picker";

const Remark: React.FC = () => {
  const [details, setDetails] = useState(null);
  const [remarks, setRemarks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState(null);
  const { accountInfo, setAccountInfo } = useContext(MyGlobalContext);
  const [selectedRem, setSelectedRem] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    // const fetchData = async () => {
    //   const remarks = await getRemarkStore(
    //     accountInfo?.teachearId,
    //     accountInfo?.token
    //   );
    //   setRemarks(remarks);
    // };

    // fetchData();
    // setIsLoading(false);
    getRemarkStore(accountInfo?.teachearId, accountInfo?.token)
      .then((res) => {
        // console.log(res);

        if (res.success) {
          setRemarks(res.remarks);
        }
        console.log(res.remarks);
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false)
      });
  }, []);
  return (
    <View style={styles.header}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Loading ...</Text>
        </View>
      ) : (
        <View>
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
          {/* {
            remarks?.map(r => {
              console.log(r);
            })
          } */}
          <Picker
            style={{ height: 20 }}
            selectedValue={selectedRem}
            onValueChange={(itemValue, itemIndex) => setSelectedRem(itemValue)}
          >
            {remarks.map((rem) => {
              <Picker.Item key={rem.id} label={rem.Category} value={rem.id} />;
            })}
          </Picker>
        </View>
      )}
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
