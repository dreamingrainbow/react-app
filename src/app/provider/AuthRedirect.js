import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const AuthRedirect = ({ children, authenticatedRoute = true }) => {
  const { authenticated } = useAuth();
  const location = useLocation();
  
  if (authenticatedRoute) {
    if (!authenticated) {
      return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }
  }
  return children;
};

export default AuthRedirect;
