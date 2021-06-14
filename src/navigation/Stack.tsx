import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, Blank } from "../screens";
import DrawerNavigation from "./Drawer";
import Schools from "../screens/Schools";
import Notifications from "../screens/Notifications";

const Stack = createStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Schools">
      <Stack.Screen
        name="Schools"
        component={Schools}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Auth"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="attendancies"
        component={Blank}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
      />
    </Stack.Navigator>
  );
};

export default StackScreens;
