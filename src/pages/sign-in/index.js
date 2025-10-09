import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Form from '../../components/common/form';
import EmailTextField from '../../components/elements/text-field/EmailTextField';
import PasswordTextField from '../../components/elements/text-field/PasswordTextField';
import RememberMeTextField from '../../components/elements/text-field/RememberMeTextField';
import useAuth from '../../hooks/useAuth';
import useSnackbar from '../../hooks/useSnackbar';

import * as Yup from 'yup';

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    open,
    handleAuthenticate,
    activate,
  } = useAuth();
  const _snackbar = useSnackbar();
  const [submitted, setSubmitted] = React.useState(false);
  
  // Get the intended destination from location state, default to home
  const from = location.state?.from?.pathname || '/';
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'start',
          gap: 2,
          justifyContent: 'start',
          alignItems: 'start',
          width: '100%',
          paddingLeft: 6,
        }}
      >
        <Typography variant="h4">Sign In {open ? 'Open' : 'Closed'}</Typography>
      </Box>
      {!submitted && (
        <Form
          initialValues={{
            email: '',
            'current-password': '',
            rememberMe: false,
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Invalid email')
              .required('Email is required'),
            'current-password': Yup.string().required('Password is required'),
            rememberMe: Yup.boolean(),
          })}
          onSubmit={(data) => {
            // setOpen(true)
            
            handleAuthenticate(data);     
            activate();
            _snackbar.enqueueSnackbar({
              message: 'Sign in successful',
              variant: 'success',
            });
            setSubmitted(true);
            // Navigate to the intended destination or home
            navigate(from, { replace: true });
          }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'start',
            alignItems: 'start',
            width: '100%',
          }}
        >
          <EmailTextField
            autoComplete="sign-in email new"
            variant="standard"
            name="email"
            label="Email"
          />
          <PasswordTextField
            name="current-password"
            label="Password"
            autoComplete="sign-in current-password new"
            variant="standard"
          />
          <RememberMeTextField />
          <Button onClick={() => navigate('/register')}>Register</Button>
          <Button type="submit">Sign In</Button>
        </Form>
      )}
      {submitted && <Typography variant="h4">Submitted</Typography>}
    </Box>
  );
};

export default SignIn;
