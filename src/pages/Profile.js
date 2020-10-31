import React, { useContext, useState } from 'react';
import { useEffect } from 'react';

import SideMenu from '../components/SideMenu';
import defaultAvatar from '../img/no-profile-picture.png';
import { UserContext } from './../context/userContext';
import { API } from './../config/api';

import CardBook from '../components/CardBook';
import UploadAvatar from '../components/UploadAvatar';
import EmptyList from '../components/common/EmptyList';

const Profile = () => {
  const { state, dispatch } = useContext(UserContext);
  const [ownedBooks, setOwnedBooks] = useState([]);
  const [bookLoading, setBookLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [uploadLoading, setUploadLoading] = useState(false);

  const [userData, setUserData] = useState({
    avatar: null,
  });

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    setUserData({ avatar: e.target.files[0] });
    setMessage('');
    setTimeout(() => {
      setModalOpen(true);
    }, 250);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('avatar', userData.avatar);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      setUploadLoading(true);
      const res = await API.patch(`/user/${state.user.id}`, formData, config);

      setUploadLoading(false);
      setMessage('Upload Success');
      setUserData({ avatar: null });

      const auth = await API.get('/auth');
      dispatch({
        type: 'USER_LOADED',
        payload: auth.data.data.user,
      });
    } catch (err) {
      console.log(err.response);
      setUserData({ avatar: null });
    }
  };

  useEffect(() => {
    const getBooks = async () => {
      try {
        setBookLoading(true);
        const res = await API.get('/owned-books');
        setBookLoading(false);
        setOwnedBooks(res.data.data);
      } catch (err) {
        setBookLoading(false);
        console.log(err);
      }
    };
    getBooks();
  }, []);

  return (
    <div className="container profile-page">
      <SideMenu />
      <div className="user-profile">
        <div className="user-profile-detail">
          <h1>Profile</h1>
          <div className="user-card">
            <div className="user-info">
              <div className="email">
                <p>{state.user.email}</p>
                <p>Email</p>
              </div>
              <div className="gender">
                <p>{state.user.gender}</p>
                <p>Gender</p>
              </div>
              <div className="phone">
                <p>{state.user.phone}</p>
                <p>Mobile Phone</p>
              </div>
              <div className="address">
                <p>{state.user.address}</p>
                <p>Address</p>
              </div>
            </div>
            <div className="user-change-profile">
              <img
                src={state.user.avatar ? state.user.avatar : defaultAvatar}
                alt=""
              />
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  // value={userData.avatar}
                  onChange={(e) => handleChange(e)}
                  name="avatar"
                  className="input-file"
                  type="file"
                  id="avatar"
                  style={{ color: 'transparent' }}
                />
                <label name="" className="btn" htmlFor="avatar">
                  Change Photo Profile
                </label>
                {/* <button className="btn">Change Photo Profile</button> */}
              </form>
            </div>
          </div>
        </div>
        <div className="my-books">
          <h1>My Books</h1>
          <div className="list-owned-books">
            {bookLoading ? (
              <h1>Loading...</h1>
            ) : !ownedBooks.length ? (
              <EmptyList text={`You haven't uploaded any books yet`} />
            ) : (
              ownedBooks.map((book) => {
                return <CardBook key={book.id} {...book} />;
              })
            )}
          </div>
        </div>
      </div>
      {modalOpen && (
        <UploadAvatar
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
          message={message}
          uploadLoading={uploadLoading}
        />
      )}
    </div>
  );
};

export default Profile;
