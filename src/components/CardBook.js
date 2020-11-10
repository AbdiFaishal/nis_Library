import React from 'react';
import { useHistory } from 'react-router-dom';

const CardBook = (props) => {
  let history = useHistory();

  const convertString = (string, limit = 32) => {
    const newString = [];
    if (string.length > limit) {
      string.split(' ').reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
          newString.push(cur);
        }
        return acc + cur.length;
      }, 0);

      // return the result
      return `${newString.join(' ')}...`;
    } else {
      return string;
    }
  };

  const moveToDetailBook = (id) => {
    history.push(`/detail/${id}`);
  };

  return (
    <div className="card-book-container">
      <div className="card-book" onClick={() => moveToDetailBook(props.id)}>
        <img src={props.image} alt="" />
        <div className="book-desc">
          <p className="title">{convertString(props.title)}</p>
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
