import { useDispatch, useSelector } from 'react-redux';
import {
  selectSpeeddial,
  setOpen,
  setHidden,
  setDirection,
  setActions,
} from '../store/speeddial';

export const useSpeedDial = () => {
  const dispatch = useDispatch();
  const { open, hidden, direction, actions } = useSelector(selectSpeeddial);

  const setOpenSpeedDial = (open) => dispatch(setOpen(open));
  const setHiddenSpeedDial = (hidden) => dispatch(setHidden(hidden));
  const setDirectionSpeedDial = (direction) =>
    dispatch(setDirection(direction));
  const setActionsSpeedDial = (actions) => dispatch(setActions(actions));

  return {
    open,
    hidden,
    direction,
    actions,
    setOpenSpeedDial,
    setHiddenSpeedDial,
    setDirectionSpeedDial,
    setActionsSpeedDial,
  };
};

export default useSpeedDial;
