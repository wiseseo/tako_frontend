import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import UserInfo from '../components/UserInfo';

export default function ModifySettingScreen({route, navigation}) {
  const {newSetting} = route.params;
  return (
    <View>
      <Text>ModifySettingScreen</Text>
      <UserInfo newSetting={newSetting}/>
      <Button
        title="내정보 수정완료"
        onPress={() => navigation.pop(1)}
      />
    </View>
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