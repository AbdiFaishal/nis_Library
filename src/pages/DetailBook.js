import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PopupSuccess from '../components/PopupSuccess';
import SideMenu from '../components/SideMenu';
import { BookmarkContext } from '../context/bookmarkContext';
import { UserContext } from '../context/userContext';

import { API } from './../config/api';
import BookDesc from './../components/BookDesc';
import LoadingSpinner from './../components/common/LoadingSpinner/LoadingSpinner';

const DetailBook = () => {
  const { state: userState } = useContext(UserContext);
  const { state: bookmarkState, dispatch } = useContext(BookmarkContext);

  const [bookDetail, setBookDetail] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);

  const history = useHistory();
  const params = useParams();

  const moveToReadBook = (id) => {
    history.push(`/read-book/${id}`);
  };

  const addLibrary = async () => {
    try {
      await API.post('/bookmark', {
        userId: userState.user.id,
        bookId: params.id,
      });
      setPopupOpen(true);
      setIsBookmark(true);
    } catch (err) {
      setIsBookmark(false);
      console.log(err.response);
    }
  };

  const checkBookmark = (target, id) => {
    return target.findIndex((item) => item.book.id === parseInt(id)) !== -1;
  };

  useEffect(() => {
    const getBookmark = async () => {
      try {
        setLoading(true);
        const res = await API.get('/bookmarks');
        dispatch({
          type: 'GET_BOOKMARKS',
          payload: res.data.data,
        });
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getBookmark();
  }, [dispatch]);

  useEffect(() => {
    const getDetailBook = async () => {
      try {
        const res = await API.get(`/book/${params.id}`);
        setBookDetail(res.data.data);
      } catch (err) {
        console.log(err.response);
        setErrorMessage(err.response.data.message);
      }
    };
    getDetailBook();
  }, [params.id]);

  return (
    <div className="container detail-book">
      <SideMenu />
      {loading ? (
        <LoadingSpinner />
      ) : errorMessage ? (
        <div className="error-message book-not-exist">
          <div>
            <h1>{`Error: ${errorMessage}!`}</h1>
            <p>Try another book's id</p>
          </div>
        </div>
      ) : (
        <BookDesc
          bookDetail={bookDetail}
          bookmarkState={bookmarkState}
          checkBookmark={checkBookmark}
          isBookmark={isBookmark}
          params={params}
          addLibrary={addLibrary}
          moveToReadBook={moveToReadBook}
        />
      )}
      {popupOpen && <PopupSuccess setPopupOpen={setPopupOpen} />}
    </div>
  );
};

export default DetailBook;
