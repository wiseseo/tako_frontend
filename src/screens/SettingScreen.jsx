import React from 'react';
import { StyleSheet, Button } from 'react-native';
import UserInfo from '../components/UserInfo/index';
import { Container, Content, List, ListItem, Left, Right, Icon, Text } from 'native-base';


export default function SettingScreen({navigation}) {
  navigation.setOptions({
    headerLeft: () => (
      <Button
        onPress={() => navigation.goBack()}
        title="<-"
      />
    ),
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('ModifySettingScreen',{
          newSetting: true,
        })}
        title="정보수정"
      />
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