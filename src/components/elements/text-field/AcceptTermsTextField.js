import React from 'react';
import { Box, FormControlLabel, Checkbox } from '@mui/material';
const AcceptTermsTextField = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 1,
        width: '100%',
      }}
    >
      <FormControlLabel
        control={<Checkbox name="acceptTerms" {...props} />}
        label="Accept Terms"
      />
    </Box>
  );
};

export default AcceptTermsTextField;
