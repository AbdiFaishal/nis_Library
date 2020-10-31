import React from 'react';

const PopupSuccess = ({ setPopupOpen }) => {
  return (
    <>
      <div
        onClick={() => setPopupOpen(false)}
        className="modal-background"
      ></div>
      <div className="popup-success">
        <p>Your book has been added successfully</p>
      </div>
    </>
  );
};

export default PopupSuccess;
