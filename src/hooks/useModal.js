import { useSelector, useDispatch } from 'react-redux';
import { setModalComponent, toggleModal, appModalSelector } from '../store/app';

const useModal = () => {
  const dispatch = useDispatch();

  const modal = useSelector(appModalSelector);

  // console.log('moda-l', modal);

  const toggle = () => {
    dispatch(toggleModal(!modal.open));
  };

  const setContent = (content) => {
    dispatch(setModalComponent(content));
  };

  return {
    ...modal,
    toggle,
    setContent,
  };
};

export { useModal };
export default useModal;
