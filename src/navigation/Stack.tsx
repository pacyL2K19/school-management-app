import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, Blank } from "../screens";
import DrawerNavigation from "./Drawer";

const Stack = createStackNavigator();

const StackScreens = () => {
    return (
        <Stack.Navigator
            initialRouteName="Auth"
        >
            <Stack.Screen
                name="Home"
                component={DrawerNavigation}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Auth"
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="attendancies"
                component={Blank}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default StackScreens;
