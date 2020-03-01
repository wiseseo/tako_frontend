import React from 'react';
import SignupForm from '../../components/Auth/SignupForm';
import { Container, Content, Form, Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import ButtomButton from '../../components/Button/BottomButton';

export default function SignupScreen() {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  }
  return (
    <Container>
      <Content>
        <Form>
          <SignupForm/>
          <ButtomButton screenName="SignupScreen" onPress={goBack}/>
        </Form>
      </Content>
    </Container>
  );
}


