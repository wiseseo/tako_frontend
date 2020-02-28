/*import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function LoginScreen({navigation}) {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="로그인"
        onPress={() => navigation.navigate('SignupScreen')}
      />
      <Button
        title="회원가입"
        onPress={() => navigation.navigate('SignupScreen')}
      />
    </View>
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
*/

import React  from 'react';
import LoginForm from '../../components/LoginForm';
import { StyleSheet  } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Footer, FooterTab } from 'native-base';

export default function LoginScreen({navigation}) {
    return (
      <Container>
        <Content>
          <Form>
            <LoginForm/>
            <Button transparent onPress={() => navigation.navigate('SignupScreen')}>
                  <Text>Sign Up</Text>
            </Button>
            <Button full style={styles.bottomButton} onPress={() => navigation.navigate('SignupScreen')}>
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