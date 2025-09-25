import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import WebSocketProvider from './WebSocketProvider';
import WebSocketStatus from '../../components/WebSocketStatus';

import AppFallback from '../../components/common/app-fallback';
import ScrollToTop from '../../components/common/scroll-to-top';

import { routes } from '../routes.js';

const AppRoutes = () => {

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <WebSocketProvider>
        <ScrollToTop />
        <React.Suspense fallback={<AppFallback />}>
          {useRoutes(routes)}
        </React.Suspense>
        <WebSocketStatus />
      </WebSocketProvider>
    </SnackbarProvider>
  );
};

const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export { RoutesProvider as default, RoutesProvider };
