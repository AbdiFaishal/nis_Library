import React, { useContext } from 'react';
import { BookmarkContext } from '../context/bookmarkContext';
import CardBook2 from './CardBook2';
// import CardBook from './CardBook';

const LibraryListBook = () => {
  const { state } = useContext(BookmarkContext);
  console.log('state: ', state.bookmarks);

  return (
    <div className="book-cards">
      {state.bookmarks.map((book) => {
        return <CardBook2 key={book.id} {...book} />;
      })}
    </div>
  );
};

export default LibraryListBook;
