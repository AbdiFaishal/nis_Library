import React from 'react';

const PopupAddBook = ({ setPopupOpen, textError, setTextError }) => {
  const closeModal = () => {
    setPopupOpen(false);
    setTextError(null);
  };

  console.log('setTextError: ', setTextError);
  return (
    <div className="modal-parent">
      <div onClick={closeModal} className="modal-background"></div>
      <div className="popup-addbook">
        <p>
          {textError
            ? textError
            : 'Thank you for adding your own books to our website, please wait 1 x 24 hours to verify whether this book is your writing'}
        </p>
      </div>
    </div>
  );
};

export default PopupAddBook;
