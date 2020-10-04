import React from 'react';
import { useHistory } from 'react-router-dom';

const CardBook = (props) => {
  let history = useHistory();

  const moveToDetailBook = (id) => {
    history.push(`/detail/${id}`);
  };
  return (
    <div onClick={() => moveToDetailBook(props.id)} className="card-book">
      <img src={props.image} alt="" />
      <div className="book-desc">
        <p className="title">{props.title}</p>
        <p className="author">{props.author}</p>
      </div>
    </div>
  );
};

export default CardBook;
