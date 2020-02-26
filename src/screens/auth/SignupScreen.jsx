import React from 'react';
import SignupForm from '../../components/SignupForm';
import { Container, Content, Form, Item, Input, Label, Button, Text, Footer, FooterTab } from 'native-base';

export default function SignupScreen({navigation}) {
  return (
  <Container>
    <Content>
      <Form>
        <SignupForm/>
        <Button full onPress={() => navigation.goBack()}>
          <Text>SignUp</Text>
        </Button>
      </Form>
    </Content>
  </Container>
  );
}


