import React, { createContext, useReducer } from 'react';

export const BookmarkContext = createContext();

const initialState = {
  bookmarks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_BOOKMARKS':
      return {
        ...state,
        bookmarks: action.payload,
      };
    default:
      return state;
  }
};

export const BookmarkContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BookmarkContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BookmarkContext.Provider>
  );
};
