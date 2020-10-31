import React from 'react';
import { useHistory } from 'react-router-dom';

const CardBook = (props) => {
  let history = useHistory();

  const moveToDetailBook = (id) => {
    history.push(`/detail/${id}`);
  };

  return (
    <div className="card-book-container">
      <div className="card-book" onClick={() => moveToDetailBook(props.id)}>
        <img src={props.image} alt="" />
        <div className="book-desc">
          <p className="title">{props.title}</p>
          <p className="author">{props.user.fullName}</p>
        </div>
      </div>
      {props.status === 'Waiting' && (
        <div className="book-waiting">
          <p>Waiting to be verified</p>
        </div>
      )}
    </div>
  );
};

export default CardBook;
