import React from 'react';
import { Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function ModifyButton({screenName}) {
    const navigation = useNavigation();
    const _title = {
        'ModifySettingScreen' : '정보 수정 완료',
        'ModifyStoreScreen' : '가게 수정 완료',
        'ModifyMenuScreen' : '메뉴 수정 완료',
        'ModifyMenuFormScreen' : '메뉴 저장',
        'RegisterMenuFormScreen' : '메뉴 저장'
    }

    return (
        <Button bordered full onPress={() => navigation.pop(1)}>
            <Text>{_title[screenName]}</Text>
        </Button>
    )
}