import React from 'react';
import { StyleSheet } from 'react-native';
import {Container, Content, Form} from 'native-base';
import MenuForm from '../components/Form/MenuForm';
import BottomButton from '../components/Button/BottomButton';
import { useNavigation } from '@react-navigation/native';

export default function RegisterMenuFormScreen() {
  const navigation = useNavigation();
  navigation.setOptions({
    headerLeft: null,
  });
  const goBack = () => {
    navigation.pop(1);
  }
  return (
    <Container>
      <Content>
        <Form>
          <MenuForm/>
          <BottomButton screenName="RegisterMenuFormScreen" onPress={goBack}/>
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