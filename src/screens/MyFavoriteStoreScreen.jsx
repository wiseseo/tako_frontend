import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StoreList from '../components/StoreList';
import { Container, Content } from 'native-base';
export default function MyFavoriteStoreScreen() {
  return (
    <Container>
      <Content>
        <StoreList/>
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