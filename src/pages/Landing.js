import React, { useState } from 'react';
import Icon from '../components/Icon';
import Login from '../components/Login';
import Title from '../components/Title';
import Register from './../components/Register';

const Landing = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <div className="landing-page">
      <div className="container">
        <Icon />
        <Title setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen} />
        {loginOpen && <Login setLoginOpen={setLoginOpen} />}
        {registerOpen && <Register setRegisterOpen={setRegisterOpen} />}
      </div>
    </div>
  );
};

export default Landing;
