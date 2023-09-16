import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/tedux/store'
import Teast from './app/screens/teast';
import NavBar from './app/components/global/NavBar';
import Home from './app/screens/Home';
import MyStack from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, }}   >
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

