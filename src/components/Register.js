import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ({ setRegisterOpen, setLoginOpen }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    fullName: '',
    gender: '',
    phone: '',
    address: '',
  });

  const closeModal = (e) => {
    setRegisterOpen(false);
  };

  const moveToLogin = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  return (
    <>
      <div className="modal" onClick={closeModal}></div>
      <div className="register-modal">
        <h1>Sign Up</h1>
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
          <input
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            value={form.fullname}
            type="text"
            placeholder="Full Name"
          />
          <select
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
            placeholder="Gender"
          >
            <option value="" hidden>
              Gender
            </option>
            <option value="laki-laki">Laki-laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
          <input
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            value={form.phone}
            type="text"
            placeholder="Phone"
          />
          <textarea
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            placeholder="Address"
          />
          <button className="btn">Sign Up</button>
        </form>
        <p>
          Already have an account ? Click{' '}
          <Link to="/" onClick={moveToLogin}>
            Here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
