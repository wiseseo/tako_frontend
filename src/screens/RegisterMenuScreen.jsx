import React from 'react';
import { StyleSheet } from 'react-native';
import MenuList from '../components/MenuList/index';
import BottomButton from '../components/Button/BottomButton';
import HeaderRightButton from '../components/Common/HeaderRightButton';
import {Container, Content} from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function RegisterMenuScreen() {
  const navigation = useNavigation();

  navigation.setOptions({
    headerLeft: null,
    headerRight: () => (
      <HeaderRightButton 
      onPress={()=>navigation.navigate('RegisterMenuFormScreen')}
      screenName="RegisterMenuFormScreen"/>
    ),
  });
  const isRegMenu = true;

  const moveMyStore = () => {
    navigation.navigate('SettingNavigator', {screen: 'MyStoreScreen'})
  }

  return (
    <Container>
      <Content>
        <MenuList isRegMenu={isRegMenu}/>
        <BottomButton screenName="MyStoreScreen" onPress={moveMyStore}/>
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