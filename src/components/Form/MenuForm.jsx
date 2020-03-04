import React , {useState} from 'react';
import {Item, Input, Label } from 'native-base';

export default function MenuForm() {
    const [menu, setMenu] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    return (
                <>
                <Item floatingLabel>
                    <Label>menu</Label>
                    <Input 
                    value={menu}
                    placeholder="메뉴이름"
                    autoFocus={false}
                    onChangeText={value => setMenu(value)}/>
                </Item>
                <Item floatingLabel>
                    <Label>price</Label>
                    <Input 
                    value={price}
                    placeholder="가격"
                    autoFocus={false}
                    onChangeText={value => setPrice(value)}/>
                </Item>
                <Item floatingLabel>
                    <Label>image</Label>
                    <Input                     
                    value={image}
                    placeholder="메뉴이미지"
                    autoFocus={false}
                    onChangeText={value => setImage(value)}/>
                </Item>
                </>
    );
}