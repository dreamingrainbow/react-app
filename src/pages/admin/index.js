import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Admin() {
  const navigate = useNavigate();
  console.log('location.pathname', location.pathname);
  return (
    <Box>
      <Typography variant="h1">Admin</Typography>
      <Button onClick={() => navigate('/')}>Home</Button>
      <Button onClick={() => navigate('/admin')}>Admin</Button>
      <Button onClick={() => navigate('/profile')}>Profile</Button>
      <Button onClick={() => navigate('/sign-in')}>Sign In</Button>
      <Button onClick={() => navigate('/register')}>Register</Button>
      <Button onClick={() => navigate('/forgot-password')}>
        Forgot Password
      </Button>
      <Button onClick={() => navigate('/reset-password')}>
        Reset Password
      </Button>
      <Button onClick={() => navigate('/verify-email')}>Verify Email</Button>
      <Button onClick={() => navigate('/identity')}>Identity</Button>
      <Button onClick={() => navigate('/mfa')}>
        Multi Step Authentication
      </Button>
      <Button onClick={() => navigate('/dashboard')}>Dashboard</Button>
    </Box>
  );
}

export default Admin;
