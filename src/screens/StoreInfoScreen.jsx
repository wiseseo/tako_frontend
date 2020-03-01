import React from 'react';
import BackButton from '../components/Common/BackButton';
import { StyleSheet } from 'react-native';
import {Container, Content} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import StoreInfo from '../components/StoreInfo/index';


export default function StoreInfoScreen() {
  const navigation = useNavigation();
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    )
  });
  return (
    <Container>
      <Content>
        <StoreInfo/>
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
