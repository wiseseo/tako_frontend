import React  from 'react';
import { Item, Label, Input } from 'native-base';
import BottomButton from '../Button/BottomButton';
import { useNavigation } from '@react-navigation/native';

export default function SettingForm() {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.pop(1);
      }
    return (

            <>
            <Item floatingLabel>
                <Label>name</Label>
                <Input />
            </Item>
            <Item floatingLabel>
                <Label>Password</Label>
                <Input />
            </Item>
            <BottomButton screenName="ModifySettingScreen" onPress={goBack}/>
            </>
        
    );
}