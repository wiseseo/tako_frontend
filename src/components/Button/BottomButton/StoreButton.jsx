import React from 'react';
import { Button, Text } from 'native-base';

export default function StoreButton({navigation, isRegister}) {
    if(isRegister) {
        return (
            <Button bordered full onPress={() => navigation.navigate('RegisterMenuScreen')}>
                <Text>가게 등록 완료</Text>
            </Button>
        );
    }
    else  {
        return (
            <Button bordered full onPress={() => navigation.pop(1)}>
                <Text>가게 수정 완료</Text>
            </Button>
        );

    }

}