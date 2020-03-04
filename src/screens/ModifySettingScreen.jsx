import React from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, Form } from 'native-base';
import UserInfo from '../components/UserInfo/index';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/Common/BackButton';
//import { UserProvider } from '../store/user';

export default function ModifySettingScreen() {
  const navigation = useNavigation();
  const newSetting = true;
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    )
  });

  return (
    <Container>
      <Content>
        <Form>
          <UserInfo newSetting={newSetting}/>
        </Form>
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