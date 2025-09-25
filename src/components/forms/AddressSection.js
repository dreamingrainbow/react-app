import React from 'react';
import { Box } from '@mui/material';
import TextField from '../elements/text-field/TextField';
import AddressLine1TextField from '../elements/text-field/AddressLine1TextField';
import AddressLine2TextField from '../elements/text-field/AddressLine2TextField';

const AddressSection = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        marginBottom: 1,
      }}
    >
      <TextField label="Country" name="country" size="small" {...props} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 1,
          justifyContent: 'flex-start',
        }}
      >
        <TextField label="Postal Code" name="postalCode" size="small" {...props} />
        <TextField label="State" name="state" size="small" {...props} />
        <TextField label="City" name="city" size="small" fullWidth {...props} />
      </Box>
      <AddressLine1TextField {...props} />
      <AddressLine2TextField {...props} />
    </Box>
  );
};

export default AddressSection;
