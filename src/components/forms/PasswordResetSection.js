import React from 'react';

import { Box } from '@mui/material';

import ConfirmPasswordTextField from '../elements/text-field/ConfirmPasswordTextField';
import PasswordTextField from '../elements/text-field/PasswordTextField';

const PasswordResetSection = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        marginBottom: 1,
      }}
    >
      <PasswordTextField {...props} />
      <ConfirmPasswordTextField {...props} />
    </Box>
  );
};

export default PasswordResetSection;
