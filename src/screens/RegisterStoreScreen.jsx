import React from 'react';
import { Container, Content } from 'native-base';
import StoreForm from '../components/Form/StoreForm';
import { useNavigation } from '@react-navigation/native';

export default function RegisterStoreScreen() {
  const navigation = useNavigation();
  const isRegister = true;
  
  navigation.setOptions({
    headerLeft: null,
  });


  return (
    <Container>
      <Content>
        <StoreForm screenName="RegisterMenuScreen" isRegister={isRegister}/>
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