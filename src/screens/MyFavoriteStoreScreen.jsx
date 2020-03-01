import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import StoreList from '../components/StoreList/index';
import { Container, Content } from 'native-base'
import BackButton from '../components/Common/BackButton';

export default function MyFavoriteStoreScreen({navigation}) {
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    ),
  });
  return (
    <Container>
      <Content>
        <StoreList isFavScreen={true}/>
      </Content>
    </Container>
  );
}
