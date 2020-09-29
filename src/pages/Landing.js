import React, { useState } from 'react';
import Icon from '../components/Icon';
import Login from '../components/Login';
import Title from '../components/Title';

const Landing = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <div className="landing-page">
      <div className="container">
        <Icon />
        <Title loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
        {loginOpen && <Login setLoginOpen={setLoginOpen} />}
      </div>
    </div>
  );
};

export default Landing;
