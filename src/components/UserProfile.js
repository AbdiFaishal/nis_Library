import React from 'react';
import userProfile from '../img/profilePic.png';

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
