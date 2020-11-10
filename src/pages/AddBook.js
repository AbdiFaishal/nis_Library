import React, { useState, useEffect } from 'react';
import PopupAddBook from '../components/PopupAddBook';
import SideMenu from '../components/SideMenu';
import { API } from './../config/api';

const AddBook = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [textError, setTextError] = useState(null);
  const [loadingCategory, setLoadingCategory] = useState(false);
  const [bookData, setBookData] = useState({
    title: '',
    publication: '',
    categoryId: '',
    pages: '',
    ISBN: '',
    aboutBook: '',
    file: null,
    image: null,
  });
  const {
    title,
    publication,
    categoryId,
    pages,
    ISBN,
    aboutBook,
    file,
    image,
  } = bookData;

  const closeModal = () => {
    setPopupOpen(false);
    setTextError(null);
  };

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append('title', title);
      formData.append('publication', publication);
      formData.append('categoryId', categoryId);
      formData.append('pages', pages);
      formData.append('ISBN', ISBN);
      formData.append('aboutBook', aboutBook);
      formData.append('image', image);
      formData.append('file', file);

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      setLoading(true);
      const res = await API.post(`/book`, formData, config);
      setLoading(false);
      setTextError(null);
      setPopupOpen(true);
      setBookData({
        title: '',
        publication: '',
        category: '',
        pages: '',
        ISBN: '',
        aboutBook: '',
        file: null,
        image: null,
      });
      console.log('res: ', res);
    } catch (err) {
      console.log(err.response);
      setLoading(false);
      setTextError(err.response.data.error.message);
    }
  };

  useEffect(() => {
    setTextError('');
    const getCategories = async () => {
      try {
        setLoadingCategory(true);
        const res = await API.get('/categories');
        // console.log(res);
        setCategories(res.data.data);
        setLoadingCategory(false);
      } catch (err) {
        console.log(err.response);
        setLoadingCategory(false);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="container add-book">
      <SideMenu />
      <div className="add-book-form">
        <h1>Add Book</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => handleChange(e)}
            name="title"
            className="input-text"
            type="text"
            placeholder="Title"
          />
          <input
            value={publication}
            onChange={(e) => handleChange(e)}
            name="publication"
            className="input-text"
            type="text"
            placeholder="Publication Date"
          />
          <select
            value={categoryId}
            onChange={(e) => handleChange(e)}
            placeholder="Category"
            className="input-text"
            name="categoryId"
          >
            <option className="option-hidden" value="" hidden>
              {loadingCategory ? 'Loading...' : 'Category'}
            </option>
            {categories &&
              categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>

          <input
            value={pages}
            onChange={(e) => handleChange(e)}
            name="pages"
            className="input-text"
            type="text"
            placeholder="Pages"
          />
          <input
            value={ISBN}
            onChange={(e) => handleChange(e)}
            name="ISBN"
            className="input-text"
            type="text"
            placeholder="ISBN"
          />
          <textarea
            value={aboutBook}
            onChange={(e) => handleChange(e)}
            name="aboutBook"
            placeholder="About this book"
          />
          <div className="attache-book-cover">
            <input
              // value={image}
              onChange={(e) => handleFileChange(e)}
              name="image"
              className="input-file"
              type="file"
              id="image-box"
              style={{ color: 'transparent' }}
            />
            <label name="" className="label-file-box" htmlFor="image-box">
              {image ? image.name : 'Attache Book Cover'}
            </label>
          </div>

          <div className="attache-book-file">
            <input
              // value={file}
              onChange={(e) => handleFileChange(e)}
              name="file"
              className="input-file"
              type="file"
              id="file-box"
              style={{ color: 'transparent' }}
            />
            <label name="" className="label-file-box" htmlFor="file-box">
              {file ? file.name : 'Attache Book File'}
            </label>
          </div>

          <button className="btn btn-add-book-form" disabled={loading}>
            {loading ? 'Loading...' : 'Add Book'}
          </button>
        </form>
      </div>
      {popupOpen ? (
        <PopupAddBook closeModal={closeModal} />
      ) : (
        textError && (
          <PopupAddBook textError={textError} closeModal={closeModal} />
        )
      )}
    </div>
  );
};

export default AddBook;
