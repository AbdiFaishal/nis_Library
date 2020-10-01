import React from 'react';
import arrowIcon from '../img/icons/V.png';
import ListCardBook from './ListCardBook';

const ListBook = () => {
  return (
    <div className="list-book">
      <div className="list-category">
        <h1>List Book</h1>
        <button className="btn btn-category">
          <img src={arrowIcon} alt="" />
          Category
        </button>
      </div>
      <ListCardBook />
    </div>
  );
};

export default ListBook;
