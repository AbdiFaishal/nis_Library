import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../img/icons/userIcon.png';
import bookIcon from '../img/icons/bookIcon.png';
import addBookIcon from '../img/icons/addBookIcon.png';
import logoutIcon from '../img/icons/logoutIcon.png';
import Ruler from './common/Ruler';

const SideNavbar = () => {
  return (
    <div className="side-nav">
      <ul>
        <Ruler />
        <li>
          <Link to="/profile">
            <img src={userIcon} alt="" />
            Profile
          </Link>
        </li>
        <li>
          <Link to="mylibrary">
            <img src={bookIcon} alt="" />
            My Library
          </Link>
        </li>
        <li>
          <Link to="addbook">
            <img src={addBookIcon} alt="" />
            Add Book
          </Link>
        </li>
        <Ruler />
        <li>
          <Link to="/">
            <img src={logoutIcon} alt="" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
