import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const Title = ({ setLoginOpen, setRegisterOpen }) => {
  const { state } = useContext(UserContext);
  let history = useHistory();

  const signInOnClick = () => {
    if (state.isLogin) {
      if (state.user.role === 'admin') {
        history.push('/admin');
      } else {
        history.push('/home');
      }
    }
    setLoginOpen(true);
  };
  return (
    <div className="title">
      <h1>
        <span>Your</span> library anywhere
      </h1>
      <p>
        Sign-up today and receive unlimited accesss to all of your reading -
        share your book.
      </p>
      <button className="btn btn-signup" onClick={() => setRegisterOpen(true)}>
        Sign Up
      </button>
      <button className="btn btn-signin" onClick={signInOnClick}>
        Sign In
      </button>
    </div>
  );
};

export default Title;
