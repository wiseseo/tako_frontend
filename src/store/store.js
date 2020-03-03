import React, { useState } from "react";

const defaultStore = {
    storeList : [],
    store :{
        title: "",
        type: [],
        location: {
            address : "",
            latitude : 0, 
            longitude : 0 
        },
        time : "",
        items : [],
        description : "",
        thumbnail: ""
    },
    addStoreInList : () => {},
    deleteStoreInList : () => {},
    modifyStore : () => {}
};

export const StoreContext = React.createContext(defaultStore);

export const StoreProvider = props => {
  const [storeList, setStoreList] = useState(defaultStore.storeList);
  const [store, setStore] = useState(defaultStore.store);

  const addStoreInList = store => {
    setStoreList(prev => [...prev, store]);
  };

  const deleteStoreInList = index => {
      let list = [...storeList];
      list.splice(index,1);
      setStoreList(list);
  }

  const modifyStore = (store, index) => {
    setStore(store);
    storeList[index] = store;
    setStoreList(storeList);
  }
  return (
    <StoreContext.Provider
      value={{
        storeList,
        store,
        addStoreInList,
        deleteStoreInList,
        modifyStore
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
