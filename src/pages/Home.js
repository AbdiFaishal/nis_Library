import React from 'react';
import MainMenu from '../components/MainMenu';
import SideMenu from '../components/SideMenu';

const Home = () => {
  return (
    <div className="container home-page">
      <SideMenu />
      <MainMenu />
    </div>
  );
};

export default Home;
