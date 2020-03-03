import React, { useState } from "react";

const defaultStore = {
    storeList : [    
    { title: "First Element", content: "Lorem ipsum dolor sit amet", index:0 },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet", index:1 },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet", index:3 }
],
    menuList : [],
    addStoreInList : () => {},
    deleteStoreInList : () => {},
    modifyStore : () => {},
    addMenuInList : () => {},
    deleteMenuInList : () => {},
    modifyMenu : () => {}
};

export const StoreContext = React.createContext(defaultStore);

export const StoreProvider = props => {
  const [storeList, setStoreList] = useState(defaultStore.storeList);
  const [menuList, setMenuList] = useState(defaultStore.menuList);
  
  const addStoreInList = store => {
    setStoreList(prev => [...prev, store]);
  };

  const deleteStoreInList = index => {
      let list = [...storeList];
      list.splice(index,1);
      setStoreList(list);
  };

  const modifyStore = (store, index) => {
    storeList[index] = store;
    setStoreList(storeList);
  };

  const addMenuInList = menu => {
    setMenuList(prev => [...prev, menu]);
  };

  const deleteMenuInList = index => {
      let list = [...menuList];
      list.splice(index,1);
      setMenuList(list);
  };

  const modifyMenu = (menu, index) => {
    menuList[index] = menu;
    setMenuList(menuList);
  };
  return (
    <StoreContext.Provider
      value={{
        storeList,
        menuList,
        addStoreInList,
        deleteStoreInList,
        modifyStore,
        addMenuInList,
        deleteMenuInList,
        modifyMenu
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
