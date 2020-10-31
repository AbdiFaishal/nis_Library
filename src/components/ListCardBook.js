import React from 'react';
import { useContext } from 'react';
import { BookContext } from '../context/bookContext';
import CardBook from './CardBook';

// import book1 from '../img/book-cards/book-card-1.png';
// import book2 from '../img/book-cards/book-card-2.png';
// import book3 from '../img/book-cards/book-card-3.png';
// import book4 from '../img/book-cards/book-card-4.png';

// const listBooks = [
//   {
//     id: 1,
//     title: 'What if? Absurd Questions',
//     author: 'Randall Munroe',
//     category: 'science',
//     image: book1,
//   },
//   {
//     id: 2,
//     title: 'Glyph: New look on things',
//     author: 'Morris Williamson',
//     category: 'education',
//     image: book2,
//   },
//   {
//     id: 3,
//     title: 'Harry Potter and Goblet of fire',
//     author: 'J. K. Rowling',
//     category: 'fantasy',
//     image: book3,
//   },
//   {
//     id: 4,
//     title: 'Tess on the Road',
//     author: 'Rachel Hartman',
//     category: 'fantasy',
//     image: book4,
//   },
// ];

const ListCardBook = ({ category }) => {
  const { state } = useContext(BookContext);

  return (
    <div className="book-cards">
      {category === 'all'
        ? state.books.map((book) => <CardBook key={book.id} {...book} />)
        : state.books
            .filter((book) =>
              book.category.name.toLowerCase().includes(category)
            )
            .map((book) => <CardBook key={book.id} {...book} />)}
    </div>
  );
};

export default ListCardBook;
