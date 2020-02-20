import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';
import MapDetailScreen from '../screens/MapDetailScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>  
    <Stack.Navigator>
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
      />
      <Stack.Screen
        name="MapDetailScreen"
        component={MapDetailScreen}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

