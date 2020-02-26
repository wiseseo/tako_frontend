import React  from 'react';
import {Card, CardItem, Body, Text} from 'native-base';

export default function StoreItem({title, content}) {
    return (
        <Card>
            <CardItem header bordered>
                <Text>{title}</Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>
                        {content}
                    </Text>
                </Body>
            </CardItem>
        </Card>
    );
}