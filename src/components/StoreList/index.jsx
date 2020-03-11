import React, {useContext}  from 'react';
import {FlatList} from 'react-native';
import StoreItem from './StoreItem';
import {StoreContext} from '../../store/store';


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
                thumbnail={item.thumbnail}
                type={item.type}
                key={index}
                index={index}
                onDelete={()=> deleteStoreInList(index)}
                isFavScreen={isFavScreen} 
                />)
            }
        />
    );
}