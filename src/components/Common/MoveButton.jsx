import React  from 'react';
import { Button, Icon } from 'native-base';

export default function MoveButton({onPress}) {
    return (
        <Button transparent onPress={onPress}>
            <Icon name="arrow-forward"/>
        </Button>
    );
}