import React from 'react';
import AuthModalComponent from '../../components/modal/AuthModalComponent';
import useModal from '../../hooks/useModal';

export const AuthModal = ({ open }) => {
  const { open: modalOpen, toggle, setContent } = useModal();
  // console.log('AuthModal', open, modalOpen);
  React.useEffect(() => {
    if (open !== modalOpen) {
      // console.log('AuthModal', open, modalOpen);
      toggle();
      if (open) {
        setContent(AuthModalComponent);
      }
    }
  }, [open, modalOpen, toggle, setContent]);

  return null;
};
