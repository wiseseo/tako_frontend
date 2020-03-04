import React, { useState, useContext }  from 'react';
import { Form ,Item, Input, Label, Picker, Textarea} from 'native-base';
import BottomButton from '../Button/BottomButton';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../../store/store';

export default function StoreForm({screenName, isRegister, index}) {
    const navigation = useNavigation();

    const { addStoreInList, modifyStore } = useContext(StoreContext);
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    return (
            <Form>
                <Item floatingLabel>
                    <Label>이름</Label>
                    <Input 
                        value={title}
                        placeholder="가게이름"
                        autoFocus={false}
                        onChangeText={value => setTitle(value)}/>
                </Item>
                {/*<Item picker>
                    <Picker
                        mode="dropdown"
                        style={{ width: undefined }}
                        placeholder="Select your SIM"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                    >
                        <Picker.Item label="Wallet" value="key0" />
                        <Picker.Item label="ATM Card" value="key1" />
                        <Picker.Item label="Debit Card" value="key2" />
                        <Picker.Item label="Credit Card" value="key3" />
                        <Picker.Item label="Net Banking" value="key4" />
                    </Picker>
                </Item>*/}
                <Item floatingLabel>
                    <Label>주소</Label>
                    <Input 
                        value={address}
                        placeholder="주소"
                        autoFocus={false}
                        onChangeText={value => setAddress(value)}/>
                </Item>
                <Item floatingLabel>
                    <Label>시간</Label>
                    <Input 
                        rowSpan={10} 
                        bordered 
                        placeholder="Textarea"
                        value={time}
                        placeholder="시간"
                        autoFocus={false}
                        onChangeText={value => setTime(value)} />
                </Item>
                <Item floatingLabel>
                    <Label>설명</Label>
                    <Input
                        rowSpan={10} 
                        bordered 
                        placeholder="Textarea" 
                        value={description}
                        placeholder="설명"
                        autoFocus={false}
                        onChangeText={value => setDescription(value)}/>
                </Item>
                <BottomButton 
                    screenName={screenName} 
                    onPress={
                        isRegister ? () => {
                            addStoreInList({
                                title,
                                address,
                                time,
                                description
                            });
                            navigation.navigate('RegisterMenuScreen');
                        } : () => {
                            modifyStore({
                                title,
                                address,
                                time,
                                description
                            },index);
                            navigation.pop(1);
                        }

                    }
                />
            </Form>
    );
}