import React from 'react';

const Title = ({ loginOpen, setLoginOpen }) => {
  return (
    <div className="title">
      <h1>
        <span>Your</span> library anywhere
      </h1>
      <p>
        Sign-up today and receive unlimited accesss to all of your reading -
        share your book.
      </p>
      <button className="btn btn-signup">Sign Up</button>
      <button
        className="btn btn-signin"
        onClick={() => setLoginOpen(!loginOpen)}
      >
        Sign In
      </button>
    </div>
  );
};

export default Title;
