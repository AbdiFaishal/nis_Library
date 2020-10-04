import React from 'react';
import { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
  carts: [
    {
      id: 1,
      nama: 'Celana Panjang',
    },
    {
      id: 2,
      nama: 'Baju',
    },
    {
      id: 3,
      nama: 'Celana Renang',
    },
  ],
  isLogin: false,
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

export const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {props.children}
    </CartContext.Provider>
  );
};
