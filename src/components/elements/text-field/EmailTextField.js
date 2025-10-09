import React from 'react';
import { Box } from '@mui/material';
import { TextField } from './TextField';

const EmailTextField = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 1,
      }}
    >
      <TextField
        name="email"
        type="email"
        {...props}
      />
    </Box>
  );
};

export default EmailTextField;
