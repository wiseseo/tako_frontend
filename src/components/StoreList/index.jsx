import React, {useContext}  from 'react';
import {FlatList} from 'react-native';
import StoreItem from './StoreItem';
import {StoreContext} from '../../store/store';

/*const dataArray = [
    { title: "First Element", address: "Lorem ipsum dolor sit amet", index:0 },
    { title: "Second Element", address: "Lorem ipsum dolor sit amet", index:1 },
    { title: "Third Element", address: "Lorem ipsum dolor sit amet", index:3 },
    { title: "Third Element", address: "Lorem ipsum dolor sit amet", index:4 },
    { title: "Third Element", address: "Lorem ipsum dolor sit amet", index:5 },
    { title: "Third Element", address: "Lorem ipsum dolor sit amet", index:6 },
  ];
*/

export default function StoreList({isFavScreen}) {
    const { storeList, deleteStoreInList } = useContext(StoreContext);
    return (
        <FlatList
            data={storeList}
            keyExtractor={(item, index) => {
                return String(index);
            }}
            renderItem={
                ({item, index})=>
                (<StoreItem 
                title={item.title} 
                address={item.address}
                time={item.time} 
                description={item.description}
                index={index}
                onDelete={()=> deleteStoreInList(index)}
                isFavScreen={isFavScreen} 
                />)
            }
        />
    );
}