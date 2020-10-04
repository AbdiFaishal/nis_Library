import React from 'react';
import book1 from '../img/book-cards/book-card-1.png';
import book2 from '../img/book-cards/book-card-2.png';
import book3 from '../img/book-cards/book-card-3.png';
import book4 from '../img/book-cards/book-card-4.png';

import CardBook from './CardBook';
const listBooks = [
  {
    id: 1,
    title: 'What if? Absurd Questions',
    author: 'Randall Munroe',
    image: book1,
  },
  {
    id: 2,
    title: 'Glyph: New look on things',
    author: 'Morris Williamson',
    image: book2,
  },
  {
    id: 3,
    title: 'Harry Potter and Goblet of fire',
    author: 'J. K. Rowling',
    image: book3,
  },
  {
    id: 4,
    title: 'Tess on the Road',
    author: 'Rachel Hartman',
    image: book4,
  },
];

const ListCardBook = () => {
  return (
    <div className="book-cards">
      {listBooks.map((book) => {
        return <CardBook key={book.id} {...book} />;
      })}
    </div>
  );
};

export default ListCardBook;
