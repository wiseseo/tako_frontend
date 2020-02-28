import React from 'react';
import SignupForm from '../../components/Auth/SignupForm';
import { Container, Content, Form, Button, Text } from 'native-base';

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


