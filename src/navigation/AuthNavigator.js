import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';


const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        />
        <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        />
    </Stack.Navigator>
  );
}