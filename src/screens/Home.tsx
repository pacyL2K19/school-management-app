import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
} from "react-native";
import { Avatar } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import {
  CardOptions,
  HeaderHome,
  SearchBar,
  QuickActionHome,
} from "../components/";
import avatar from "../assets/teacher.png";
import attendances from "../assets/attendance.png";
import { bgTextInputColor, blackTextColor, whiteColor } from "../core";
import data from "../utils/options.json";
import { NavigationScreenProp } from "react-navigation";
import { HomeOption } from "../types";

interface Props {
  options: [HomeOption];
  navigation: NavigationScreenProp<any, any>;
}

const WIDTH_DEVICE = Dimensions.get("window").width;

const Home: React.FC<Props> = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const handleNavigate = (screen: string): void => {
    props.navigation.navigate(screen);
  };

  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={{ marginBottom: 50 }}>
          <View style={styles.header}>
            <View style={styles.headerSubContainer}>
              <TouchableOpacity style={styles.humburger}>
                <Icon name="menu" size={30} color="#000" />
              </TouchableOpacity>
              <View style={styles.rightHeader}>
                <TouchableOpacity style={{ marginRight: 20 }}>
                  <Text style={styles.badge}>10</Text>
                  <MaterialIcon
                    name="notifications-none"
                    color={bgTextInputColor}
                    size={30}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Avatar.Image size={40} source={avatar} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <HeaderHome
            school={{ id: "1", label: "ITIG Don Bosco", slogan: "Duc In Altum", onPress: () => {} }}
          />
          <View style={styles.searchBox}>
            <SearchBar />
          </View>
        </View>
        <FlatList
          data={data.options}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardOptions
              icon={item.iconName}
              routeName={item.routeName}
              label={item.label}
              onPress={() => handleNavigate(item.routeName)}
            />
          )}
        />
      </ScrollView>
      <TouchableOpacity
        style={styles.btnBottom}
        onPress={() => setShowModal(true)}
      >
        <MaterialIcon name="keyboard-arrow-up" size={30} />
        <Text style={styles.cta}>Action Rapide</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.btnOnTopModal}
            onPress={() => setShowModal(false)}
          >
            <MaterialIcon name="keyboard-arrow-down" size={30} />
            <Text style={styles.cta}>Fermer</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <QuickActionHome />
          <QuickActionHome />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 10,
  },
  headerSubContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  rightHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  humburger: {
    padding: 5,
    backgroundColor: bgTextInputColor,
    borderRadius: 20,
  },
  badge: {
    position: "absolute",
    right: 0,
    top: 0,
    fontSize: 10,
    backgroundColor: "red",
    padding: 2,
    borderRadius: 10,
    color: whiteColor,
    zIndex: 1,
  },
  searchBox: {
    position: "absolute",
    bottom: -25,
    zIndex: 100,
  },
  btnBottom: {
    width: WIDTH_DEVICE - 150,
    left: 75,
    height: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 10,
    position: "absolute",
    bottom: 0,
    backgroundColor: bgTextInputColor,
    opacity: 0.9,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  cta: {
    fontWeight: "bold",
  },
  modalView: {
    position: "absolute",
    bottom: 55,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 300,
    width: WIDTH_DEVICE,
    backgroundColor: bgTextInputColor,
    elevation: 2,
  },
  btnOnTopModal: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    alignSelf: "center",
    height: 0.5,
    backgroundColor: blackTextColor,
    width: "30%",
  },
});

export default Home;
