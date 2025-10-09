import React from 'react';
import { useLocation } from 'react-router-dom';
import { ContentProvider } from '../../app/provider/ContentProvider';
import { useRoutes } from '../../hooks/useRoutes';

const Home = () => {
  const { pathname } = useLocation();
  const { routes } = useRoutes();
  const routeConfig = routes.find((r) => r.path === pathname)?.config;
  return <ContentProvider config={routeConfig} />;
};

export default Home;
