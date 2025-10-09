import React from 'react';

import { CssBaseline } from '@mui/material';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import RoutesProvider from './RoutesProvider';

import { useTheme } from '../../hooks/useTheme';

const AppProvider = () => {
  const { theme } = useTheme();
  return (
    <MuiThemeProvider theme={{ ...theme }}>
      <CssBaseline />
      <RoutesProvider />
    </MuiThemeProvider>
  );
};

export default AppProvider;
