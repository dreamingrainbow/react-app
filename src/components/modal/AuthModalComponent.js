import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useSnackbar from '../../hooks/useSnackbar';
import useAuth from '../../hooks/useAuth';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AuthModalComponent = () => {
  const _auth = useAuth();
  const _snackbar = useSnackbar();
  const navigate = useNavigate();
  // console.log('AuthModalComponent', _auth.open);
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1400,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        border: '1px solid green',
        boxShadow: 3,
        padding: 2,
      }}
    >
      <Typography variant="h6">Are you still there?</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <Button
          onClick={() => {
            _auth.setOpen(false);
            _auth.refreshToken(new Date().getTime());
            _snackbar.enqueueSnackbar({
              message: 'Session refreshed',
              variant: 'success',
            });
            // navigate('/dashboard');
            /*
            fetch('https://winston.services/api/v1/auth/refresh-token', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `${_auth.user.token}`,
              },
            })
              .then((response) => response.json())
              .then((response) => {
                console.log('Response', response);
                // Todo: validate response
                if (_auth.refreshToken(response.data.token)) {
                  _snackbar.enqueueSnackbar({
                    message: 'Session refreshed',
                    variant: 'success',
                  });
                } else {
                  _snackbar.enqueueSnackbar({
                    message: 'Session expired, logging out',
                    variant: 'error',
                  });
                  _auth.logout();
                }
              })
              .catch((_error) => {
                _snackbar.enqueueSnackbar({
                  message: 'Session expired, logging out',
                  variant: 'error',
                });
                _auth.logout();
                _auth.setOpen(false);
                // navigate('/');
                // console.log('Error', error);
              });
              */
          }}
        >
          Yes.
        </Button>
        <Button
          onClick={() => {
            _auth.logout();
            _auth.setOpen(false);
            // console.log('Error', error);
            navigate('/');
          }}
          component={Link}
          to="/"
        >
          No.
        </Button>
      </Box>
    </Box>
  );
};

export default AuthModalComponent;
