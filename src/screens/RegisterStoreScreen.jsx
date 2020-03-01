import React from 'react';
import { Button } from 'react-native';
import { Container, Content, Form } from 'native-base';
import StoreForm from '../components/Form/StoreForm';
import StoreButton from '../components/Button/BottomButton/StoreButton';


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
          <StoreButton isRegister={isRegister} navigation={navigation}/>
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