import React from 'react';
import { StyleSheet } from 'react-native';
import MenuForm from '../components/Form/MenuForm';
import { Container, Content, Form } from 'native-base';
import BackButton from '../components/Common/BackButton';
import { useNavigation } from '@react-navigation/native';

export default function ModifyMenuFormScreen({route}) {
  const { index } = route.params;
  const isRegister = false;
  const navigation = useNavigation();
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    )
  });

  return (
    <Container>
      <Content>
        <MenuForm screenName="ModifyMenuFormScreen" isRegister={isRegister} index={index}/>
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