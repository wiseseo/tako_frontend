import React from 'react';
import { StyleSheet } from 'react-native';
import {container, Content, Container} from 'native-base';
import MenuList from '../components/MenuList/index';
import MenuButton from '../components/Button/BottomButton/MenuButton';

export default function ModifyMenuScreen({navigation}) {
  const isRegister = false;
  const isRegMenu = false;
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