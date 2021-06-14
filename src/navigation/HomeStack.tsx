import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Remark, Courses, Stats, Results, Home } from "../screens/";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="remarks"
        component={Remark}
        options={{
          headerTitle: "Remarques"
        }}
      />
      <Stack.Screen
        name="courses"
        component={Courses}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="results"
        component={Results}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="stats"
        component={Stats}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
