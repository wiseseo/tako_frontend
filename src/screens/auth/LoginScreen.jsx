import React  from 'react';
import LoginForm from '../../components/Auth/LoginForm';
import AuthButton from '../../components/Button/BottomButton/AuthButton';
import { StyleSheet  } from 'react-native';
import { Container, Content, Form, Button, Text} from 'native-base';

export default function LoginScreen({navigation}) {
    return (
      <Container>
        <Content>
          <Form>
            <LoginForm/>
            <AuthButton screenName="SignupScreen"/>
            <Button full onPress={() => navigation.navigate('SignupScreen')}>
              <Text>Login</Text>
            </Button>
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
    justifyContent: 'flex-end',
  },

  bottomButton : {
    position: 'absolute',
    bottom:0
  }
});
*/