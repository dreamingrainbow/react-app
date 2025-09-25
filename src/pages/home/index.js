import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
  
function Home() {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h1">Home</Typography>
      <Button onClick={() => navigate('/sign-in')}>Sign In</Button>
      <Button onClick={() => navigate('/admin')}>Admin</Button>
      <Button onClick={() => navigate('/profile')}>Profile</Button>
      <Button onClick={() => navigate('/register')}>Register</Button>
      <Button onClick={() => navigate('/forgot-password')}>Forgot Password</Button>
      <Button onClick={() => navigate('/reset-password')}>Reset Password</Button>
      <Button onClick={() => navigate('/verify-email')}>Verify Email</Button>
      <Button onClick={() => navigate('/identity')}>Identity</Button>
      <Button onClick={() => navigate('/mfa')}>Multi Step Authentication</Button>
      <Button onClick={() => navigate('/dashboard')}>Dashboard</Button>
    </Box>
  );
}

export default Home;

