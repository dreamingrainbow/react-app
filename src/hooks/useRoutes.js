import { useSelector } from 'react-redux';
import { routesSelector } from '../store/routes';

export const useRoutes = () => {
  const routes = useSelector(routesSelector);
  return { routes };
};

export default useRoutes;
