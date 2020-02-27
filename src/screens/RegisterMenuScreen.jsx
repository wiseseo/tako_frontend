import React from 'react';
import { StyleSheet, View, Button} from 'react-native';
import MenuList from '../components/MenuList';
import { Text } from 'native-base';
//import { StackActions } from '@react-navigation/native';

export default function RegisterMenuScreen({navigation}) {
  navigation.setOptions({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('RegisterMenuFormScreen')}
        title="메뉴 등록"
      />
    ),
  });
  const isRegMenu = true;
  return (
    <View>
      <Text>RegisterMenuScreen</Text>
      <MenuList isRegMenu={isRegMenu}/>
      <Button
        title="메뉴 등록 완전 완료"
        onPress={() => navigation.navigate('SettingNavigator', {screen:'MyStoreScreen'})}
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