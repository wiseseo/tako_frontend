import React from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, Form } from 'native-base';
import UserInfo from '../components/UserInfo/index';
import BackButton from '../components/Common/BackButton';
import ModifyButton from '../components/Button/BottomButton/ModifyButton';

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
        <Form>
          <UserInfo newSetting={newSetting}/>
          <ModifyButton screenName="ModifySettingScreen"/>
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