import React from 'react';

import { TextField } from './TextField';

const PasswordTextField = (props) => {
  return (
    <TextField
      label="Password"
      name="password"
      size="small"
      type="password"
      {...props}
    />
  );
};

export default PasswordTextField;
