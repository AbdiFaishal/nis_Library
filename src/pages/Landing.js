import React, { useState } from 'react';
import MainIcon from '../components/MainIcon';
import Login from '../components/Login';
import Title from '../components/Title';
import Register from './../components/Register';

const Landing = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <div className="landing-page">
      <div className="container">
        <MainIcon />
        <Title setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen} />
        {loginOpen && (
          <Login
            setLoginOpen={setLoginOpen}
            setRegisterOpen={setRegisterOpen}
          />
        )}
        {registerOpen && (
          <Register
            setRegisterOpen={setRegisterOpen}
            setLoginOpen={setLoginOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Landing;
