import React  from 'react';
import { Button, Icon } from 'native-base';

export default function LikeButton({onPress}) {
    return (
        <Button transparent onPress={onPress}>
            <Icon ios='ios-heart' android="md-heart" style={{fontSize: 20, color: 'red'}}/>
        </Button>
    );
}