import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MultiStepAuthentication = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h1">Multi Step Authentication</Typography>
      <Button onClick={() => navigate('/')}>Home</Button>
      <Button onClick={() => navigate('/sign-in')}>Sign In</Button>
      <Button onClick={() => navigate('/register')}>Register</Button>
      <Button onClick={() => navigate('/forgot-password')}>Forgot Password</Button>
      <Button onClick={() => navigate('/reset-password')}>Reset Password</Button>
      <Button onClick={() => navigate('/verify-email')}>Verify Email</Button>
      <Button onClick={() => navigate('/identity')}>Identity</Button>
      <Button onClick={() => navigate('/mfa')}>Multi Step Authentication</Button>
      <Button onClick={() => navigate('/dashboard')}>Dashboard</Button>
    </Box>
  );
};

export default MultiStepAuthentication;
