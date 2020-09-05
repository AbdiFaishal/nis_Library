import React from 'react';

const Card = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <img src={props.image} alt="" />
      <p className="title">{props.name}</p>
      <button>Beli</button>
    </div>
  );
};

export default Card;
