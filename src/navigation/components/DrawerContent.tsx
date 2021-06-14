/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

import { DrawerContentScrollView } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Drawer } from "react-native-paper";
import { Avatar } from "react-native-paper";

import avatar from "../../assets/teacher.png";
import { NavigationScreenProp } from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

const DrawerContent = (props: Props) => {
  const [user, setUser] = useState({});
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>
          <View>
            <View
              style={{
                alignItems: "center",
                marginBottom: 20,
                marginTop: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                ITIG Don Bosco
              </Text>
              <Avatar.Image
                style={{ marginTop: 20 }}
                source={avatar}
                size={80}
              />
              <Text style={{ fontSize: 20, marginTop: 15 }}>User</Text>
              <Text>wrong@email.com</Text>
              <Text>+243 999 999 999</Text>
            </View>
            <Drawer.Section>
              <Drawer.Item
                label="Accueil"
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
                icon={({ color, size }) => (
                  <Icon name="home-outline" color={color} size={size} />
                )}
              />
              <Drawer.Item
                label="Mes cours"
                onPress={() => {
                  props.navigation.navigate("Blank");
                }}
                icon={({ color, size }) => (
                  <Icon name="book-outline" color={color} size={size} />
                )}
              />
              <Drawer.Item
                label="Ma Classe"
                onPress={() => {
                  props.navigation.navigate("Favorites");
                }}
                icon={({ color, size }) => (
                  <Icon name="school-outline" color={color} size={size} />
                )}
              />
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawer}>
        <Drawer.Item
          label="Deconnexion"
          onPress={() => {
            Alert.alert("DECONNEXION", "Voulez-vous vous deconnecter ?", [
              {
                text: "Accepter",
                onPress: () => {
                  props.navigation.navigate("Login");
                },
              },
              {
                text: "Refuser",
              },
            ]);
          }}
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomDrawer: {
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});

export default DrawerContent;
