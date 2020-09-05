import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import AddCar from '../../components/AddCar';
import AddBrand from '../../components/AddBrand';
import AddCustomer from './../../components/AddCustomer';
import Modal from '../../components/Modal';

const App = () => {
  const [cars, setCars] = useState([]);
  const [detailCar, setDetailCar] = useState({});
  const [formState, setFormState] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const chooseForm = () => {
    if (formState === 'add-car') {
      return <AddCar fetchData={fetchData} />;
    } else if (formState === 'add-brand') {
      return <AddBrand fetchData={fetchData} />;
    } else if (formState === 'add-customer') {
      return <AddCustomer fetchData={fetchData} />;
    } else {
      return null;
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/car/');
      setCars(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDataById = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/car/${id}`);
      setDetailCar(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDetail = (id) => {
    console.log(id);
    fetchDataById(id);
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <h1>Dealer Mobil Abdi Makmur Jaya</h1>
        </div>
        <div className="group-btn">
          <button onClick={() => setFormState('add-car')}>Tambah Mobil</button>
          <button onClick={() => setFormState('add-customer')}>
            Tambah Customer
          </button>
          <button onClick={() => setFormState('add-brand')}>
            Tambah Brand
          </button>
        </div>
      </div>
      <div className="main-content">
        {cars.length
          ? cars.map((car) => {
              return (
                <Card
                  onClick={() => handleDetail(car.id)}
                  key={car.id}
                  {...car}
                />
              );
            })
          : null}
      </div>
      <Modal
        detailCar={detailCar}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      {chooseForm()}
    </div>
  );
};

export default App;
