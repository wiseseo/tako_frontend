import React, { useState } from "react";

const defaultItem = {
    itemList : [],
    item :{
        menu : "",
        price : 0,
        photo : "" 
    },
    additemInList : () => {},
    deleteitemInList : () => {},
    modifyitem : () => {}
};

export const ItemContext = React.createContext(defaultItem);

export const ItemProvier = props => {
  const [itemList, setitemList] = useState(defaultItem.itemList);
  const [item, setitem] = useState(defaultItem.item);

  const additemInList = item => {
    setitemList(prev => [...prev, item]);
  };

  const deleteitemInList = index => {
      let list = [...itemList];
      list.splice(index,1);
      setitemList(list);
  }

  const modifyitem = (item, index) => {
    setitem(item);
    itemList[index] = item;
    setitemList(itemList);
  }
  return (
    <ItemContext.Provider
      value={{
        itemList,
        item,
        additemInList,
        deleteitemInList,
        modifyitem
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};
