import React, { useContext, useEffect, useState } from 'react';
import MainMenu from '../components/MainMenu';
import SideMenu from '../components/SideMenu';
import { BookContext } from '../context/bookContext';
import { API } from './../config/api';

const Home = () => {
  const [categories, setCategories] = useState([]);
  // const [books, setBooks] = useState([]);
  const { dispatch } = useContext(BookContext);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await API.get('/categories');

        setCategories(res.data.data);
      } catch (err) {
        console.log(err.response);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await API.get('/approved-books');
        dispatch({
          type: 'GET_BOOKS',
          payload: res.data.data,
        });
        // setBooks(res.data.data);
      } catch (err) {
        console.log(err.response);
      }
    };

    getBooks();
  }, [dispatch]);

  return (
    <div className="container home-page">
      <SideMenu />
      <MainMenu categories={categories} />
    </div>
  );
};

export default Home;
