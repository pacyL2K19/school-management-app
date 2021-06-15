import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackScreens from "./Stack";

const Main = () => {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
};

export default Main;
