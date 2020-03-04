import React from 'react';
import { Button } from 'react-native';
import { Container, Content, Form } from 'native-base';
import StoreForm from '../components/Form/StoreForm';
import BottomButton from '../components/Button/BottomButton';
import { useNavigation } from '@react-navigation/native';
//import { storeList, addStoreInList } from '../store/store';

export default function RegisterStoreScreen() {
  const navigation = useNavigation();
  const isRegister = true;
  
  navigation.setOptions({
    headerLeft: null,
  });


  return (
    <Container>
      <Content>
        <Form>
          <StoreForm screenName="RegisterMenuScreen" isRegister={isRegister}/>
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