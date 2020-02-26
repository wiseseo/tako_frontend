import React  from 'react';
import {FlatList} from 'react-native';
import StoreItem from './StoreItem';
//import {Container, Content} from 'native-base';


const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];

export default function StoreList() {
    return (

                <FlatList
                    data={dataArray}
                    renderItem={({item})=><StoreItem title={item.title} content={item.content}/>}
                />

    );
}