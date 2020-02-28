import React  from 'react';
//import {Button} from 'react-native';
import DeleteButton from './Button/DeleteButton';
import ModifyButton from './Button/ModifyButton';
import {Card, CardItem, Body, Text, Button} from 'native-base';

export default function StoreItem({navigation ,title, content, isFavScreen, isStoreScreen}) {
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
            <DeleteButton/>
            {!isFavScreen && <ModifyButton navigation={navigation} isStoreScreen={isStoreScreen}/>}
            {!isFavScreen && <Button bordered full onPress={() => navigation.navigate('ModifyMenuScreen')}><Text>메뉴편집</Text></Button>}
        </Card>
    );
}