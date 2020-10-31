import React, { useState, useContext, useEffect } from 'react';
import MainIcon from './../components/MainIcon';

import ceklisIcon from '../img/icons/ceklisIcon.png';
import ButtonVerif from '../components/ButtonVerif';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import defaultAvatar from '../img/no-profile-picture.png';
// import { BookContext } from './../context/bookContext';
import { API } from './../config/api';
// import ConfirmModal from '../components/common/ConfirmModal';
import AdminConfirm from '../components/AdminConfirm';

const Admin = () => {
  const { state, dispatch } = useContext(UserContext);
  // const { state: bookState, dispatch } = useContext(BookContext);
  const history = useHistory();
  const [books, setBooks] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [choice, setChoice] = useState(null);
  const [bookId, setBookId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const addCustomClass = (status) => {
    if (status === 'Approved') {
      return 'approved';
    } else if (status === 'Canceled') {
      return 'canceled';
    } else {
      return 'waiting';
    }
  };

  const addCustomIcon = (action, id) => {
    if (action === 'Approved') {
      return <img src={ceklisIcon} alt="ceklis icon" />;
    } else {
      return (
        <ButtonVerif
          action={action}
          setChoice={setChoice}
          setModalOpen={setModalOpen}
          getBooks={getBooks}
          handleSubmit={handleSubmit}
          setMessage={setMessage}
          setBookId={setBookId}
          id={id}
        />
      );
    }
  };

  const editFormat = (input) => {
    if (input) {
      const index = input.lastIndexOf('Z');
      return input.slice(index + 1);
    }
    return 'File Null';
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    // localStorage.removeItem('isLogin');
  };

  const handleSubmit = async (id) => {
    try {
      let status;
      if (choice === 'approve') {
        status = 'Approved';
      } else {
        status = 'Canceled';
      }
      setLoading(true);
      const res = await API.patch(`/book-verify/${id}`, {
        status,
      });
      getBooks();
      // console.log('res: ', res);
      setMessage(res.data.message);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err.response);
    }
  };

  const getBooks = async () => {
    try {
      const res = await API.get('/books');
      setBooks(res.data.data);

      // setBooks(res.data.data);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="admin-page">
      <div className="navbar container">
        <MainIcon />
        <div className="admin-avatar">
          <img
            onClick={() => setDropdownOpen(!dropdownOpen)}
            src={state.user.avatar ? state.user.avatar : defaultAvatar}
            alt=""
          />
          {dropdownOpen && (
            <div className="dropdown-admin">
              <p onClick={() => history.push('/admin/addbook')}>Add Book</p>
              <p onClick={handleLogout}>Logout</p>
            </div>
          )}
        </div>
      </div>
      <div className="container book-verification">
        <h1>Book verification</h1>

        <table className="admin-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Users or Author</th>
              <th>ISBN</th>
              <th>E-book</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              return (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>{book.user.fullName}</td>
                  <td>{book.ISBN}</td>
                  <td>
                    <Link to={book.file ? book.file : '/admin'}>
                      {editFormat(book.file)}
                    </Link>
                  </td>
                  <td className={books.length && addCustomClass(book.status)}>
                    {book.status}
                  </td>
                  <td>{addCustomIcon(book.status, book.id)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {modalOpen && (
        <AdminConfirm
          choice={choice}
          setModalOpen={setModalOpen}
          handleSubmit={handleSubmit}
          bookId={bookId}
          loading={loading}
          message={message}
        />
      )}
    </div>
  );
};

export default Admin;
