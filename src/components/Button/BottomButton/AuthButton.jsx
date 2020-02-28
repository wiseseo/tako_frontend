import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'native-base';

export default function AuthButton({screenName}) {
    const navigation = useNavigation();
    return (
        <Button full onPress={() => navigation.navigate(screenName)}>
            <Text>{screenName}</Text>
        </Button>
    );

}