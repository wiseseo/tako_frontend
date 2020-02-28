import React  from 'react';
import {Container, Item, Input, Label, Content} from 'native-base';

export default function LoginForm() {
    return (
                <>
                <Item floatingLabel>
                    <Label>ID</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input />
                </Item>
                </>
    );
}