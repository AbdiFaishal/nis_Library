import React from 'react';
import sadIcon from '../../img/icons/sad-icon.png';

const EmptyList = ({ text }) => {
  return (
    <div className="empty-book-list">
      <img src={sadIcon} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default EmptyList;
