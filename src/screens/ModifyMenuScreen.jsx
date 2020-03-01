import React from 'react';
import { StyleSheet } from 'react-native';
import {container, Content, Container} from 'native-base';
import MenuList from '../components/MenuList/index';
//import MenuButton from '../components/Button/BottomButton/MenuButton';
import ModifyButton from '../components/Button/BottomButton/ModifyButton';
import BackButton from '../components/Common/BackButton';

export default function ModifyMenuScreen({navigation}) {
  const isRegister = false;
  const isRegMenu = false;
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    )
  });
  return (
    <Container>
      <Content>
        <MenuList isRegMenu={isRegMenu}/>
        <ModifyButton screenName="ModifyMenuScreen"/>
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