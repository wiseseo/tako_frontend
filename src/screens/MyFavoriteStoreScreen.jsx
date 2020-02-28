import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import StoreList from '../components/StoreList/index';
import { Container, Content } from 'native-base'

export default function MyFavoriteStoreScreen() {
  return (
    <Container>
      <Content>
        <StoreList isFavScreen={true}/>
      </Content>
    </Container>
  );
}
