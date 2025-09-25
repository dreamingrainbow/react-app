import { useSelector, useDispatch } from 'react-redux';

import {
  setDrawer,
  setErrors,
  setModalComponent,
  setNotifications,
  setRoutes,
  setSettings,
  setTheme,
  toggleModal,
  setModalProps,
  toggleDrawer,
  setDrawerContent,
  setDrawerAnchor,
  appDrawerSelector,
  appErrorsSelector,
  appModalSelector,
  appNotificationsSelector,
  appRoutesSelector,
  appSelector,
  appSettingsSelector,
  appThemeSelector,
  selectRoutes,
  selectRoute,
  selectRouteConfig,
} from '../store/app';

export const useApp = () => {
  const dispatch = useDispatch();
  const _setDrawer = (anchor, open, content) =>
    dispatch(setDrawer({ anchor, [anchor]: { open, content } }));

  const _setErrors = (errors) => dispatch(setErrors(errors));

  const _setModalComponent = (component) =>
    dispatch(setModalComponent(component));

  const _setNotifications = (notifications) =>
    dispatch(setNotifications(notifications));

  const _setRoutes = (routes) => dispatch(setRoutes(routes));

  const _setSettings = (settings) => dispatch(setSettings(settings));

  const _setTheme = (theme) => dispatch(setTheme(theme));

  const _toggleModal = () => dispatch(toggleModal());

  const _setModalProps = (props) => dispatch(setModalProps(props));

  const _toggleDrawer = (anchor) => dispatch(toggleDrawer(anchor));

  const _setDrawerContent = (anchor, content) =>
    dispatch(setDrawerContent({ anchor, content }));

  const _setDrawerAnchor = (anchor) => dispatch(setDrawerAnchor(anchor));

  const _app = useSelector(appSelector);
  const _appDrawer = useSelector(appDrawerSelector);
  const _appErrors = useSelector(appErrorsSelector);
  const _appModal = useSelector(appModalSelector);
  const _appNotifications = useSelector(appNotificationsSelector);
  const _appRoutes = useSelector(appRoutesSelector);
  const _appSettings = useSelector(appSettingsSelector);
  const _appTheme = useSelector(appThemeSelector);

  const _selectRoutes = () => useSelector(selectRoutes);
  const _selectRoute = (path) => useSelector(selectRoute(path));
  const _selectRouteConfig = (path) => useSelector(selectRouteConfig(path));

  return {
    app: _app,
    appDrawer: _appDrawer,
    appErrors: _appErrors,
    appModal: _appModal,
    appNotifications: _appNotifications,
    appRoutes: _appRoutes,
    appSettings: _appSettings,
    appTheme: _appTheme,
    setDrawer: _setDrawer,
    setErrors: _setErrors,
    setModalComponent: _setModalComponent,
    setNotifications: _setNotifications,
    setRoutes: _setRoutes,
    setSettings: _setSettings,
    setTheme: _setTheme,
    toggleModal: _toggleModal,
    setModalProps: _setModalProps,
    toggleDrawer: _toggleDrawer,
    setDrawerContent: _setDrawerContent,
    setDrawerAnchor: _setDrawerAnchor,
    selectRoutes: _selectRoutes,
    selectRoute: _selectRoute,
    selectRouteConfig: _selectRouteConfig,
  };
};
