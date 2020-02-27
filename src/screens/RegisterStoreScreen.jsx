import React from 'react';
import { Button } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Text, Footer, FooterTab } from 'native-base';
import StoreForm from '../components/StoreForm';

export default function RegisterStoreScreen({navigation}) {
  return (
    <Container>
      <Content>
        <Form>
          <StoreForm/>
          <Button
            title="가게 등록 완료"
            onPress={() => navigation.navigate('RegisterMenuScreen')}
          />
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