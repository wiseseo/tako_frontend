import React from 'react';
import { Button, Text } from 'native-base';

export default function HeaderRightButton({ screenName , onPress}) {

  const _title = {
      'SettingScreen' : '설정',
      'ModifySettingScreen' : '정보수정',
      'RegisterStoreScreen' : '가게등록',
      'RegisterMenuFormScreen' : '메뉴등록'
  }
  return (  
    <Button hasText transparent
        onPress={onPress}>
        <Text>{_title[screenName]}</Text>
    </Button> 
  );
}