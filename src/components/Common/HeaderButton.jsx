import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'native-base';

export default function HeaderButton({ screenName , navigater}) {
  const navigation = useNavigation();
  const _title = {
      'SettingScreen' : '설정',
      'ModifySettingScreen' : '정보수정',
      'RegisterStoreScreen' : '가게등록',
      'RegisterMenuFormScreen' : '메뉴등록'
  }
  return (
    (!navigater)  ?    
    <Button hasText transparent
        onPress={() => navigation.navigate(screenName)}>
        <Text>{_title[screenName]}</Text>
    </Button> 
    : 
    <Button hasText transparent
        onPress={() => navigation.navigate(navigater, {screen: screenName})}>
        <Text>{_title[screenName]}</Text>
    </Button>
    
  );
}