import React from 'react';
import {Button, Icon} from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();
    return (
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
    );
  
}