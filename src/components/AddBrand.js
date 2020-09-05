import React, { useState } from 'react';
import axios from 'axios';

const AddBrand = ({ fetchData }) => {
  const [state, setState] = useState({
    name: '',
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
    if (state.name.length) {
      try {
        const post = await axios.post('http://localhost:5000/brand', {
          name: state.name,
        });
        setMessage(post.data.message);
      } catch (err) {
        console.log(err);
      }
    }
    setState({ name: '' });
    fetchData();
  };

  return (
    <div className="add-customer">
      <h1>Tambah Brand</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Brand</label>
          <input
            onChange={handleChange}
            id="name"
            type="text"
            value={state.name}
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

export default AddBrand;
