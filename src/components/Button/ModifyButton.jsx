import React from 'react';
import { Button, Text } from 'native-base';

export default function ModifyButton({navigation, isStoreScreen}) {
    if(isStoreScreen) {
        return (
            <Button bordered full onPress={() => navigation.navigate('ModifyStoreScreen',{isRegister: false})}>
                <Text>수정</Text>
            </Button>
        );
    }
    else {
        return (
            <Button bordered full onPress={() => navigation.navigate('ModifyMenuFormScreen')}>
                    <Text>수정</Text>
            </Button>
        );
    }
}