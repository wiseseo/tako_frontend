import React from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, Text, Button } from 'native-base';
import UserInfo from '../components/UserInfo/index';
import BackButton from '../components/Common/BackButton';

export default function ModifySettingScreen({ navigation}) {
  const newSetting = true;
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    )
  });
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