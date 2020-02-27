import React  from 'react';
import { ListItem, Text, Left, Right, Form, Item, Label, Input } from 'native-base';
//import {FlatList} from 'react-native';
//import StoreItem from './StoreItem';
//import {Container, Content} from 'native-base';


export default function UserInfo({newSetting}) {
    if(!newSetting) {
        return (

            <>
            <ListItem>
              <Left>
                <Text>name</Text>
              </Left>
              <Right>
                <Text>서지혜</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>id</Text>
              </Left>
              <Right>
                <Text>mansesjh22</Text>
              </Right>
            </ListItem>

            </>
        );
    }
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