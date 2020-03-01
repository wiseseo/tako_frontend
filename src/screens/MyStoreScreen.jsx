import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import StoreList from '../components/StoreList/index';
import { Container, Content } from 'native-base';
import BackButton from '../components/Common/BackButton';
import HeaderButton from '../components/Common/HeaderButton';

export default function MyStoreScreen({navigation}) {
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    ),
    headerRight: () => (
      <HeaderButton navigater="RegisterNavigator" screenName="RegisterStoreScreen"/>
    ),
  });

  return (
    <Container>
      <Content>
        <StoreList isFavScreen={false} navigation={navigation}/>
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