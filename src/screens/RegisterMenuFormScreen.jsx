import React from 'react';
import { StyleSheet } from 'react-native';
import {Container, Content } from 'native-base';
import MenuForm from '../components/Form/MenuForm';
import { useNavigation } from '@react-navigation/native';

export default function RegisterMenuFormScreen() {
  const navigation = useNavigation();
  const isRegister = true;
  navigation.setOptions({
    headerLeft: null,
  });

  return (
    <Container>
      <Content>
        <MenuForm screenName="RegisterMenuFormScreen" isRegister={isRegister}/>
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