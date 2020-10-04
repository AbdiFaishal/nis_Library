import React from 'react';
import SideMenu from '../components/SideMenu';
import ListCardBook from '../components/ListCardBook';

const MyLibrary = () => {
  return (
    <div className="container my-library">
      <SideMenu />
      <div className="books-library">
        <h1>My Library</h1>
        <ListCardBook />
      </div>
    </div>
  );
};

export default MyLibrary;
