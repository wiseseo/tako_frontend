import React  from 'react';
import LoginForm from '../../components/Auth/LoginForm';
import BottomButton from '../../components/Button/BottomButton';
import { StyleSheet  } from 'react-native';
import { Container, Content, Form } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const moveSignup = () => {
    navigation.navigate('SignupScreen');
  }
  const login = () => {
    alert('login success!');
  }
    return (
      <Container>
        <Content>
          <Form>
            <LoginForm/>
            <BottomButton screenName="LoginScreen" onPress={login}/>
          </Form>
          <BottomButton screenName="SignupScreen" onPress={moveSignup}/>
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