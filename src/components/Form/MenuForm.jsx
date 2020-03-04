import React , {useState, useContext} from 'react';
import {Form, Item, Input, Label } from 'native-base';
import BottomButton from '../Button/BottomButton';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../../store/store';

export default function MenuForm({screenName, isRegister, index}) {
    const navigation = useNavigation();
    const {modifyMenu, addMenuInList} = useContext(StoreContext);

    const [menu, setMenu] = useState("");
    const [price, setPrice] = useState("");
    const [photo, setPhoto] = useState("");

    return (
            <Form>
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
                    <Label>photo</Label>
                    <Input                     
                    value={photo}
                    placeholder="메뉴이미지"
                    autoFocus={false}
                    onChangeText={value => setPhoto(value)}/>
                </Item>
                <BottomButton 
                screenName={screenName}
                onPress={
                    isRegister ? () => {
                        addMenuInList({
                            menu,
                            price,
                            photo
                        });
                        navigation.pop(1);
                    } : ()=>{
                        modifyMenu({
                            menu,
                            price,
                            photo
                        }, index);
                        navigation.pop(1);
                    }
                }
                />
        </Form>
    );
}