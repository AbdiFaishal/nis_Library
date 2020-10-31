import React, { createContext, useReducer } from 'react';

export const BookContext = createContext();

const initialState = {
  books: [],
  allBooks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        books: action.payload,
      };

    case 'GET_ALL_BOOKS':
      return {
        ...state,
        allBooks: action.payload,
      };
    default:
      return state;
  }
};

export const BookContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
