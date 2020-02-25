import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from '../navigation/AuthNavigator';
//import SplashScreen from '../screens/auth/SplashScreen';
import MapScreen from '../screens/MapScreen';
import RegisterStoreScreen from '../screens/RegisterStoreScreen';
import RegisterMenuScreen from '../screens/RegisterMenuScreen';
import RegisterMenuFormScreen from '../screens/RegisterMenuFormScreen';
import SettingScreen from '../screens/SettingScreen';
import MyStoreScreen from '../screens/MyStoreScreen';
import MyFavoriteStoreScreen from '../screens/MyFavoriteStoreScreen';
import ModifySettingScreen from '../screens/ModifySettingScreen';
import ModifyStoreScreen from '../screens/ModifyStoreScreen';
import ModifyMenuScreen from '../screens/ModifyMenuScreen';
import ModifyMenuFormScreen from '../screens/ModifyMenuFormScreen';
import StoreInfoScreen from '../screens/StoreInfoScreen';


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
        name="RegisterMenuFormScreen"
        component={RegisterMenuFormScreen}
      />
    </Stack.Navigator>
  );
}

function SettingNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}/>
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
        name="ModifyMenuFormScreen"
        component={ModifyMenuFormScreen}
      />
      <Stack.Screen name="RegisterNavigator" component={RegisterNavigator} options={{ headerShown: false }}/>
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
      <Stack.Screen name="SettingNavigator" component={SettingNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}


export default function AppNavigator() {
  //const [userToken, setUserToken] = useState(1);
  const userToken = 1;
  return (
      <NavigationContainer>
        {userToken == null ? (
          <AuthNavigator/>
        ) : (
          <Stack.Navigator mode="modal" headerMode="float">
            <Stack.Screen name="MapNavigator" component={MapNavigator} options={{ headerShown: false }}/>
            <Stack.Screen name="StoreInfoScreen" component={StoreInfoScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
  );
}
