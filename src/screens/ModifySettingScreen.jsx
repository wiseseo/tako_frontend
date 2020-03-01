import React from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, Form } from 'native-base';
import UserInfo from '../components/UserInfo/index';
import BackButton from '../components/Common/BackButton';
import BottomButton from '../components/Button/BottomButton';
import { useNavigation } from '@react-navigation/native';

export default function ModifySettingScreen() {
  const navigation = useNavigation();
  const newSetting = true;
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    )
  });
  const goBack = () => {
    navigation.pop(1);
  }
  return (
    <Container>
      <Content>
        <Form>
          <UserInfo newSetting={newSetting}/>
          <BottomButton screenName="ModifySettingScreen" onPress={goBack}/>
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