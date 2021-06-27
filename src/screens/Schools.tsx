import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import SchoolCard from "../components/SchoolCard";
import { School } from "../types";
import { primaryButtonColor } from "../core/theme/colors";
import { NavigationScreenProp } from "react-navigation";
import { MyGlobalContext } from "../context";
import { getSchools } from "../ApiClient";

interface SchoolsProps {
  navigation: NavigationScreenProp<any, any>;
}

const Schools: React.FC<SchoolsProps> = ({ navigation }) => {
  const [listSchools, setListSchools] = useState<any[] | []>([]);
  const handlePress = (id: String) => {
    navigation.navigate("Auth", { idSchool: id });
  };
  const { accountInfo, setAccountInfo } = useContext(MyGlobalContext);
  useEffect(() => {
    getSchools()
      .then((res) => {
        if (res.success) {
          console.log(res);
          setListSchools(res.schools);
        } else {
          console.log(res);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    const list: School[] = [
      {
        id: "1",
        label: "ITIG",
        slogan: "Duc In altum",
        onPress: (id: string) => {},
      },
      {
        id: "2",
        label: "Metanoia",
        slogan: "Duc In altum",
        onPress: (id: string) => {},
      },
      {
        id: "3",
        label: "Lycee X",
        slogan: "Duc In altum",
        onPress: (id: string) => {},
      },
      {
        id: "4",
        label: "Lycee Y",
        slogan: "Duc In altum",
        onPress: (id: string) => {},
      },
    ];
  }, []);
  return (
    <View style={styles.header}>
      <Text style={styles.mainText}>Bienvenue</Text>
      <Text style={styles.secondaryText}>Selectionner votre ecole</Text>
      <FlatList
        data={listSchools}
        keyExtractor={(item) => {
          return item.id;
        }}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <SchoolCard
              source={item.LogoUrl}
              label={item.Name}
              slogan={item.slogan}
              id={item.id}
              onPress={handlePress}
            />
          );
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
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  mainText: {
    fontSize: 25,
  },
  secondaryText: {
    fontSize: 18,
  },
});

export default Schools;
