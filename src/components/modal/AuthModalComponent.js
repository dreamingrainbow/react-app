import * as React from 'react';
import useSnackbar from '../../hooks/useSnackbar';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AuthModalComponent = () => {
  const _auth = useAuth();
  const _snackbar = useSnackbar();
  const navigate = useNavigate();
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h6">Are you still there?</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <Button
          onClick={() => {
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
                  navigate('/');
                }
              })
              .catch((_error) => {
                _snackbar.enqueueSnackbar({
                  message: 'Session expired, logging out',
                  variant: 'error',
                });
                _auth.logout();
                navigate('/');
                // console.log('Error', error);
              });
          }}
        >
          Yes.
        </Button>
        <Button
          onClick={() => {
            _auth.logout();
            navigate('/');
          }}
        >
          No.
        </Button>
      </Box>
    </Box>
  );
};

export default AuthModalComponent;
