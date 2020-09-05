import React, { useState } from 'react';
import axios from 'axios';

const AddCustomer = ({ fetchData }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    address: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('state: ', state);
    if (state.name.length && state.email.length && state.address.length) {
      console.log('logic passed');
      try {
        const post = await axios.post('http://localhost:5000/customer/', {
          name: state.name,
          email: state.email,
          address: state.address,
        });
        fetchData();
        setMessage(post.data.message);
        console.log('post: ', post);
      } catch (err) {
        console.log(err);
      }
    }
    setState({
      name: '',
      email: '',
      address: '',
    });
  };

  return (
    <div className="add-customer">
      <h1>Tambah Customer</h1>
      <form onSubmit={handleSubmit} id="addVideoForm">
        <div>
          <label htmlFor="name">Nama</label>
          <input
            onChange={handleChange}
            id="name"
            type="text"
            value={state.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            id="email"
            type="email"
            value={state.email}
          />
        </div>
        <div>
          <label htmlFor="address">Alamat</label>
          <input
            onChange={handleChange}
            id="address"
            type="text"
            value={state.address}
          />
        </div>
        <div>
          <button>Button</button>
        </div>
        <p>{message && message}</p>
      </form>
    </div>
  );
};

export default AddCustomer;
