import React, { useState, useEffect } from 'react';
import MainIcon from '../components/MainIcon';
import {
  // EpubView,
  // EpubViewStyle,
  ReactReader,
  // ReactReaderStyle,
} from 'react-reader';

// import alice from '../epub/alice.epub';
// import prince from '../epub/the_little_prince.epub';
// import whatif from '../epub/What-if-serious.epub';
// import alice from '../epub/alices-adventures-in-wonderland.epub';

import { useParams } from 'react-router-dom';
import { API } from './../config/api';
import LoadingSpinner from '../components/common/LoadingSpinner/LoadingSpinner';

const ReadBook = () => {
  const params = useParams();
  const [book, setBook] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getBook = async () => {
      const id = params.id;
      try {
        setLoading(true);
        const res = await API.get(`/book/${id}`);
        setLoading(false);
        setBook(res.data.data);
      } catch (err) {
        console.log(err.response);
        setLoading(false);
        setErrorMessage(err.response.data.message);
      }
    };
    getBook();
  }, [params.id]);

  // console.log('epub: ', book);
  return (
    <div className="container">
      <MainIcon />

      {loading ? (
        <div className="read-book-loading">
          <LoadingSpinner />
          <p>Fetching file from the server, please wait...</p>
        </div>
      ) : errorMessage ? (
        <div className="read-book-loading">
          <h1>404</h1>
          <p>The book you are looking for is not found</p>
        </div>
      ) : (
        <div style={{ position: 'relative', height: '90vh' }}>
          {' '}
          <ReactReader
            url={book.file}
            title={book.title}
            location={'epubcfi(/6/2[cover]!/6)'}
            locationChanged={(epubcifi) => console.log(epubcifi)}
          />
        </div>
      )}
    </div>
  );
};

export default ReadBook;
