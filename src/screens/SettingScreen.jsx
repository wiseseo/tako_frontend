import React from 'react';
import { StyleSheet, Button } from 'react-native';
import UserInfo from '../components/UserInfo/index';
import BackButton from '../components/Common/BackButton';
import HeaderButton from '../components/Common/HeaderButton';
import { Container, Content, List, ListItem, Left, Right, Icon, Text } from 'native-base';


export default function SettingScreen({navigation}) {
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    ),
    headerRight: () => (
      <HeaderButton screenName="ModifySettingScreen"/>
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
              <Icon name="arrow-forward" onPress={() => navigation.navigate('MyFavoriteStoreScreen')}/>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>내 가게</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" onPress={() => navigation.navigate('MyStoreScreen')}/>
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