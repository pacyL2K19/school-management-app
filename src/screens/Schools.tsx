import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import SchoolCard from "../components/SchoolCard";
import { School } from "../types";
import { primaryButtonColor } from "../core/theme/colors";
import { NavigationScreenProp } from "react-navigation";

interface SchoolsProps {
  navigation: NavigationScreenProp<any, any>;
}

const Schools: React.FC<SchoolsProps> = ({ navigation }) => {
  const [listSchools, setListSchools] = useState<School[] | []>([]);
  const handlePress = (id: String) => {
    navigation.navigate("Login", { idSchool: id });
  };
  useEffect(() => {
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
    setListSchools(list);
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
              label={item.label}
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
