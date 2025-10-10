import React from 'react';

import AuthProvider from './provider/AuthProvider';
import AuthRedirect from './provider/AuthRedirect';
import AppFallback from '../components/common/app-fallback';



const getRouteWrapper = (component, authRoute = true) => {
  return (
    <AuthProvider>
      <AuthRedirect authenticatedRoute={authRoute}>
        <React.Suspense fallback={<AppFallback />}>{component}</React.Suspense>
      </AuthRedirect>
    </AuthProvider>
  );
};

const Layout = React.lazy(() => import('../layouts/BasicLayout'));
const FullPageLayout = React.lazy(() => import('../layouts/FullPageLayout'));

const Home = React.lazy(() => import('../pages/home'));
const Page = React.lazy(() => import('../pages/page'));
const NotFound = React.lazy(() => import('../pages/not-found'));

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: getRouteWrapper(<Home />, false),
      },
    ],
  },
  {
    path: '*',
    element: <FullPageLayout />,
    children: [
      {
        path: '*',
        element: getRouteWrapper(<NotFound />, false),
      },
    ],
  },
];

export {
  routes as default,
  routes,
  getRouteWrapper,
  Layout,
  Home,
  NotFound,
  Page,
};
