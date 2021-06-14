import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Home, Blank } from "../screens/";
import { primaryButtonColor, blackTextColor } from "../core";

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={primaryButtonColor}
      inactiveColor={blackTextColor}
      barStyle={{
        backgroundColor: "#ffffff",
        shadowOffset: { width: 0, height: 3 },
        shadowColor: "#000",
        shadowOpacity: 0.5,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Accueil") {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === "Cours") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Historic") {
            iconName = focused ? "time" : "time-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "ios-cart" : "ios-cart-outline";
          } else if (route.name === "Parametres") {
            iconName = focused ? "settings" : "settings-outline";
          } else {
            iconName = "";
          }
          return <Ionicons name={iconName} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Accueil" component={Home} />
      <Tab.Screen name="Cours" component={Blank} />
      <Tab.Screen name="Parametres" component={Blank} />
    </Tab.Navigator>
  );
};

export default Tabs;
