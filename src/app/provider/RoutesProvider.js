import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import WebSocketProvider from './WebSocketProvider';
import WebSocketStatus from '../../components/WebSocketStatus';

import AppFallback from '../../components/common/app-fallback';
import ScrollToTop from '../../components/common/scroll-to-top';
import { useApp } from '../../hooks/useApp';
import { useRoutes as useCustomRoutes } from '../../hooks/useRoutes';
import { getRouteWrapper } from '../routes.js';

import { ComponentLibrary } from '../../hooks/useContent';

const AppRoutes = () => {
  const { app } = useApp();
  const { snackbar } = app;
  const { routes } = useCustomRoutes();
  const [routesInState, setRoutesInState] = React.useState([
    {
      path: '/',
      element: <ComponentLibrary.Layout />,
      children: [
        {
          path: '/',
          element: getRouteWrapper(<ComponentLibrary.Home />, false),
        },
      ],
    },
  ]);
  const [routesLoaded, setRoutesLoaded] = React.useState(false);
  React.useEffect(() => {
    if (!routesLoaded) {
      const loadedRoutes = routes.map((route) => {
        const Layout = ComponentLibrary[route.config.layout];
        const Component = ComponentLibrary[route.config.component];
        return {
          path: route.path,
          element: <Layout />,
          children: [
            {
              path: route.path,
              element: getRouteWrapper(<Component />, route.config.authRoute),
            },
          ],
        };
      });
      setRoutesLoaded(true);
      setRoutesInState(loadedRoutes);
    }
    return () => {
      setRoutesInState([]);
    };
  }, []);

  return (
    <SnackbarProvider
      maxSnack={snackbar.maxSnack}
      anchorOrigin={snackbar.anchorOrigin}
    >
      <WebSocketProvider>
        <ScrollToTop />
        <React.Suspense fallback={<AppFallback />}>
          {useRoutes(routesInState)}
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
