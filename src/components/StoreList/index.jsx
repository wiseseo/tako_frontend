import React, {useContext}  from 'react';
import {FlatList} from 'react-native';
import StoreItem from './StoreItem';
import {StoreContext} from '../../store/store';

/*const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet", index:0 },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet", index:1 },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet", index:3 },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet", index:4 },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet", index:5 },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet", index:6 },
  ];
*/

export default function StoreList({isFavScreen}) {
    const { storeList } = useContext(StoreContext);
    return (
        <FlatList
            data={storeList}
            renderItem={
                ({item})=>
                <StoreItem 
                title={item.title} 
                content={item.content} 
                key={item.index} 
                isFavScreen={isFavScreen} 
                />}
        />
    );
}