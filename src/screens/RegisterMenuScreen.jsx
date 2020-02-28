import React from 'react';
import { StyleSheet, View, Button} from 'react-native';
import MenuList from '../components/MenuList/index';
import MenuButton from '../components/Button/BottomButton/MenuButton';
import {Container, Content} from 'native-base';


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
    <Container>
      <Content>
        <MenuList isRegMenu={isRegMenu}/>
        <MenuButton isRegister={isRegister} navigation={navigation}/>
      </Content>
    </Container>
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