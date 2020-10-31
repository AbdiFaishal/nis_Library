import React, { useState } from 'react';
import arrowIcon from '../img/icons/V.png';
import ListCardBook from './ListCardBook';

const ListBook = ({ categories }) => {
  const [category, setCategory] = useState('');
  const changeCategory = (category) => {
    setCategory(category);
  };
  return (
    <div className="list-book">
      <div className="list-category">
        <h1>List Book</h1>
        <div className="dropdown">
          <button className="btn btn-category">
            <img src={arrowIcon} alt="" />
            Category
          </button>
          <div className="dropdown-content">
            <p onClick={() => changeCategory('all')}>All</p>
            {categories &&
              categories.map((category) => {
                return (
                  <p
                    key={category.id}
                    onClick={() => changeCategory(category.name.toLowerCase())}
                  >
                    {category.name}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
      <ListCardBook category={category} />
    </div>
  );
};

export default ListBook;
