import React from 'react';
import Checkmark from './common/Checkmark/Checkmark';
import LoadingSpinner from './common/LoadingSpinner/LoadingSpinner';
import ConfirmModal from './common/ConfirmModal';

const AdminConfirm = ({
  setModalOpen,
  handleSubmit,
  loading,
  message,
  choice,
  bookId,
}) => {
  return (
    <div className="modal-parent">
      <div className="modal-background" onClick={() => setModalOpen(false)} />
      {loading ? (
        <ConfirmModal>
          <LoadingSpinner />
        </ConfirmModal>
      ) : message ? (
        <ConfirmModal>
          <Checkmark message="Done!" />
        </ConfirmModal>
      ) : (
        <ConfirmModal>
          <h1>Book Verification</h1>
          <p>
            Are you sure want to <strong className="strong">{choice}</strong>{' '}
            this book?
          </p>
          <div className="btn-group-confirm">
            <button className="btn" onClick={() => setModalOpen(false)}>
              No
            </button>
            <button className="btn" onClick={() => handleSubmit(bookId)}>
              Yes
            </button>
          </div>
        </ConfirmModal>
      )}
    </div>
  );
};

export default AdminConfirm;
