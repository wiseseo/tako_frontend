import React, {useState, useEffect} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './src/navigation/AppNavigator';
//import { UserProvider } from './src/store/user';
//const Stack = createStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  async function getFont () {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setIsReady(true);
  }
  useEffect(()=>{
    getFont();
  },[]);

  if(!isReady) return <AppLoading/>;
  return (
      <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
