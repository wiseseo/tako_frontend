import React from 'react';
import { StyleSheet } from 'react-native';
import MenuForm from '../components/Form/MenuForm';
import MenuFormButton from '../components/Button/BottomButton/MenuFormButton';
import { Container, Content, Form } from 'native-base';

export default function ModifyMenuFormScreen({navigation}) {
  return (
    <Container>
      <Content>
        <Form>
          <MenuForm/>
          <MenuFormButton navigation={navigation}/>
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