import React from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, Text, Button } from 'native-base';
import UserInfo from '../components/UserInfo/index';

export default function ModifySettingScreen({route, navigation}) {
  const {newSetting} = route.params;
  return (
    <Container>
      <Content>
        <UserInfo newSetting={newSetting}/>
        <Button
          bordered full
          onPress={() => navigation.pop(1)}
        >
          <Text>수정 완료</Text>
        </Button>
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