import React  from 'react';
import {Card, CardItem, Body, Text} from 'native-base';
import DeleteButton from './Button/DeleteButton';
import ModifyButton from './Button/ModifyButton';

export default function MenuItem({menu, price, photo, index, navigation, isStoreScreen, isRegMenu}) {
    return (
        <Card>
            <CardItem header bordered>
                <Text>{menu}</Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>
                        {price}
                    </Text>
                </Body>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>
                        {photo}
                    </Text>
                </Body>
            </CardItem>
            {!isRegMenu && <DeleteButton/>}
            {!isRegMenu && <ModifyButton navigation={navigation} isStoreScreen={isStoreScreen}/>}
        </Card>
    );
}