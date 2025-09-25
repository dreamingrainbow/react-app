import * as React from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';

import { useDrawer } from '../../../hooks/useDrawer';

//Todo Revist this component, adjust the anchor to be dynamic.

export function Drawer() {
  const {
    anchor,
    isOpen,
    toggleDrawer: toggleDrawerAction,
    content,
    setDrawerAnchor: setDrawerAnchorAction,
  } = useDrawer();

  // console.log("AnchorTemporaryDrawer", anchor)

  const toggleDrawer = (anchor) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    toggleDrawerAction(anchor);
  };

  const DrawerContentWrapper = ({ anchor }) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        padding: 0.5,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor)}
      onKeyDown={toggleDrawer(anchor)}
    >
      {content}
    </Box>
  );

  React.useEffect(() => {
    setDrawerAnchorAction(anchor);
  }, [anchor]);

  return (
    <MuiDrawer
      anchor={anchor}
      open={isOpen}
      SlideProps={{
        direction: anchor === 'right' ? 'left' : anchor === 'left' ? 'right' : anchor === 'top' ? 'down' : anchor === 'bottom' ? 'up' : 'left',
        easing: {
          enter: 'cubic-bezier(0.23, 1, 0.32, 1)',
          exit: 'cubic-bezier(0.23, 1, 0.32, 1)',
        },
      }}
      onClose={toggleDrawer(anchor)}
      sx={{
        '& .MuiDrawer-paper': {
          width: anchor === 'right' || anchor === 'left' ? 250 : 'auto',
          height: anchor === 'top' || anchor === 'bottom' ? 250 : '100%',
        },

        zIndex: 1300,
      }}
      
    >
      <DrawerContentWrapper anchor={anchor} />
    </MuiDrawer>
  );
}

export default Drawer;
