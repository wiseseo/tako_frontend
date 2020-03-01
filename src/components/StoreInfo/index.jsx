import React from 'react';
import { StyleSheet } from 'react-native';
import {List, ListItem, Left, Text} from 'native-base';


export default function StoreInfo() {
  return (
    <List>
        <ListItem>
            <Left>
            <Text>가게이름</Text>
            </Left>
        </ListItem>
        <ListItem>
            <Left>
            <Text>주소</Text>
            </Left>
        </ListItem>
        <ListItem>
            <Left>
            <Text>번호</Text>
            </Left>
        </ListItem>
        <ListItem>
            <Left>
            <Text>우ㅏㅇ아</Text>
            </Left>
        </ListItem>
    </List>

  );
}
