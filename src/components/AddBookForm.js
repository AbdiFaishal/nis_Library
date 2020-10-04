import React from 'react';

const AddBookForm = () => {
  return (
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
  );
};

export default AddBookForm;
