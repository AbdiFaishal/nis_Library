import React from 'react';
import axios from 'axios';

const Modal = ({ modalOpen, setModalOpen, detailCar }) => {
  const handleConfirmBuy = async (id) => {
    if (detailCar[0].stock > 0) {
      try {
        const res = await axios.patch(`http://localhost:5000/car/${id}`, {
          // ...detailCar[0],
          stock: detailCar[0].stock - 1,
        });
        setModalOpen(!modalOpen);
      } catch (err) {
        console.log(err);
      }
    }
    setModalOpen(!modalOpen);
  };

  if (!modalOpen) return null;
  if (!detailCar.length) return null;
  return (
    <div className="modal">
      <div className="confirm__modal">
        <div className="confirmation-text">
          <img src={detailCar[0].image} alt="" />
          <h1>{detailCar[0].name}</h1>
          <p>Description : {detailCar[0].description}</p>
          <p>Color : {detailCar[0].color}</p>
          <p>Stock: {detailCar[0].stock}</p>
        </div>
        <div className="btn-group-modal">
          <button
            className="btn-cancel"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Cancel
          </button>
          <button
            className="btn-ok"
            onClick={() => handleConfirmBuy(detailCar[0].id)}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
