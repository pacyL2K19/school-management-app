import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/screens/Login';
import { store } from './src/redux'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
