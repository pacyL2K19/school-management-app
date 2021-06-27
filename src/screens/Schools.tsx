import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import SchoolCard from "../components/SchoolCard";
import { primaryButtonColor } from "../core/theme/colors";
import { NavigationScreenProp } from "react-navigation";
import { MyGlobalContext } from "../context";
import { getSchools, isUserConnected } from "../ApiClient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SchoolsSkeleton from "../UISkeletons/Schools";

interface SchoolsProps {
  navigation: NavigationScreenProp<any, any>;
}

const Schools: React.FC<SchoolsProps> = ({ navigation }) => {
  const [listSchools, setListSchools] = useState<any[] | []>([]),
    [loading, setLoading] = useState(false),
    { setAccountInfo } = useContext(MyGlobalContext);
  const handlePress = (id: string) => {
    setAccountInfo({
      teachearId: "",
      schoolId: id,
    });
    navigation.navigate("Auth", { idSchool: id });
  };
  useEffect(() => {
    setLoading(true);
    AsyncStorage.getItem("currentUser")
      .then((user) => {
        if (user && isUserConnected(user)) {
          setAccountInfo({
            schoolId: user?.schoolId,
            teachearId: user?.id,
          });
          setLoading(false);
          navigation.navigate("Home");
        } else {
          getSchools()
            .then((res) => {
              if (res.success) {
                console.log(res);
                setListSchools(res.schools);
                setLoading(false);
              } else {
                console.log(res);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.header}>
      <Text style={styles.mainText}>Bienvenue</Text>
      <Text style={styles.secondaryText}>Selectionner votre ecole</Text>
      {loading ? (
        <SchoolsSkeleton />
      ) : (
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
      )}
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
