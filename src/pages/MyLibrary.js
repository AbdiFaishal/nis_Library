import React, { useState, useEffect, useContext } from 'react';
import SideMenu from '../components/SideMenu';

// import ListCardBook from '../components/ListCardBook';
import LibraryListBook from './../components/LibraryListBook';
import { API } from './../config/api';
import { BookmarkContext } from './../context/bookmarkContext';

import EmptyList from '../components/common/EmptyList';
import LoadingSpinner from '../components/common/LoadingSpinner/LoadingSpinner';

const MyLibrary = () => {
  const { state, dispatch } = useContext(BookmarkContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getBookmark = async () => {
      try {
        setLoading(true);
        const res = await API.get('/bookmarks');
        setLoading(false);
        dispatch({
          type: 'GET_BOOKMARKS',
          payload: res.data.data,
        });
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    getBookmark();
  }, [dispatch]);
  return (
    <div className="container my-library">
      <SideMenu />
      <div className="books-library">
        <h1>My Library</h1>
        {loading ? (
          <LoadingSpinner />
        ) : !state.bookmarks.length ? (
          <EmptyList text={'Your bookmark is empty'} />
        ) : (
          <LibraryListBook />
        )}
      </div>
    </div>
  );
};

export default MyLibrary;
