import React from 'react';
import coverBook1 from '../img/coverBook1.png';
import ListBook from './ListBook';

const MainMenu = ({ categories }) => {
  return (
    <div className="main-menu">
      <div className="frame">
        <div className="frame-title">
          <h1>
            Share, read and <span>love</span>
          </h1>
          <p>Reading is fascinating</p>
        </div>
        <div className="frame-book">
          <img src={coverBook1} alt="Fix You Book" />
        </div>
      </div>
      <ListBook categories={categories} />
    </div>
  );
};

export default MainMenu;
