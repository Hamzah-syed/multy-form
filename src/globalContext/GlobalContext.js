import React, { useContext, useReducer, createContext } from "react";
import { UserReducer } from "./UserReducer";

const initialState = {
  users: [
    { id: 1,name:"hamzah", email: "hamzah@abc.com", password: "hamzahabc" },
    { id: 2, name:"saleem", email: "saleem@abc.com", password: "saleemabc" },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const addUser = (newUser) => {
    dispatch({
      type: "ADD_USER",
      payload: newUser,
    });
  };

  return (
    <GlobalContext.Provider value={{ users: state.users, addUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
