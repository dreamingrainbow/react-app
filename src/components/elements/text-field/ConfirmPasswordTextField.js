import React from 'react';

import { TextField } from './TextField';

const ConfirmPasswordTextField = (props) => {
  return (
    <TextField
      label="Confirm Password"
      name="confirm-password"
      size="small"
      type="password"
      {...props}
    />
  );
};

export default ConfirmPasswordTextField;
