import React from 'react';
import { createContext, useReducer } from 'react';

export const UserContext = createContext();

const initialState = {
  // loginModal: false,
  // registerModal: false,
  isLogin: false || JSON.parse(localStorage.getItem('isLogin')),
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};

export const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
