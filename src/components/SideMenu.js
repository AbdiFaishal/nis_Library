import React from 'react';
import MainIcon from './MainIcon';
import SideNavbar from './SideNavbar';
import UserProfile from './UserProfile';

const SideMenu = () => {
  return (
    <div className="side-menu">
      <MainIcon />
      <UserProfile />
      <SideNavbar />
    </div>
  );
};

export default SideMenu;
