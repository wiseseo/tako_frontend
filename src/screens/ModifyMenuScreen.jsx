import React from 'react';
import { StyleSheet } from 'react-native';
import {Container, Content} from 'native-base';
import MenuList from '../components/MenuList/index';
import BottomButton from '../components/Button/BottomButton';
import BackButton from '../components/Common/BackButton';
import { useNavigation } from '@react-navigation/native';

export default function ModifyMenuScreen() {
  const navigation = useNavigation();
  const isRegMenu = false;
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    )
  });
  const goBack = () => {
    navigation.pop(1);
  }
  return (
    <Container>
      <Content>
        <MenuList isRegMenu={isRegMenu}/>
        <BottomButton screenName="ModifyMenuScreen" onPress={goBack}/>
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