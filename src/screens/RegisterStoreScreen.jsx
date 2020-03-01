import React from 'react';
import { Button } from 'react-native';
import { Container, Content, Form } from 'native-base';
import StoreForm from '../components/Form/StoreForm';
import BottomButton from '../components/Button/BottomButton';
import { useNavigation } from '@react-navigation/native';

export default function RegisterStoreScreen() {
  const navigation = useNavigation();

  navigation.setOptions({
    headerLeft: null,
  });

  const moveRegistMenu = () => {
    navigation.navigate('RegisterMenuScreen');
  }

  return (
    <Container>
      <Content>
        <Form>
          <StoreForm/>
          <BottomButton screenName="RegisterMenuScreen" onPress={moveRegistMenu}/>
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