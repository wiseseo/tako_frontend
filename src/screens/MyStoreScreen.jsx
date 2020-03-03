import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import StoreList from '../components/StoreList/index';
import { Container, Content } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/Common/BackButton';
import HeaderRightButton from '../components/Common/HeaderRightButton';
import {StoreProvider} from '../store/store';

export default function MyStoreScreen() {
  const navigation = useNavigation();
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    ),
    headerRight: () => (
      <HeaderRightButton 
      screenName="RegisterStoreScreen"
      onPress={()=>navigation.navigate('RegisterNavigator',{screen : "RegisterStoreScreen"})}/>
    ),
  });

  return (
    <Container>
      <Content>
        <StoreProvider>
          <StoreList isFavScreen={false}/>
        </StoreProvider>
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