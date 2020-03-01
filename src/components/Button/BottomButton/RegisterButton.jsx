import React from 'react';
import { Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function RegisterButton({navigater, screenName}) {
    const navigation = useNavigation();

    const _title = {
        'RegisterMenuScreen' : '가게 등록 완료',
        'MyStoreScreen' : '메뉴 등록 완료'
    }
    return (
      (!navigater)  ?    
      <Button bordered full
          onPress={() => navigation.navigate(screenName)}>
          <Text>{_title[screenName]}</Text>
      </Button> 
      : 
      <Button bordered full
          onPress={() => navigation.navigate(navigater, {screen: screenName})}>
          <Text>{_title[screenName]}</Text>
      </Button>
      
    );
}
