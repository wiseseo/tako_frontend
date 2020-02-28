import React  from 'react';
import {Container, Item, Input, Label, Content, Picker, Textarea} from 'native-base';

export default function StoreForm() {
    return (
                <>
                <Item floatingLabel>
                    <Label>이름</Label>
                    <Input />
                </Item>
                <Item picker>
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
                </Item>
                <Item floatingLabel>
                    <Label>주소</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>시간</Label>
                    <Textarea rowSpan={10} bordered placeholder="Textarea" />
                </Item>
                <Item floatingLabel>
                    <Label>설명</Label>
                    <Textarea rowSpan={10} bordered placeholder="Textarea" />
                </Item>

                </>
    );
}