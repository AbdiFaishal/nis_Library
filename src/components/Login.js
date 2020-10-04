import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const Login = ({ setLoginOpen, setRegisterOpen }) => {
  const { dispatch } = useContext(UserContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  let history = useHistory();

  const closeModal = (e) => {
    setLoginOpen(false);
  };

  const moveToRegister = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    if (email === 'abdi.faishal@gmail.com' && password === 'asd1234') {
      dispatch({ type: 'LOGIN' });
      localStorage.setItem('isLogin', true);
      history.push('/home');
    } else {
      console.log('login fail');
    }
  };

  return (
    <>
      <div className="modal" onClick={closeModal}></div>
      <div className="login-modal">
        <h1>Sign In</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.password}
            type="password"
            placeholder="Password"
          />
          <button className="btn">Sign In</button>
        </form>
        <p>
          Don't have an account ? Click{' '}
          <Link to="/" onClick={moveToRegister}>
            Here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
