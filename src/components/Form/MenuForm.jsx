import React  from 'react';
import {Container, Item, Input, Label, Content} from 'native-base';

export default function MenuForm() {
    return (
                <>
                <Item floatingLabel>
                    <Label>menu</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>price</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>image</Label>
                    <Input />
                </Item>
                </>
    );
}