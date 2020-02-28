import React  from 'react';
import {Form, Item, Label, Input } from 'native-base';


export default function SettingForm() {
    return (
    <Form>
        <Item floatingLabel>
            <Label>name</Label>
            <Input />
        </Item>
        <Item floatingLabel>
            <Label>Password</Label>
            <Input />
        </Item>
    </Form>
    );
}