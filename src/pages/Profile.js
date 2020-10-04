import React from 'react';
import CardBook from '../components/CardBook';
import SideMenu from '../components/SideMenu';
import profilePic from '../img/profilePic.png';

let books = [
  {
    id: 1,
    title: 'Blockchain with Hyperledger',
    author: 'Abdi Ganteng',
    image: require('../img/book-cards/book-card-5.png'),
  },
];

const Profile = () => {
  return (
    <div className="container profile-page">
      <SideMenu />
      <div className="user-profile">
        <div className="user-profile-detail">
          <h1>Profile</h1>
          <div className="user-card">
            <div className="user-info">
              <div className="email">
                <p>abdi.faishal@gmail.com</p>
                <p>Email</p>
              </div>
              <div className="gender">
                <p>Male</p>
                <p>Gender</p>
              </div>
              <div className="phone">
                <p>0813-9999-6969</p>
                <p>Mobile Phone</p>
              </div>
              <div className="address">
                <p>Perumahan Duta Mekar Asri Cileungsi, Kab. Bogor</p>
                <p>Address</p>
              </div>
            </div>
            <div className="user-change-profile">
              <img src={profilePic} alt="" />
              <button className="btn">Change Photo Profile</button>
            </div>
          </div>
        </div>
        <div className="my-books">
          <h1>My Books</h1>
          {books.map((book) => {
            return <CardBook key={book.id} {...book} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
