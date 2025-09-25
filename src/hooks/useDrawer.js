import { useSelector, useDispatch } from 'react-redux';
import {
  selectDrawer,
  selectDrawerOpen,
  toggleDrawer,
  selectDrawerContent,
  setDrawerContent,
  setDrawerAnchor,
  selectDrawerAnchor,
} from '../store/app';

export const useDrawer = () => {
  const dispatch = useDispatch();

  const anchor = useSelector(selectDrawerAnchor);
  const drawer = useSelector(selectDrawer(anchor));
  const isOpen = useSelector(selectDrawerOpen(anchor));
  const content = useSelector(selectDrawerContent(anchor));

  const toggleDrawerAction = (anchor) => dispatch(toggleDrawer({ anchor }));
  const setDrawerContentAction = (anchor, content) =>
    dispatch(setDrawerContent({ anchor, content }));
  const setDrawerAnchorAction = (anchor) => dispatch(setDrawerAnchor(anchor));

  return {
    anchor,
    drawer,
    isOpen,
    toggleDrawer: toggleDrawerAction,
    content,
    setDrawerContent: setDrawerContentAction,
    setDrawerAnchor: setDrawerAnchorAction,
  };
};

export default useDrawer;
