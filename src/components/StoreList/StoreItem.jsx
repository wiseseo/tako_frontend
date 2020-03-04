import React, { useContext }  from 'react';
import BottomButton from '../Button/BottomButton';
import {Card, CardItem, Body, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function StoreItem({title, address, time, description, index, onDelete, isFavScreen}) {
    const navigation = useNavigation();
    const moveModifyStore = () => {
        navigation.navigate('ModifyStoreScreen',{
            index: index
        });
    }
    const moveModifyMenu = () => {
        navigation.navigate('ModifyMenuScreen');
    }
    return (
        <Card>
            <CardItem header bordered>
                <Text>{title}</Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>{index}</Text>
                </Body>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>{address}</Text>
                </Body>
            </CardItem>
            <CardItem bordered>
                <Text>{time}</Text>
            </CardItem>
            <CardItem bordered>
                <Text>{description}</Text>
            </CardItem>
            <BottomButton 
            screenName="Delete" 
            onPress={onDelete}
            />
            {!isFavScreen && <BottomButton screenName="ModifyStoreList" onPress={moveModifyStore}/>}
            {!isFavScreen && <BottomButton screenName="ModifyMenuList" onPress={moveModifyMenu}/>}
        </Card>
    );
}