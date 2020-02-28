import React  from 'react';
import DeleteButton from '../Button/DeleteButton';
import ModifyButton from '../Button/ModifyButton';
import {Card, CardItem, Body, Text, Button} from 'native-base';


export default function StoreItem({navigation ,title, content, isFavScreen}) {
    return (
        <Card>
            <CardItem header bordered>
                <Text>{title}</Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>{content}</Text>
                </Body>
            </CardItem>
            <DeleteButton/>
            {!isFavScreen && <ModifyButton screenName="ModifyStoreScreen"/>}
            {!isFavScreen && <ModifyButton screenName="ModifyMenuScreen"/>}
        </Card>
    );
}