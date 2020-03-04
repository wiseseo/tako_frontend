import React  from 'react';
import {Card, CardItem, Body, Text} from 'native-base';
import BottomButton from '../Button/BottomButton';
import { useNavigation } from '@react-navigation/native';

export default function MenuItem({menu, price, photo, index, isRegMenu, onDelete}) {
    const navigation = useNavigation();
    const moveModifyMenuForm = () => {
        navigation.navigate('ModifyMenuFormScreen',{
            index:index
        });
    }
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
            {!isRegMenu && <BottomButton screenName="Delete" onPress={onDelete}/>}
            {!isRegMenu && <BottomButton screenName="ModifyMenuFormList" onPress={moveModifyMenuForm}/>}
        </Card>
    );
}