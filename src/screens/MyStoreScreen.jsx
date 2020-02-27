import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import StoreList from '../components/StoreList';
import { Container, Content } from 'native-base';

export default function MyStoreScreen({navigation}) {
  navigation.setOptions({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('RegisterNavigator',{screen : 'RegisterStoreScreen'})}
        title="가게등록"
      />
    ),
  });
  const isStoreScreen = true;
  return (
    <Container>
      <Content>
        <StoreList isFavScreen={false} navigation={navigation} isStoreScreen={isStoreScreen}/>
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