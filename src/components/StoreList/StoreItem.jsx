import React  from 'react';
import BottomButton from '../Button/BottomButton';
import {Card, CardItem, Body, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';


export default function StoreItem({title, content, isFavScreen}) {
    const navigation = useNavigation();
    const moveModifyStore = () => {
        navigation.navigate('ModifyStoreScreen');
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
                    <Text>{content}</Text>
                </Body>
            </CardItem>
            <BottomButton screenName="Delete" onPress={()=>{alert('Delete!')}}/>
            {!isFavScreen && <BottomButton screenName="ModifyStoreList" onPress={moveModifyStore}/>}
            {!isFavScreen && <BottomButton screenName="ModifyMenuList" onPress={moveModifyMenu}/>}
        </Card>
    );
}