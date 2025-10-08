import React from 'react';
import { Box, Typography } from '@mui/material';
import { useDrag } from 'react-dnd';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const DraggableBoxContent = ({ title, children, id, position, setPosition }) => {

  const [{ isDragging }, ref] = useDrag({
    type: 'BOX',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (_item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      if (offset) {
        setPosition({ x: offset.x, y: offset.y });
      }
    },
  });

  return (
    <Box
      ref={ref}
      sx={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        border: '1px solid green',
        // borderColor: 'divider',
        boxShadow: 3,
        padding: 0.5,
        opacity: isDragging ? 0.5 : 1,
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}
      id={id}
    >
      <Box
        sx={{
          cursor: 'move',
          display: 'flex',
          flexDirection: 'column',
          gap: 0.1,
          mb: 0.2,
        }}
      >
        <Box sx={{ display: 'flex', gap: 0.1, backgroundColor: position.color }}>
          <Box sx={{ flexGrow: 1 }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export const DraggableBoxProvider = ({ children }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      {children}
    </DndProvider>
  );
};

const DraggableBox = ({ children, id, title }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DraggableBoxContent id={id} title={title}>
        {children}
      </DraggableBoxContent>
    </DndProvider>
  );
};

export default DraggableBox;
