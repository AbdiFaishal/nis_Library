import React from 'react';
import Ruler from '../components/common/Ruler';

const BookDesc = ({
  bookDetail,
  bookmarkState,
  checkBookmark,
  isBookmark,
  params,
  addLibrary,
  moveToReadBook,
}) => {
  return (
    <div className="detail-book-main">
      <div className="book-desc">
        <div className="book-cover">
          <img src={bookDetail.image} alt="" />
        </div>
        <div className="book-info">
          <div className="book-title-author">
            <h1>{bookDetail.title}</h1>
            <p>{bookDetail.user && bookDetail.user.fullName}</p>
          </div>
          <div className="book-date">
            <p className="book-header">Publication date</p>
            <p className="book-header-content">{bookDetail.publication}</p>
          </div>
          <div className="book-category">
            <p className="book-header">Category</p>
            <p className="book-header-content">
              {bookDetail.category && bookDetail.category.name}
            </p>
          </div>
          <div className="book-page-info">
            <p className="book-header">Pages</p>
            <p className="book-header-content">{bookDetail.pages}</p>
          </div>
          <div className="book-isbn">
            <p className="book-header">ISBN</p>
            <p className="book-header-content">{bookDetail.ISBN}</p>
          </div>
        </div>
      </div>
      <Ruler addClass="ruler-book-detail" />
      <div className="book-synopsis">
        <div>
          <p>{bookDetail.aboutBook}</p>
        </div>
        <div className="btn-detail-group">
          {isBookmark ? null : bookmarkState.bookmarks.length &&
            checkBookmark(bookmarkState.bookmarks, params.id) ? null : (
            <button onClick={addLibrary} className="btn btn-bookmark">
              Add Library
            </button>
          )}
          <button className="btn " onClick={() => moveToReadBook(params.id)}>
            Read Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDesc;
