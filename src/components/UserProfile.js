import React, { useContext } from 'react';
import defaultAvatar from '../img/no-profile-picture.png';
import { UserContext } from './../context/userContext';

const UserProfile = () => {
  const { state } = useContext(UserContext);
  return (
    <div className="profile">
      <div className="user-avatar">
        <img
          src={state.user.avatar ? state.user.avatar : defaultAvatar}
          alt=""
        />
      </div>
      {/* <p>{state.user.fullName.split(' ')[0]}</p> */}
      <p>{state.user.fullName}</p>
    </div>
  );
};

export default UserProfile;
