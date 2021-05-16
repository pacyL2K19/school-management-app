import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, LoginScreen } from "../screens";

const Stack = createStackNavigator();

const StackScreens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackScreens;