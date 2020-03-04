import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserInfo from '../components/UserInfo/index';
import BackButton from '../components/Common/BackButton';
import HeaderRightButton from '../components/Common/HeaderRightButton';
import MoveButton from '../components/Common/MoveButton';
import { Container, Content, List, ListItem, Left, Right, Text } from 'native-base';
//import {UserProvider} from '../store/user';

export default function SettingScreen() {
  const navigation = useNavigation();
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    ),
    headerRight: () => (
      <HeaderRightButton 
      onPress={()=>navigation.navigate('ModifySettingScreen')}
      screenName="ModifySettingScreen"/>
    ),
  });

  const newSetting = false;
  return (
    <Container>
      <Content>
        <List>
          <UserInfo newSetting={newSetting} />
          <ListItem>
            <Left>
              <Text>내가 좋아하는 가게</Text>
            </Left>
            <Right>
              <MoveButton onPress={() => navigation.navigate('MyFavoriteStoreScreen')}/>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>내 가게</Text>
            </Left>
            <Right>
              <MoveButton onPress={() => navigation.navigate('MyStoreScreen')}/>
            </Right>
          </ListItem>
        </List>
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