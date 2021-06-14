import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Remark,
  Courses,
  Stats,
  Results
} from "../screens/"

const Stack = createStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Schools">
      <Stack.Screen
        name="remarks"
        component={Remark}
        options={{
          headerShown: false,
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

export default StackScreens;
