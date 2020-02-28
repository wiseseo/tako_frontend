import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import StoreList from '../components/StoreList/index';
import { Container, Content } from 'native-base';

export default function MyStoreScreen({navigation}) {
  navigation.setOptions({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('RegisterNavigator',
        {screen : 'RegisterStoreScreen',})} 
        title="가게등록"
      />
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