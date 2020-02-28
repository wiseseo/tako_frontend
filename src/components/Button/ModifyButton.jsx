import React from 'react';
import { Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function ModifyButton({screenName}) {
    const navigation = useNavigation();
    if (screenName === 'ModifyStoreScreen') {
        return (
        <Button bordered full onPress={() => navigation.navigate(screenName)}>
            <Text>수정</Text>
        </Button>
        );
    }
    else if (screenName==='ModifyMenuFormScreen') {
        return (
            <Button bordered full onPress={() => navigation.navigate(screenName)}>
                <Text>수정</Text>
            </Button>
        );
    }
    else {
        return (
           <Button bordered full onPress={() => navigation.navigate(screenName)}>
                <Text>메뉴편집</Text>
         </Button>
        );
    }
    /*if(isStoreScreen) {
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
    }*/
}