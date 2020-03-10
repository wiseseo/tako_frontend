import React, { useState } from "react";

const defaultStore = {
    storeList : [    
    { title: "붕어빵", address: "Lorem ipsum dolor sit amet", time : "17-22", description : "hahaha"},
    { title: "타코야끼", address: "Lorem ipsum dolor sit amet", time : "17-22", description : "hahaha"},
    { title: "호떡", address: "Lorem ipsum dolor sit amet", time : "17-22", description : "hahaha"},
    { title: "떡볶이", address: "Lorem ipsum dolor sit amet", time : "17-22", description : "hahaha"},
    { title: "와플", address: "Lorem ipsum dolor sit amet", time : "17-22", description : "hahaha"},
    { title: "호두과자", address: "Lorem ipsum dolor sit amet", time : "17-22", description : "hahaha"},
    { title: "닭꼬치", address: "Lorem ipsum dolor sit amet", time : "17-22", description : "hahaha"}
    ],
    menuList : [
      {menu: "붕어빵", price:1000, photo:"url"},
      {menu: "문어빵", price:1000, photo:"url"},
      {menu: "씨앗호떡", price:1000, photo:"url"},
      {menu: "생크림와플", price:1000, photo:"url"},
      {menu: "슈크림붕어빵", price:1000, photo:"url"}
    ],
    typeList : [
      { label: '타코야끼', value: 0 , selected: false },
      { label: '붕어빵', value: 1 , selected: false},
      { label: '호떡', value: 2 , selected: false},
      { label: '옛날호떡', value: 3 , selected: false},
      { label: '군고구마', value: 4 , selected: false}
    ],
    selectedTypes : ()=>{},
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
    const [typeList, setTypeList] = useState(defaultStore.typeList);

  const addStoreInList = store => {
    setStoreList(prev => [...prev, store]);
  };

  const deleteStoreInList = index => {
      let list = [...storeList];
      list.splice(index,1);
      setStoreList(list);
  };

  const modifyStore = (store, index) => {
    let list = [...storeList];
    list.splice(parseInt(index),1, store);
    setStoreList(list);
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
    let list = [...menuList];
    list.splice(parseInt(index),1,menu);
    setMenuList(list);
  };
  
  
  const selectedTypes = (type, index) => {
    let list = [...typeList];
    list.splice(parseInt(index),1,type);
    setTypeList(list);
  };
  // const selectedTypes = (type, index) => {
  //   let list = [...typeList];
  //   list.splice(parseInt(index),1, type);
  //   setTypeList(list);
  // };

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
        modifyMenu,
        typeList,
        selectedTypes
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
