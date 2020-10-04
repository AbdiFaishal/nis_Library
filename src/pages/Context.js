import React, { useState } from 'react';
import '../Context.css';
import BookList from '../components/latihanContext/BookList';
import Navbar from '../components/latihanContext/Navbar';
import ThemeContextProvider from '../context/themeContext';
import ThemeToggle from '../components/latihanContext/ThemeToggle';
import { AuthContextProvider } from '../context/authContext';
import BookContextProvider from '../context/bookContext';
// import SongList from '../components/latihanContext/SongList';

const Context = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
};

// const Context = () => {
//   return (
//     <div className="App">
//       <SongList />
//     </div>
//   );
// };

export default Context;
