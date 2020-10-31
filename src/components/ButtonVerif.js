import React from 'react';

const ButtonVerif = ({
  setModalOpen,
  setChoice,
  handleSubmit,
  getBooks,
  setMessage,
  setBookId,
  id,
  action,
}) => {
  const handleModalOpen = (text) => {
    setModalOpen(true);
    setMessage('');
    setChoice(text);
    setBookId(id);
  };

  return (
    <div className="btn-verif-group">
      {action === 'Canceled' ? (
        <button onClick={() => handleModalOpen('approve')} className="btn">
          Approve
        </button>
      ) : (
        <>
          <button onClick={() => handleModalOpen('cancel')} className="btn">
            Cancel
          </button>
          <button onClick={() => handleModalOpen('approve')} className="btn">
            Approve
          </button>
        </>
      )}
      {/* <button onClick={() => handleModalOpen('cancel')} className="btn">
        Cancel
      </button>
      <button onClick={() => handleModalOpen('approve')} className="btn">
        Approve
      </button> */}
    </div>
  );
};

export default ButtonVerif;
