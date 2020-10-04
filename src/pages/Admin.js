import React from 'react';
import MainIcon from './../components/MainIcon';
import userProfile from '../img/profilePic.png';

import ceklisIcon from '../img/icons/ceklisIcon.png';
import ButtonVerif from '../components/ButtonVerif';

let bookVerif = [
  {
    id: 1,
    author: 'Randall Munroe',
    isbn: '9781789807554',
    ebook: 'what if ? absurd Question.pdf',
    status: 'Approve',
    action: 'complete',
  },
  {
    id: 2,
    author: 'Morris Willimson',
    isbn: '9781789807555',
    ebook: 'Glyph.pdf',
    status: 'Approve',
    action: 'complete',
  },
  {
    id: 3,
    author: 'J. K. Rowling',
    isbn: '9781789807666',
    ebook: 'Harrypoter.pdf',
    status: 'Cancel',
    action: 'wait',
  },
  {
    id: 4,
    author: 'Rachel Hartman',
    isbn: '9781789807576',
    ebook: 'tessonroad.jpg',
    status: 'Waiting to be verified',
    action: 'waiting',
  },
  {
    id: 5,
    author: 'Aziz Oni On',
    isbn: '9781789807709',
    ebook: '7ds.jpg',
    status: 'Waiting to be verified',
    action: 'waiting',
  },
  {
    id: 6,
    author: 'Sugeng No Pants',
    isbn: '9781789807000',
    ebook: 'fixyou.jpg',
    status: 'Waiting to be verified',
    action: 'waiting',
  },
];

const Admin = () => {
  const addCustomClass = (status) => {
    if (status === 'Approve') {
      return 'approved';
    } else if (status === 'Cancel') {
      return 'canceled';
    } else {
      return 'waiting';
    }
  };

  const addCustomIcon = (action) => {
    if (action === 'complete') {
      return <img src={ceklisIcon} alt="ceklis icon" />;
    } else {
      return <ButtonVerif />;
    }
  };
  return (
    <div className="admin-page">
      <div className="navbar container">
        <MainIcon />
        <div className="user-avatar">
          <img src={userProfile} alt="" />
        </div>
      </div>
      <div className="container book-verification">
        <h1>Book verification</h1>

        <table className="admin-table">
          <tr>
            <th>No</th>
            <th>Users or Author</th>
            <th>ISBN</th>
            <th>E-book</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {bookVerif.map((book, index) => {
            return (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.ebook}</td>
                <td className={addCustomClass(book.status)}>{book.status}</td>
                <td>{addCustomIcon(book.action)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Admin;
