import React, { useState, useContext }  from 'react';
//import { Modal,  Alert } from 'react-native';
import { Content, ListItem, Text, Radio, Right, Left } from 'native-base';
import { useNavigation } from '@react-navigation/native';
//import BottomButton from '../Button/BottomButton';
//import { StoreContext } from '../../store/store';
//import * as ImagePicker from 'expo-image-picker';

export default function MenuPicker({modalVisible}) {
    const navigation = useNavigation();

    return (
        <Content>
            <ListItem>
                <Left>
                <Text>Daily Stand Up</Text>
                </Left>
                <Right>
                <Radio selected={false} />
                </Right>
            </ListItem>
            <ListItem>
                <Left>
                <Text>Discussion with Client</Text>
                </Left>
                <Right>
                <Radio selected={true} />
                </Right>
            </ListItem>
        </Content>
    );
}
