import React from 'react';

const CardBook = (props) => {
  return (
    <div className="card-book">
      <img src={props.image} alt="" />
      <div className="book-desc">
        <p className="title">{props.title}</p>
        <p className="author">{props.author}</p>
      </div>
    </div>
  );
};

export default CardBook;
