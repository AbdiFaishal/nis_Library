import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { UserContextProvider } from './context/userContext';
import { BookContextProvider } from './context/bookContext';
import { BookmarkContextProvider } from './context/bookmarkContext';

ReactDOM.render(
  <UserContextProvider>
    <BookContextProvider>
      <BookmarkContextProvider>
        <App />
      </BookmarkContextProvider>
    </BookContextProvider>
  </UserContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
