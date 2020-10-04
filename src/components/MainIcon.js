import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../img/icons/flat.png';

const MainIcon = () => {
  const history = useHistory();

  const moveToHome = () => {
    history.push('/home');
  };
  return (
    <div onClick={moveToHome} className="logo">
      <img src={Logo} alt="Logo Book" />
      <p>Lib'rary</p>
    </div>
  );
};

export default MainIcon;
