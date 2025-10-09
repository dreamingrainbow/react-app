import React from 'react';
import { Box, FormControlLabel, Checkbox } from '@mui/material';
const RememberMeTextField = (props) => {
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
        control={<Checkbox name="rememberMe" />}
        label="Remember Me"
      />
    </Box>
  );
};

export default RememberMeTextField;
