import React from 'react';
import SideMenu from '../components/SideMenu';

const AddBook = () => {
  return (
    <div className="container add-book">
      <SideMenu />
      <div className="add-book-form">
        <h1>Add Book</h1>
        <form>
          <input className="input-text" type="text" placeholder="Title" />
          <input
            className="input-text"
            type="text"
            placeholder="Publication Date"
          />
          <input className="input-text" type="text" placeholder="Category" />
          <input className="input-text" type="text" placeholder="Pages" />
          <input className="input-text" type="text" placeholder="ISBN" />
          <textarea placeholder="About this book" />

          <input
            className="input-file"
            type="file"
            id="file-box"
            style={{ color: 'transparent' }}
          />
          <label className="label-file-box" htmlFor="file-box">
            Attache Book File
          </label>
        </form>
        <button className="btn btn-add-book-form">Add Book</button>
      </div>
    </div>
  );
};

export default AddBook;
