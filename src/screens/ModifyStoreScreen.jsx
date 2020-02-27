import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Footer, FooterTab } from 'native-base';
import StoreForm from '../components/StoreForm';

export default function ModifyStoreScreen({navigation}) {
  return (
    <Container>
      <Content>
        <Form>
          <StoreForm/>
          <Button
            full
            title="가게 수정 완료"
            onPress={() => navigation.pop(1)}
          />
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