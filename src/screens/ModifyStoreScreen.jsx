import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Footer, FooterTab } from 'native-base';
import StoreForm from '../components/Form/StoreForm';
import StoreButton from '../components/Button/BottomButton/StoreButton';
import BackButton from '../components/Common/BackButton';

export default function ModifyStoreScreen({navigation}) {
  const isRegister = false;
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    )
  });
  return (
    <Container>
      <Content>
        <Form>
          <StoreForm/>
          <StoreButton isRegister={isRegister} navigation={navigation}/>
        </Form>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});