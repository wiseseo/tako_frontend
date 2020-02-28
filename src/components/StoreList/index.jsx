import React  from 'react';
import {FlatList} from 'react-native';
import StoreItem from './StoreItem';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet", index:0 },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet", index:1 },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet", index:3 },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet", index:4 },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet", index:5 },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet", index:6 },
  ];

export default function StoreList({isFavScreen, navigation}) {
    return (
        <FlatList
            data={dataArray}
            renderItem={
                ({item})=>
                <StoreItem 
                navigation={navigation} 
                title={item.title} 
                content={item.content} 
                key={item.index} 
                isFavScreen={isFavScreen} 
                />}
        />
    );
}