import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Container, Content, Form} from 'native-base';
import MenuForm from '../components/Form/MenuForm';
import ModifyButton from '../components/Button/BottomButton/ModifyButton';

export default function RegisterMenuFormScreen({navigation}) {
  navigation.setOptions({
    headerLeft: null,
  });
  return (
    <Container>
      <Content>
        <Form>
          <MenuForm/>
          <ModifyButton screenName="RegisterMenuFormScreen"/>
        </Form>
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