import React from 'react';
import Checkmark from './common/Checkmark/Checkmark';
import LoadingSpinner from './common/LoadingSpinner/LoadingSpinner';
import ConfirmModal from './common/ConfirmModal';

const UploadAvatar = ({
  handleCloseModal,
  handleSubmit,
  uploadLoading,
  message,
}) => {
  return (
    <div className="modal-parent">
      <div className="modal-background" onClick={handleCloseModal} />
      {uploadLoading ? (
        <ConfirmModal>
          <LoadingSpinner />
        </ConfirmModal>
      ) : message ? (
        <ConfirmModal>
          <Checkmark />
        </ConfirmModal>
      ) : (
        <ConfirmModal>
          <h1>Upload Photo Profile</h1>
          <p>Are you sure want to change your photo profile?</p>
          <div className="btn-group-confirm">
            <button className="btn" onClick={handleCloseModal}>
              No
            </button>
            <button className="btn" onClick={handleSubmit}>
              Yes
            </button>
          </div>
        </ConfirmModal>
      )}
    </div>
  );
};

export default UploadAvatar;
