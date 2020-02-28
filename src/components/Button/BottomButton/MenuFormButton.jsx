import React from 'react';
import { Button, Text } from 'native-base';

export default function MenuFormButton({navigation}) {
    return (
        <Button bordered full onPress={() => navigation.pop(1)}>
            <Text>메뉴 저장</Text>
        </Button>
    );

}