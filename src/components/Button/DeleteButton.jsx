import React from 'react';
import {Text} from 'react-native';
import { Button } from 'native-base';

export default function DeleteButton() {
    return (
        <Button bordered>
            <Text>삭제</Text>
        </Button>
    );
}