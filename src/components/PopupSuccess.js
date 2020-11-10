import React from 'react';

const PopupSuccess = ({ setPopupOpen }) => {
  return (
    <div className="modal-parent">
      <div
        onClick={() => setPopupOpen(false)}
        className="modal-background"
      ></div>
      <div className="popup-success">
        <p>New book has been added to bookmark successfully</p>
      </div>
    </div>
  );
};

export default PopupSuccess;
