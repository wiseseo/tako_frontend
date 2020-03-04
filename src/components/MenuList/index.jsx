import React, { useContext }  from 'react';
import {FlatList} from 'react-native';
import MenuItem from './MenuItem';
import { StoreContext } from '../../store/store';
/*
const dataArray = [
    { menu: "First Element", price: "Lorem ipsum dolor sit amet", photo:'url', index:0 },
    { menu: "Second Element", price: "Lorem ipsum dolor sit amet", photo:'url', index:1 }
  ];*/

export default function MenuList({isRegMenu}) {
    const { menuList, deleteMenuInList } = useContext(StoreContext);
    return (
        <FlatList
            data={menuList}
            keyExtractor={(item, index) => {
                return String(index);
            }}
            renderItem={
                ({item, index})=>
                (<MenuItem 
                menu={item.menu} 
                price={item.price} 
                photo={item.photo} 
                index={index}
                isRegMenu={isRegMenu}
                onDelete={()=> deleteMenuInList(index)}
                />)
            }
        />
    );
}