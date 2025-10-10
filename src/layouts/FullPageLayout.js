import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const FullPageLayout = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Outlet />
    </Box>
  );
};

export default FullPageLayout;
