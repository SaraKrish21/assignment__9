import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Failure.css';

const Failure = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="failure-container">
      <h1>Login Failed</h1>
      <p>Sorry, we were unable to log you in with the provided credentials. Please try again.</p>
      <button className="failure-button" onClick={handleClick}>Try Again</button>
    </div>
  );
};

export default Failure;