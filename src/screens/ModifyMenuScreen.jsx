import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MenuList from '../components/MenuList';
import MenuButton from '../components/Button/BottomButton/MenuButton';

export default function ModifyMenuScreen({navigation}) {
  const isStoreScreen = false;
  const isRegister = false;
  return (
    <View>
      <Text>ModifyMenuScreen</Text>
      <MenuList navigation={navigation} isStoreScreen={isStoreScreen}/>
      <MenuButton isRegister={isRegister} navigation={navigation}/>
    </View>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/