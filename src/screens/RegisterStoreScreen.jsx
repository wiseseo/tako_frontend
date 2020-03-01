import React from 'react';
import { Button } from 'react-native';
import { Container, Content, Form } from 'native-base';
import StoreForm from '../components/Form/StoreForm';
import RegisterButton from '../components/Button/BottomButton/RegisterButton';


export default function RegisterStoreScreen({navigation}) {
  const isRegister  = true;
  navigation.setOptions({
    headerLeft: null,
  });
  return (
    <Container>
      <Content>
        <Form>
          <StoreForm/>
          <RegisterButton screenName="RegisterMenuScreen"/>
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