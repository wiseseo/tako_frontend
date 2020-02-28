import React from 'react';
import { StyleSheet, View, Button} from 'react-native';
import MenuList from '../components/MenuList';
import MenuButton from '../components/Button/BottomButton/MenuButton';
import { Text } from 'native-base';


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
  const isRegister = true;
  return (
    <View>
      <Text>RegisterMenuScreen</Text>
      <MenuList isRegMenu={isRegMenu}/>
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