import { useSelector, useDispatch } from 'react-redux';
import { appRoutesSelector, setRoutes } from '../store/app';

export const useAppRoutes = () => {
  const routes = useSelector(appRoutesSelector);
  const dispatch = useDispatch();

  const setAppRoutes = (routes) => {
    dispatch(setRoutes(routes));
  };

  return { routes, setRoutes: setAppRoutes };
};

export default useAppRoutes;