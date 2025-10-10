import React from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { ContentProvider } from '../../app/provider/ContentProvider';
import { useRoutes } from '../../hooks/useRoutes';

const Page = () => {
  const { pathname } = useLocation();
  const { routes } = useRoutes();
  const routeConfig = routes.find((r) => matchPath(r.path, pathname))?.config;
  return <ContentProvider config={routeConfig} />;
};

export default Page;
