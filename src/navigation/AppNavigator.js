import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from '../navigation/AuthNavigator';
import SplashScreen from '../screens/auth/SplashScreen';
import MapScreen from '../screens/MapScreen';
import MapDetailScreen from '../screens/MapDetailScreen';
import RegisterStoreScreen from '../screens/RegisterStoreScreen';
import RegisterMenuScreen from '../screens/RegisterMenuScreen';
import RegisterMenuDetailScreen from '../screens/RegisterMenuDetailScreen';
import SettingScreen from '../screens/SettingScreen';
import MyStoreScreen from '../screens/MyStoreScreen';
import MyFavoriteStoreScreen from '../screens/MyFavoriteStoreScreen';
import ModifySettingScreen from '../screens/ModifySettingScreen';
import ModifyStoreScreen from '../screens/ModifyStoreScreen';
import ModifyMenuScreen from '../screens/ModifyMenuScreen';
import ModifyMenuDetailScreen from '../screens/ModifyMenuDetailScreen';


const Stack = createStackNavigator();


function RegisterNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RegisterStoreScreen"
        component={RegisterStoreScreen}
      />
      <Stack.Screen
        name="RegisterMenuScreen"
        component={RegisterMenuScreen}
      />
      <Stack.Screen
        name="RegisterMenuDetailScreen"
        component={RegisterMenuDetailScreen}
      />
    </Stack.Navigator>
  );
}

function SettingNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
      />
      <Stack.Screen
        name="MyStoreScreen"
        component={MyStoreScreen}
      />
      <Stack.Screen
        name="MyFavoriteStoreScreen"
        component={MyFavoriteStoreScreen}
      />
      <Stack.Screen
        name="ModifySettingScreen"
        component={ModifySettingScreen}
      />
      <Stack.Screen
        name="ModifyStoreScreen"
        component={ModifyStoreScreen}
      />
      <Stack.Screen
        name="ModifyMenuScreen"
        component={ModifyMenuScreen}
      />
      <Stack.Screen
        name="ModifyMenuDetailScreen"
        component={ModifyMenuDetailScreen}
      />
      <Stack.Screen name="RegisterNavigator" component={RegisterNavigator}/>
    </Stack.Navigator>
  );
}


function MapNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
      />
      <Stack.Screen
        name="MapDetailScreen"
        component={MapDetailScreen}
      />
      <Stack.Screen name="SettingNavigator" component={SettingNavigator}/>
    </Stack.Navigator>
  );
}


export default function AppNavigator() {
  //const [userToken, setUserToken] = useState(1);
  const userToken = null;
  return (
      <NavigationContainer>
        {userToken == null ? (
          <AuthNavigator/>
        ) : (
          <MapNavigator/>
        )}
      </NavigationContainer>
  );
}
