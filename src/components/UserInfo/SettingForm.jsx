import React, {useState, useContext}  from 'react';
import { Item, Label, Input } from 'native-base';
import BottomButton from '../Button/BottomButton';
import { useNavigation } from '@react-navigation/native';
import {UserContext} from '../../store/user';

export default function SettingForm() {
    const {modifySetting} = useContext(UserContext);
    const [name, setName] = useState("");
    const navigation = useNavigation();
    /*const goBack = () => {
        navigation.pop(1);
      }*/
    return (

            <>
            <Item floatingLabel>
                <Label>name</Label>
                <Input                    
                value={name}
                placeholder="이름"
                autoFocus={false}
                onChangeText={value => setName(value)} />
            </Item>
            <Item floatingLabel>
                <Label>Password</Label>
                <Input />
            </Item>
            <BottomButton screenName="ModifySettingScreen" onPress={
                ()=>{
                    modifySetting(name);
                    navigation.pop(1);
                }
            }/>
            </>
        
    );
}