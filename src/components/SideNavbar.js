import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import userIcon from '../img/icons/userIcon.png';
import adminIcon from '../img/icons/admin.png';
import bookIcon from '../img/icons/bookIcon.png';
import addBookIcon from '../img/icons/addBookIcon.png';
import logoutIcon from '../img/icons/logoutIcon.png';
import Ruler from './common/Ruler';
import { UserContext } from '../context/userContext';

const SideNavbar = () => {
  const { state, dispatch } = useContext(UserContext);

  let { pathname } = useLocation();

  const userLogout = () => {
    dispatch({ type: 'LOGOUT' });
    // localStorage.removeItem('isLogin');
  };
  return (
    <div className="side-nav">
      <ul>
        <Ruler />
        {state.user.role === 'admin' && (
          <li>
            <Link
              className={pathname === '/admin' ? 'active' : 'admin-link'}
              to="/admin"
            >
              <img src={adminIcon} alt="" />
              Admin
            </Link>
          </li>
        )}
        <li>
          <Link
            className={pathname === '/profile' ? 'active' : null}
            to="/profile"
          >
            <img src={userIcon} alt="" />
            Profile
          </Link>
        </li>

        <li>
          <Link
            className={pathname === '/mylibrary' ? 'active' : null}
            to="/mylibrary"
          >
            <img src={bookIcon} alt="" />
            My Library
          </Link>
        </li>

        <li>
          <Link
            className={pathname === '/addbook' ? 'active' : null}
            to="/addbook"
          >
            <img src={addBookIcon} alt="" />
            Add Book
          </Link>
        </li>

        <Ruler />
        <li>
          <Link className="btn-user-logout" to="/" onClick={userLogout}>
            <img src={logoutIcon} alt="" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
