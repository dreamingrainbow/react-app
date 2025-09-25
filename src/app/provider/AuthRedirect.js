import React from 'react';

import { Navigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const AuthRedirect = ({ children, authenticatedRoute = true }) => {
  const { authenticated } = useAuth();
  if (authenticatedRoute) {
    if (!authenticated) {
      return <Navigate to="/sign-in" />;
    }
  }
  return children;
};

export default AuthRedirect;
