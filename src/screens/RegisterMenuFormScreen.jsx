import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Container, Content, Form} from 'native-base';
import MenuForm from '../components/Form/MenuForm';
import MenuFormButton from '../components/Button/BottomButton/MenuFormButton';


export default function RegisterMenuFormScreen({navigation}) {
  return (
    <Container>
      <Content>
        <Form>
          <MenuForm/>
          <MenuFormButton navigation={navigation}/>
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