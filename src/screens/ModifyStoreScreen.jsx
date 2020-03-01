import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Form } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import StoreForm from '../components/Form/StoreForm';
import BackButton from '../components/Common/BackButton';
import BottomButton from '../components/Button/BottomButton';

export default function ModifyStoreScreen() {
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
          <StoreForm/>
          <BottomButton screenName='ModifyStoreScreen' onPress={goBack}/>
        </Form>
      </Content>
    </Container>
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