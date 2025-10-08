import React from 'react';

import AuthRedirect from './provider/AuthRedirect';
import AppFallback from '../components/common/app-fallback';
import AuthProvider from './provider/AuthProvider';

import Layout from '../layouts';

const getRouteWrapper = (component, authRoute = true) => {
  return (
    <AuthProvider>
      <AuthRedirect authenticatedRoute={authRoute}>
        <React.Suspense fallback={<AppFallback />}>{component}</React.Suspense>
      </AuthRedirect>
    </AuthProvider>
  );
};

const Home = React.lazy(() => import('../pages/home'));
const NotFound = React.lazy(() => import('../pages/not-found'));
const MFA = React.lazy(() => import('../pages/multi-step-authentication'));
const Register = React.lazy(() => import('../pages/register'));
const ForgotPassword = React.lazy(() => import('../pages/forgot-password'));
const ResetPassword = React.lazy(() => import('../pages/reset-password'));
const VerifyEmail = React.lazy(() => import('../pages/verify-email'));
const Identity = React.lazy(() => import('../pages/identity'));
const Dashboard = React.lazy(() => import('../pages/dashboard'));
const SignIn = React.lazy(() => import('../pages/sign-in'));
const Profile = React.lazy(() => import('../pages/profile'));
const Admin = React.lazy(() => import('../pages/admin'));

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
    path: '/profile',
    element: <Layout />,
    children: [
      {
        path: '/profile',
        element: getRouteWrapper(<Profile />, true),
      },
    ],
  },
  {
    path: '/admin',
    element: <Layout />,
    children: [
      {
        path: '/admin',
        element: getRouteWrapper(<Admin />, true),
      },
    ],
  },
  {
    path: '/register',
    element: <Layout />,
    children: [
      {
        path: '/register',
        element: getRouteWrapper(<Register />, false),
      },
    ],
  },
  {
    path: '/forgot-password',
    element: <Layout />,
    children: [
      {
        path: '/forgot-password',
        element: getRouteWrapper(<ForgotPassword />, false),
      },
    ],
  },
  {
    path: '/reset-password',
    element: <Layout />,
    children: [
      {
        path: '/reset-password',
        element: getRouteWrapper(<ResetPassword />, false),
      },
    ],
  },
  {
    path: '/verify-email',
    element: <Layout />,
    children: [
      {
        path: '/verify-email',
        element: getRouteWrapper(<VerifyEmail />, false),
      },
    ],
  },
  {
    path: '/identity',
    element: <Layout />,
    children: [
      {
        path: '/identity',
        element: getRouteWrapper(<Identity />, false),
      },
    ],
  },
  {
    path: '/mfa',
    element: <Layout />,
    children: [
      {
        path: '/mfa',
        element: getRouteWrapper(<MFA />, false),
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: getRouteWrapper(<Dashboard />, true),
      },
    ],
  },
  {
    path: '/sign-in',
    element: <Layout />,
    children: [
      {
        path: '/sign-in',
        element: getRouteWrapper(<SignIn />, false),
      },
    ],
  },
  {
    path: '*',
    element: <Layout />,
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
  MFA,
  Register,
  ForgotPassword,
  ResetPassword,
  VerifyEmail,
  Identity,
  Dashboard,
  SignIn,
  Profile,
  Admin,
};
