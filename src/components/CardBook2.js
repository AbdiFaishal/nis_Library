import React from 'react';
import { useHistory } from 'react-router-dom';

const CardBook2 = (props) => {
  let history = useHistory();

  const moveToDetailBook = (id) => {
    history.push(`/detail/${id}`);
  };

  return (
    <div onClick={() => moveToDetailBook(props.book.id)} className="card-book">
      <img src={props.book.image} alt="" />
      <div className="book-desc">
        <p className="title">{props.book.title}</p>
        <p className="author">{props.book.user.fullName}</p>
      </div>
    </div>
  );
};

export default CardBook2;
