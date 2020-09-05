import React, { useState } from 'react';
import axios from 'axios';

const AddCar = ({ fetchData }) => {
  const [state, setState] = useState({
    name: '',
    image: '',
    color: '',
    description: '',
    stock: 0,
    brand_id: 1,
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
    if (
      state.name.length &&
      state.image.length &&
      state.color.length &&
      state.description.length &&
      state.stock >= 0
    ) {
      // console.log('logic passed');
      try {
        const post = await axios.post('http://localhost:5000/car/', {
          name: state.name,
          image: state.image,
          color: state.color,
          description: state.description,
          brand_id: parseInt(state.brand_id),
          stock: parseInt(state.stock),
        });
        setMessage(post.data.message);
        fetchData();
        // console.log('post: ', post);
      } catch (err) {
        console.log(err);
      }
    }
    setState({
      name: '',
      image: '',
      color: '',
      description: '',
      stock: 0,
      brand_id: 1,
    });
  };

  return (
    <div className="add-customer">
      <h1>Tambah Mobil</h1>
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
          <label htmlFor="image">Image link</label>
          <input
            onChange={handleChange}
            id="image"
            type="text"
            value={state.image}
          />
        </div>
        <div>
          <label htmlFor="color">Warna</label>
          <input
            onChange={handleChange}
            id="color"
            type="text"
            value={state.color}
          />
        </div>
        <div>
          <label htmlFor="description">Deskripsi</label>
          <textarea
            onChange={handleChange}
            id="description"
            type="textarea"
            value={state.description}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock</label>
          <input
            onChange={handleChange}
            id="stock"
            type="number"
            value={state.stock}
          />
        </div>
        <div>
          <label htmlFor="brand_id">Brand</label>
          <select
            name="brand_id"
            id="brand_id"
            onChange={handleChange}
            value={state.brand_id}
          >
            <option value="1">Honda</option>
            <option value="2">Mitsubishi</option>
            <option value="3">Nissan</option>
          </select>
        </div>
        <div>
          <button>Button</button>
        </div>
        <p>{message && message}</p>
      </form>
    </div>
  );
};

export default AddCar;
