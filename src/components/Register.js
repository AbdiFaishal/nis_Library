import React, { useState } from 'react';

const Register = ({ setLoginOpen }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const closeModal = (e) => {
    setLoginOpen(false);
  };

  return (
    <>
      <div className="modal" onClick={closeModal}></div>
      <div className="login-modal">
        <h1>Sign In</h1>
        <form>
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
          Don't have an account ? Click <a href="#">Here</a>
        </p>
      </div>
    </>
  );
};

export default Register;
