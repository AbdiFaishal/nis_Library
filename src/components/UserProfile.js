import React from 'react';
import userProfile from '../img/userAvatar.jpg';

const UserProfile = () => {
  return (
    <div className="profile">
      <div className="user-avatar">
        <img src={userProfile} alt="" />
      </div>
      <p>Abdi Ganteng</p>
    </div>
  );
};

export default UserProfile;
