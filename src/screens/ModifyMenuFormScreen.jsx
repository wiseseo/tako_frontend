import React from 'react';
import { StyleSheet } from 'react-native';
import MenuForm from '../components/Form/MenuForm';
import BottomButton from '../components/Button/BottomButton';
import { Container, Content, Form } from 'native-base';
import BackButton from '../components/Common/BackButton';
import { useNavigation } from '@react-navigation/native';

export default function ModifyMenuFormScreen() {
  const navigation = useNavigation();
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    )
  });
  const goBack = () => {
    navigation.pop(1);
  }
  return (
    <Container>
      <Content>
        <Form>
          <MenuForm/>
          <BottomButton screenName="ModifyMenuFormScreen" onPress={goBack}/>
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