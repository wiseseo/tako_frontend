import React, { useState } from "react";

const defaultUser = {
    name : "eunwoo",
    password : "dmsdn",
    modifySetting : () => {}
};

export const UserContext = React.createContext(defaultUser);

export const UserProvider = props => {
  const [name, setName] = useState(defaultUser.name);
  const [password, setPassword] = useState(defaultUser.password);

  const modifySetting = (name, password) => {
    setName(name);
    setPassword(password);
  };
  return (
    <UserContext.Provider
      value={{
        name,
        password,
        modifySetting
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
