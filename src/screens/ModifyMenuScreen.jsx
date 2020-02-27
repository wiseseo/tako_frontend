import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MenuList from '../components/MenuList';

export default function ModifyMenuScreen({navigation}) {
  const isStoreScreen = false;
  return (
    <View>
      <Text>ModifyMenuScreen</Text>
      <MenuList navigation={navigation} isStoreScreen={isStoreScreen}/>
      <Button
        title="내메뉴 수정완료"
        onPress={() => navigation.pop(1)}
      />
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