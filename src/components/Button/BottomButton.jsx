import React from 'react';
import { Button, Text } from 'native-base';

export default function ButtomButton({screenName, onPress}) {
    
    const _title = {
        'ModifySettingScreen' : '정보 수정 완료',
        'ModifyStoreScreen' : '가게 수정 완료',
        'ModifyMenuScreen' : '메뉴 수정 완료',
        'ModifyMenuFormScreen' : '메뉴 저장',
        'RegisterMenuFormScreen' : '메뉴 저장',
        'RegisterMenuScreen' : '가게 등록 완료',
        'MyStoreScreen' : '메뉴 등록 완료',
        'ModifyStoreList' : '수정',
        'ModifyMenuList' : '메뉴편집',
        'ModifyMenuFormList' : '수정',
        'SignupScreen' : '회원가입',
        'LoginScreen' : '로그인',
        'Delete' : '삭제'
    }

    return (
        <Button bordered full onPress={onPress}>
            <Text>{_title[screenName]}</Text>
        </Button>
    )
}