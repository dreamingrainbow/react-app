import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AuthRedirect from './provider/AuthRedirect';
import AppFallback from '../components/common/app-fallback';

import Layout from '../layouts';

//Protected routes Profile, Admin, Dashboard
const AuthRedirectWrapper = () => {
  //crude hardcoded approach for now...
  const protectedPaths = ['/profile', '/admin', '/dashboard'];
  const location = useLocation();
  const authRoute = protectedPaths.includes(location.pathname);
  return (
    <AuthRedirect authenticatedRoute={authRoute}>
      <React.Suspense fallback={<AppFallback />}>
        <Outlet />
      </React.Suspense>
    </AuthRedirect>
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
    element: <AuthRedirectWrapper />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: '/profile',
            element: <Profile />,
          },
          {
            path: '/admin',
            element: <Admin />,
          },
          {
            path: '/register',
            element: <Register />,
          },
          {
            path: '/forgot-password',
            element: <ForgotPassword />,
          },
          {
            path: '/reset-password',
            element: <ResetPassword />,
          },
          {
            path: '/verify-email',
            element: <VerifyEmail />,
          },
          {
            path: '/identity',
            element: <Identity />,
          },
          {
            path: '/mfa',
            element: <MFA />,
          },
          {
            path: '/dashboard',
            element: <Dashboard />,
          },
          {
            path: '/sign-in',
            element: <SignIn />,
          },
          {
            path: '*',
            element: <NotFound />,
          },
        ],
      },
    ],
  },
];

export {
  routes as default,
  routes,
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
