import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAgeVerified } from '../utils/cookies';

const AgeGate = ({ children }) => {
  if (!isAgeVerified()) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default AgeGate;
