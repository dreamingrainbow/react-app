import React from 'react';

import { CssBaseline } from '@mui/material';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
// import AuthProvider from './AuthProvider';
import RoutesProvider from './RoutesProvider';

import { useTheme } from '../../hooks/useTheme';

const AppProvider = () => {
  const { theme } = useTheme();
  return (
    <MuiThemeProvider theme={{ ...theme }}>
      <CssBaseline />
      {/*<AuthProvider>*/}
        <RoutesProvider />
      {/*</AuthProvider>*/}
    </MuiThemeProvider>
  );
};

export default AppProvider;