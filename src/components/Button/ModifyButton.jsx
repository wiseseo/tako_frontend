import React from 'react';
import {Text} from 'react-native';
import { Button } from 'native-base';

export default function ModifyButton({navigation, isStoreScreen}) {
    if(isStoreScreen) {
        return (
            <Button bordered onPress={() => navigation.navigate('ModifyStoreScreen')}>
                <Text>수정</Text>
            </Button>
        );
    }
    else {
        return (
            <Button bordered onPress={() => navigation.navigate('ModifyMenuFormScreen')}>
                    <Text>수정</Text>
            </Button>
        );
    }
}