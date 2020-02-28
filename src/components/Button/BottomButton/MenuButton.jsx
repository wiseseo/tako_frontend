import React from 'react';
import { Button, Text } from 'native-base';

export default function MenuButton({navigation, isRegister}) {
    if(isRegister) {
        return (
            <Button bordered full onPress={() => navigation.navigate('SettingNavigator', {screen:'MyStoreScreen'})}>
                <Text>메뉴 등록 완료</Text>
            </Button>
        );
    }
    else  {
        return (
            <Button bordered full onPress={() => navigation.pop(1)}>
                <Text>메뉴 수정 완료</Text>
            </Button>
        );

    }

}