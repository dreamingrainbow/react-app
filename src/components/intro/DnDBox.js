import React, { useState } from 'react';
import { Box } from '@mui/material';
import { DraggableBoxContent, DraggableBoxProvider } from '../DraggableBox';
import ConnectionLines from './ConnectionLines';

export default function DnDBox() {
  const [connections] = useState([]);

  const [boxes, setBoxes] = useState([
    { id: 'king', title: 'king', x: 100, y: 100, color: 'transparent' },
    { id: 'queen', title: 'Queen', x: 100, y: 100 },
    { id: 'jacks', title: 'Jacks', x: 100, y: 100 },
    { id: 'tens', title: 'Tens', x: 100, y: 100 },
    { id: 'nines', title: 'Nines', x: 100, y: 100 },
    { id: 'eights', title: 'Eights', x: 100, y: 100 },
    { id: 'sevens', title: 'Sevens', x: 100, y: 100 },
    { id: 'sixes', title: 'Sixes', x: 100, y: 100 },
    { id: 'fives', title: 'Fives', x: 100, y: 100 },
    { id: 'fours', title: 'Fours', x: 100, y: 100 },
    { id: 'threes', title: 'Threes', x: 100, y: 100 },
    { id: 'twos', title: 'Twos', x: 100, y: 100 },
    { id: 'ace', title: 'Ace', x: 100, y: 100 },
  ]);

  const setPosition = (id, x, y) => {
    setBoxes(boxes.map((box) => box.id === id ? { ...box, x, y } : box));
  };

  // todo: randomly move the boxes
  React.useEffect(() => {
    const interval = setInterval(() => {
      setBoxes(boxes.map((box) => ({ ...box, x: Math.random() * 600, y: Math.random() * 600 })));
    }, 14000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',

        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <DraggableBoxProvider>
        {boxes.map((box) => (
          <DraggableBoxContent key={box.id} id={box.id} title={box.title} position={{x: box.x, y: box.y}} setPosition={setPosition}>
            {box.title}
          </DraggableBoxContent>
        ))}        
      </DraggableBoxProvider>

      <ConnectionLines connections={connections} />
    </Box>
  );
}
