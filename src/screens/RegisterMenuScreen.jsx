import React from 'react';
import { StyleSheet, View, Button} from 'react-native';
import MenuList from '../components/MenuList/index';
import RegisterButton from '../components/Button/BottomButton/RegisterButton';
import HeaderButton from '../components/Common/HeaderButton';
import {Container, Content} from 'native-base';

export default function RegisterMenuScreen({navigation}) {
  navigation.setOptions({
    headerLeft: null,
    headerRight: () => (
      <HeaderButton screenName="RegisterMenuFormScreen"/>
    ),
  });
  const isRegMenu = true;
  const isRegister = true;
  return (
    <Container>
      <Content>
        <MenuList isRegMenu={isRegMenu}/>
        <RegisterButton screenName="MyStoreScreen" navigator="SettingNavigator"/>
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