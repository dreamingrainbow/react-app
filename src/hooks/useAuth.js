import React from 'react';

import { AuthContext } from '../app/provider/AuthProvider';

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default useAuth;
