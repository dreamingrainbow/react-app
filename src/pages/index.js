import React from 'react';
// Pages
const Home = React.lazy(() => import('./home'));
const SignIn = React.lazy(() => import('./sign-in'));
const Register = React.lazy(() => import('./register'));
const NotFound = React.lazy(() => import('./not-found'));
const Identity = React.lazy(() => import('./identity'));
const MultiStepAuthentication = React.lazy(() => import('./multi-step-authentication'));
const ResetPassword = React.lazy(() => import('./reset-password'));
const VerifyEmail = React.lazy(() => import('./verify-email'));
const ForgotPassword = React.lazy(() => import('./forgot-password'));
const Dashboard = React.lazy(() => import('./dashboard'));
const Page = React.lazy(() => import('./page'));

export {
  Home,
  SignIn,
  Register,
  NotFound,
  Identity,
  MultiStepAuthentication,
  ResetPassword,
  VerifyEmail,
  ForgotPassword,
  Dashboard,
  Page,
};

export default {
  Home: <Home />,
  SignIn: <SignIn />,
  Register: <Register />,
  NotFound: <NotFound />,
  Identity: <Identity />,
  MultiStepAuthentication: <MultiStepAuthentication />,
  ResetPassword: <ResetPassword />,
  VerifyEmail: <VerifyEmail />,
  ForgotPassword: <ForgotPassword />,
  Dashboard: <Dashboard />,
  Page: <Page />,
};
