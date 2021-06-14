import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/navigation/";
import { store } from "./src/redux";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}

