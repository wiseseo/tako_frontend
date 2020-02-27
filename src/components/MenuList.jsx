import React  from 'react';
import {FlatList} from 'react-native';
import MenuItem from './MenuItem';
//import {Container, Content} from 'native-base';


const dataArray = [
    { menu: "First Element", price: "Lorem ipsum dolor sit amet", photo:'url', index:0 },
    { menu: "Second Element", price: "Lorem ipsum dolor sit amet", photo:'url', index:1 }
  ];

export default function MenuList({navigation, isStoreScreen, isRegMenu}) {
    return (
        <FlatList
            data={dataArray}
            renderItem={({item})=><MenuItem 
            menu={item.menu} 
            price={item.price} 
            photo={item.photo} 
            key={item.index} 
            navigation={navigation} 
            isStoreScreen={isStoreScreen}
            isRegMenu={isRegMenu}/>}
        />
    );
}