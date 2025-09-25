import React from 'react';
import { TextField } from './TextField';

const EmailTextField = (props) => {
  return (
    <TextField
      label="Email"
      name="email"
      size="small"
      type="email"
      {...props}
    />
  );
};

export default EmailTextField;
